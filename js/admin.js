/* ============================================
   Olivia Admin — Yönetim Paneli mantığı
   ============================================ */

(function () {
  'use strict';

  const SOCIAL_TYPES = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'twitter', label: 'X / Twitter' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'tripadvisor', label: 'TripAdvisor' },
    { value: 'googlemaps', label: 'Google Maps' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'phone', label: 'Telefon' },
    { value: 'email', label: 'E-posta' },
    { value: 'website', label: 'Web Sitesi' }
  ];

  const STORAGE_MENU = 'olivia_draft_menu';
  const STORAGE_CONFIG = 'olivia_draft_config';

  // Mutable working copies
  const STATE = {
    menu: deepClone(window.MENU || { food: [], drinks: [], wines: [] }),
    config: deepClone(window.CONFIG || {}),
    activeTab: 'food',
    editing: { kind: null, catIndex: -1, itemIndex: -1, isNew: false, draft: null },
    catEditing: { kind: null, catIndex: -1, isNew: false, draft: null },
    activeLangTab: 'tr'
  };

  // ============================================
  // Init
  // ============================================
  function init() {
    loadDraft();
    bindTabs();
    bindTopbarButtons();
    bindModalButtons();
    bindSettings();
    renderAll();
    showSaveStatus('saved');
  }

  // ============================================
  // Deep clone helper
  // ============================================
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  // ============================================
  // Draft persistence
  // ============================================
  function loadDraft() {
    try {
      const m = localStorage.getItem(STORAGE_MENU);
      if (m) {
        const parsed = JSON.parse(m);
        if (parsed && typeof parsed === 'object') STATE.menu = parsed;
      }
      const c = localStorage.getItem(STORAGE_CONFIG);
      if (c) {
        const parsed = JSON.parse(c);
        if (parsed && typeof parsed === 'object') STATE.config = parsed;
      }
    } catch (e) {
      console.warn('Could not load draft:', e);
    }
    // Ensure structure
    if (!STATE.menu.food)   STATE.menu.food = [];
    if (!STATE.menu.drinks) STATE.menu.drinks = [];
    if (!STATE.menu.wines)  STATE.menu.wines = [];
    if (!STATE.config.social) STATE.config.social = [];
  }

  let saveTimer;
  function saveDraft() {
    showSaveStatus('dirty');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_MENU, JSON.stringify(STATE.menu));
        localStorage.setItem(STORAGE_CONFIG, JSON.stringify(STATE.config));
        showSaveStatus('saved');
      } catch (e) {
        console.error(e);
        toast('Kaydedilemedi: ' + e.message, true);
      }
    }, 400);
  }

  function showSaveStatus(state) {
    const el = document.getElementById('saveStatus');
    if (state === 'saved') {
      el.classList.remove('dirty');
      el.textContent = '●  Otomatik kaydedildi';
    } else {
      el.classList.add('dirty');
      el.textContent = 'Kaydediliyor…';
    }
  }

  // ============================================
  // Tabs
  // ============================================
  function bindTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
  }

  function switchTab(name) {
    STATE.activeTab = name;
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === name);
    });
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('panel-' + name);
    if (panel) panel.classList.add('active');
    if (name === 'settings') renderSettings();
  }

  // ============================================
  // Topbar buttons
  // ============================================
  function bindTopbarButtons() {
    document.getElementById('btnPreview').addEventListener('click', openPreview);
    document.getElementById('btnExport').addEventListener('click', exportFiles);
    document.getElementById('btnImport').addEventListener('click', () => {
      document.getElementById('importInput').click();
    });
    document.getElementById('importInput').addEventListener('change', handleImport);
    document.getElementById('btnReload').addEventListener('click', reloadFromFiles);
  }

  function reloadFromFiles() {
    const msg = 'Admin\'de yaptığınız tüm yerel değişiklikler silinecek ve menu.js / config.js dosyalarındaki güncel veriler yüklenecek.\n\nBu işlemden önce kaydetmediğiniz değişiklikler varsa "Dışa Aktar" ile yedek alın.\n\nDevam edilsin mi?';
    if (!confirm(msg)) return;
    try {
      localStorage.removeItem(STORAGE_MENU);
      localStorage.removeItem(STORAGE_CONFIG);
    } catch (e) {}
    location.reload();
  }

  function openPreview() {
    // Make sure draft is flushed before opening
    try {
      localStorage.setItem(STORAGE_MENU, JSON.stringify(STATE.menu));
      localStorage.setItem(STORAGE_CONFIG, JSON.stringify(STATE.config));
    } catch (e) {}
    window.open('index.html?preview=1', '_blank');
  }

  // ============================================
  // Render all
  // ============================================
  function renderAll() {
    renderList('food');
    renderList('drinks');
    renderList('wines');
    updateCounts();
  }

  function updateCounts() {
    const count = (kind) => STATE.menu[kind].reduce((acc, c) => acc + (c.items || []).length, 0);
    document.getElementById('countFood').textContent = count('food');
    document.getElementById('countDrinks').textContent = count('drinks');
    document.getElementById('countWines').textContent = count('wines');
  }

  // ============================================
  // Categories list rendering
  // ============================================
  function renderList(kind) {
    const list = document.getElementById('list-' + kind);
    list.innerHTML = '';
    const cats = STATE.menu[kind];

    if (!cats.length) {
      list.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">${kind === 'wines' ? '🍷' : kind === 'drinks' ? '🥤' : '🍽️'}</div>
          <p>Henüz kategori yok. İlk kategoriyi ekleyerek başlayın.</p>
          <button class="btn btn-primary btn-sm" data-action="add-category" data-kind="${kind}">+ İlk Kategoriyi Ekle</button>
        </div>`;
      list.querySelector('[data-action="add-category"]').addEventListener('click', () => openCategoryModal(kind, -1, true));
      return;
    }

    cats.forEach((cat, ci) => {
      const block = document.createElement('div');
      block.className = 'category-block';
      block.dataset.catIndex = ci;
      block.dataset.kind = kind;

      // Head
      const head = document.createElement('div');
      head.className = 'category-head';
      head.innerHTML = `
        <div class="category-head-left">
          <span class="category-drag" title="Sırala (sürükle veya ↑↓)" draggable="true"></span>
          <span class="category-name">${escapeHtml(getName(cat.name))}</span>
          <span class="category-count">${(cat.items || []).length} ürün</span>
        </div>
        <div class="category-actions">
          <button class="icon-btn" title="Yukarı" data-act="cat-up">↑</button>
          <button class="icon-btn" title="Aşağı" data-act="cat-down">↓</button>
          <button class="icon-btn" title="Düzenle" data-act="cat-edit">✎</button>
          <button class="icon-btn danger" title="Sil" data-act="cat-delete">✕</button>
        </div>`;
      block.appendChild(head);

      // Items
      const itemsWrap = document.createElement('div');
      itemsWrap.className = 'category-items';

      if (!(cat.items || []).length) {
        const empty = document.createElement('div');
        empty.className = 'category-empty';
        empty.textContent = 'Bu kategoride henüz ürün yok.';
        itemsWrap.appendChild(empty);
      } else {
        cat.items.forEach((item, ii) => {
          const row = renderItemRow(kind, ci, ii, item);
          itemsWrap.appendChild(row);
        });
      }

      const addBtn = document.createElement('button');
      addBtn.className = 'btn-add-item';
      addBtn.textContent = '+ Ürün Ekle';
      addBtn.addEventListener('click', () => openItemModal(kind, ci, -1, true));
      itemsWrap.appendChild(addBtn);

      block.appendChild(itemsWrap);

      // Bind category actions
      head.querySelector('[data-act="cat-up"]').addEventListener('click', () => moveCategory(kind, ci, -1));
      head.querySelector('[data-act="cat-down"]').addEventListener('click', () => moveCategory(kind, ci, 1));
      head.querySelector('[data-act="cat-edit"]').addEventListener('click', () => openCategoryModal(kind, ci, false));
      head.querySelector('[data-act="cat-delete"]').addEventListener('click', () => deleteCategory(kind, ci));

      // Drag-drop categories
      attachCatDrag(block, head.querySelector('.category-drag'), kind, ci);

      list.appendChild(block);
    });

    // Add-category button at bottom
    if (cats.length) {
      const addCatBtn = document.createElement('button');
      addCatBtn.className = 'btn btn-ghost btn-sm';
      addCatBtn.style.marginTop = '8px';
      addCatBtn.textContent = '+ Yeni Kategori';
      addCatBtn.addEventListener('click', () => openCategoryModal(kind, -1, true));
      list.appendChild(addCatBtn);
    }
  }

  function renderItemRow(kind, ci, ii, item) {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.dataset.kind = kind;
    row.dataset.catIndex = ci;
    row.dataset.itemIndex = ii;

    const thumb = item.image
      ? `<img src="${escapeAttr(item.image)}" alt="">`
      : (item.icon || (kind === 'wines' ? '🍷' : '🍽️'));

    const priceText = formatItemPrice(item, kind);
    const desc = item.description || '';

    row.innerHTML = `
      <span class="item-drag" title="Sürükle">⋮⋮</span>
      <div class="item-thumb">${thumb}</div>
      <div class="item-text">
        <div class="item-text-name">${escapeHtml(item.name || '(isimsiz)')}</div>
        <div class="item-text-desc">${escapeHtml(desc)}</div>
      </div>
      <span class="item-pricetag">${priceText}</span>
      <span class="row-actions">
        <button class="icon-btn" title="Yukarı" data-act="item-up">↑</button>
        <button class="icon-btn" title="Aşağı" data-act="item-down">↓</button>
        <button class="icon-btn" title="Düzenle" data-act="item-edit">✎</button>
        <button class="icon-btn danger" title="Sil" data-act="item-delete">✕</button>
      </span>`;

    row.querySelector('[data-act="item-up"]').addEventListener('click', () => moveItem(kind, ci, ii, -1));
    row.querySelector('[data-act="item-down"]').addEventListener('click', () => moveItem(kind, ci, ii, 1));
    row.querySelector('[data-act="item-edit"]').addEventListener('click', () => openItemModal(kind, ci, ii, false));
    row.querySelector('[data-act="item-delete"]').addEventListener('click', () => deleteItem(kind, ci, ii));

    // Click thumb / name to also edit
    row.querySelector('.item-thumb').addEventListener('click', () => openItemModal(kind, ci, ii, false));
    row.querySelector('.item-text').addEventListener('click', () => openItemModal(kind, ci, ii, false));

    attachItemDrag(row, row.querySelector('.item-drag'), kind, ci, ii);

    return row;
  }

  function getName(nameField) {
    if (!nameField) return '(isimsiz)';
    if (typeof nameField === 'string') return nameField;
    return nameField.tr || nameField.en || Object.values(nameField)[0] || '(isimsiz)';
  }

  function formatItemPrice(item, kind) {
    const cur = STATE.config.currency || '₺';
    const before = STATE.config.currencyBefore;
    const fmt = (n) => before ? `${cur}${n}` : `${n} ${cur}`;
    if (kind === 'wines') {
      const parts = [];
      if (item.glassPrice)  parts.push(item.glassPrice);
      if (item.bottlePrice) parts.push(item.bottlePrice);
      if (!parts.length && item.price) parts.push(item.price);
      return parts.length ? fmt(parts.join(' / ')) : '—';
    }
    return item.price ? fmt(item.price) : '—';
  }

  // ============================================
  // Move / delete
  // ============================================
  function moveCategory(kind, ci, dir) {
    const arr = STATE.menu[kind];
    const ni = ci + dir;
    if (ni < 0 || ni >= arr.length) return;
    [arr[ci], arr[ni]] = [arr[ni], arr[ci]];
    saveDraft();
    renderList(kind);
  }

  function moveItem(kind, ci, ii, dir) {
    const arr = STATE.menu[kind][ci].items;
    const ni = ii + dir;
    if (ni < 0 || ni >= arr.length) return;
    [arr[ii], arr[ni]] = [arr[ni], arr[ii]];
    saveDraft();
    renderList(kind);
  }

  function deleteCategory(kind, ci) {
    const cat = STATE.menu[kind][ci];
    const itemCount = (cat.items || []).length;
    const msg = itemCount
      ? `"${getName(cat.name)}" kategorisi ve içindeki ${itemCount} ürün silinecek. Emin misiniz?`
      : `"${getName(cat.name)}" kategorisini silmek istediğinizden emin misiniz?`;
    if (!confirm(msg)) return;
    STATE.menu[kind].splice(ci, 1);
    saveDraft();
    renderList(kind);
    updateCounts();
  }

  function deleteItem(kind, ci, ii) {
    const item = STATE.menu[kind][ci].items[ii];
    if (!confirm(`"${item.name}" silinecek. Emin misiniz?`)) return;
    STATE.menu[kind][ci].items.splice(ii, 1);
    saveDraft();
    renderList(kind);
    updateCounts();
  }

  // ============================================
  // Drag and drop
  // ============================================
  let dragData = null;

  function attachCatDrag(block, handle, kind, ci) {
    handle.addEventListener('dragstart', (e) => {
      dragData = { type: 'cat', kind, ci };
      block.style.opacity = '0.5';
      e.dataTransfer.effectAllowed = 'move';
      try { e.dataTransfer.setData('text/plain', 'cat'); } catch (err) {}
    });
    handle.addEventListener('dragend', () => {
      block.style.opacity = '';
      dragData = null;
      document.querySelectorAll('.category-block').forEach(b => b.style.borderColor = '');
    });
    block.addEventListener('dragover', (e) => {
      if (!dragData || dragData.type !== 'cat' || dragData.kind !== kind || dragData.ci === ci) return;
      e.preventDefault();
      block.style.borderColor = 'var(--accent)';
    });
    block.addEventListener('dragleave', () => { block.style.borderColor = ''; });
    block.addEventListener('drop', (e) => {
      if (!dragData || dragData.type !== 'cat' || dragData.kind !== kind) return;
      e.preventDefault();
      const arr = STATE.menu[kind];
      const moved = arr.splice(dragData.ci, 1)[0];
      arr.splice(ci, 0, moved);
      saveDraft();
      renderList(kind);
    });
  }

  function attachItemDrag(row, handle, kind, ci, ii) {
    handle.addEventListener('mousedown', () => row.draggable = true);
    handle.addEventListener('touchstart', () => row.draggable = true, { passive: true });
    row.addEventListener('dragstart', (e) => {
      dragData = { type: 'item', kind, ci, ii };
      row.style.opacity = '0.5';
      e.dataTransfer.effectAllowed = 'move';
      try { e.dataTransfer.setData('text/plain', 'item'); } catch (err) {}
    });
    row.addEventListener('dragend', () => {
      row.style.opacity = '';
      row.draggable = false;
      dragData = null;
    });
    row.addEventListener('dragover', (e) => {
      if (!dragData || dragData.type !== 'item' || dragData.kind !== kind || dragData.ci !== ci || dragData.ii === ii) return;
      e.preventDefault();
    });
    row.addEventListener('drop', (e) => {
      if (!dragData || dragData.type !== 'item' || dragData.kind !== kind || dragData.ci !== ci) return;
      e.preventDefault();
      const arr = STATE.menu[kind][ci].items;
      const moved = arr.splice(dragData.ii, 1)[0];
      arr.splice(ii, 0, moved);
      saveDraft();
      renderList(kind);
    });
  }

  // ============================================
  // Category modal
  // ============================================
  function openCategoryModal(kind, ci, isNew) {
    const cat = isNew
      ? { id: '', name: { tr: '', en: '', sv: '', no: '', da: '', fi: '', ru: '', de: '' }, items: [] }
      : deepClone(STATE.menu[kind][ci]);
    if (!cat.name || typeof cat.name === 'string') {
      cat.name = { tr: cat.name || '', en: '', sv: '', no: '', da: '', fi: '', ru: '', de: '' };
    }
    STATE.catEditing = { kind, catIndex: ci, isNew, draft: cat };

    document.getElementById('catModalTitle').textContent = isNew ? 'Yeni Kategori' : 'Kategoriyi Düzenle';
    const body = document.getElementById('catModalBody');
    body.innerHTML = '';

    // ID
    const idLabel = document.createElement('label');
    idLabel.className = 'field';
    idLabel.innerHTML = `<span>Kategori kimliği <small style="color:var(--text-dim)">(otomatik oluşturulur)</small></span><input type="text" id="catId">`;
    body.appendChild(idLabel);
    idLabel.querySelector('#catId').value = cat.id || '';

    // Name in 8 langs (tabbed)
    body.appendChild(buildLangTabsField('Kategori adı', cat.name, (lang, val) => {
      cat.name[lang] = val;
    }));

    // Note (8 langs, optional) — shown above category items in customer view
    if (!cat.note || typeof cat.note !== 'object') cat.note = {};
    const noteValues = {};
    (window.LANGUAGES || []).forEach(l => { noteValues[l.code] = cat.note[l.code] || ''; });
    const noteWrap = document.createElement('div');
    noteWrap.className = 'field';
    noteWrap.innerHTML = `<span>Kategori notu <small style="color:var(--text-dim)">(opsiyonel — kategori başlığının altında gösterilir, ör. "tüm yemekler garnitür ile servis edilir")</small></span>`;
    noteWrap.appendChild(buildLangTabsTextarea(noteValues, (lang, val) => {
      cat.note[lang] = val;
    }));
    body.appendChild(noteWrap);

    // Delete button visibility
    document.getElementById('catDelete').style.display = isNew ? 'none' : '';

    openModal('catModal');
  }

  document.addEventListener('DOMContentLoaded', () => {});

  // ============================================
  // Item modal
  // ============================================
  function openItemModal(kind, ci, ii, isNew) {
    const item = isNew
      ? makeBlankItem(kind)
      : deepClone(STATE.menu[kind][ci].items[ii]);

    if (!item.translations) item.translations = {};

    STATE.editing = { kind, catIndex: ci, itemIndex: ii, isNew, draft: item };

    document.getElementById('itemModalTitle').textContent = isNew ? 'Yeni Ürün' : 'Ürünü Düzenle';
    const body = document.getElementById('itemModalBody');
    body.innerHTML = '';

    // Name
    body.appendChild(field('Ürün adı', `<input type="text" id="itName" placeholder="Örn. Sigara Böreği">`));

    // Image upload
    body.appendChild(buildImageZone(item, (newSrc) => {
      item.image = newSrc;
    }));

    // Icon (fallback emoji)
    body.appendChild(field(`Görsel olmadığında gösterilecek emoji <small style="color:var(--text-dim)">(opsiyonel)</small>`, `<input type="text" id="itIcon" maxlength="4" placeholder="🍽️">`));

    // Pricing
    if (kind === 'wines') {
      const grid = document.createElement('div');
      grid.className = 'field-grid-2';
      grid.appendChild(field('Kadeh fiyatı', `<input type="number" id="itGlass" min="0" step="any" placeholder="opsiyonel">`));
      grid.appendChild(field('Şişe fiyatı', `<input type="number" id="itBottle" min="0" step="any">`));
      body.appendChild(grid);

      // Wine extras
      body.appendChild(field('Üretici', `<input type="text" id="itProducer" placeholder="Örn. Kavaklıdere">`));
      const grid2 = document.createElement('div');
      grid2.className = 'field-grid-2';
      grid2.appendChild(field('Bölge', `<input type="text" id="itRegion" placeholder="Örn. Anadolu">`));
      grid2.appendChild(field('Yıl', `<input type="number" id="itYear" min="1900" max="2100" placeholder="2021">`));
      body.appendChild(grid2);
      body.appendChild(field('Üzüm türü', `<input type="text" id="itGrape" placeholder="Örn. Öküzgözü, Boğazkere">`));
    } else {
      body.appendChild(field('Fiyat', `<input type="number" id="itPrice" min="0" step="any">`));
    }

    // Section (subcategory) — optional, used to group items under a sub-header
    if (!item.section || typeof item.section !== 'object') item.section = {};
    const sectionValues = {};
    (window.LANGUAGES || []).forEach(l => { sectionValues[l.code] = item.section[l.code] || ''; });
    body.appendChild(buildLangTabsField(
      `Alt bölüm <small style="color:var(--text-dim)">(opsiyonel · ürünleri kategori içinde gruplandırır, örn. "Romlar", "Votka & Cin")</small>`,
      sectionValues,
      (lang, val) => { item.section[lang] = val; }
    ));

    // Tags
    const tagsField = field('Etiketler', `
      <div style="display:flex; gap:14px; flex-wrap:wrap;">
        <label class="field-row" style="margin:0"><input type="checkbox" id="tagVeg"><span>Vejeteryan</span></label>
        <label class="field-row" style="margin:0"><input type="checkbox" id="tagSpicy"><span>Acılı</span></label>
        <label class="field-row" style="margin:0"><input type="checkbox" id="tagNew"><span>Yeni</span></label>
      </div>`);
    body.appendChild(tagsField);

    // Description tabs (8 langs)
    const descContainer = document.createElement('div');
    descContainer.className = 'field';
    const descLabel = document.createElement('span');
    descLabel.innerHTML = `Açıklama <small style="color:var(--text-dim)">(8 dilde)</small>`;
    descContainer.appendChild(descLabel);

    const descValues = {
      tr: item.description || '',
      en: (item.translations && item.translations.en) || '',
      sv: (item.translations && item.translations.sv) || '',
      no: (item.translations && item.translations.no) || '',
      da: (item.translations && item.translations.da) || '',
      fi: (item.translations && item.translations.fi) || '',
      ru: (item.translations && item.translations.ru) || '',
      de: (item.translations && item.translations.de) || ''
    };
    descContainer.appendChild(buildLangTabsTextarea(descValues, (lang, val) => {
      if (lang === 'tr') item.description = val;
      else item.translations[lang] = val;
    }));
    body.appendChild(descContainer);

    // Populate fields
    document.getElementById('itName').value = item.name || '';
    document.getElementById('itIcon').value = item.icon || '';
    if (kind === 'wines') {
      document.getElementById('itGlass').value  = item.glassPrice ?? '';
      document.getElementById('itBottle').value = item.bottlePrice ?? '';
      document.getElementById('itProducer').value = item.producer || '';
      document.getElementById('itRegion').value   = item.region || '';
      document.getElementById('itYear').value     = item.year || '';
      document.getElementById('itGrape').value    = item.grape || '';
    } else {
      document.getElementById('itPrice').value = item.price ?? '';
    }
    const tags = item.tags || [];
    document.getElementById('tagVeg').checked   = tags.includes('veg');
    document.getElementById('tagSpicy').checked = tags.includes('spicy');
    document.getElementById('tagNew').checked   = tags.includes('new');

    document.getElementById('itemDelete').style.display = isNew ? 'none' : '';

    openModal('itemModal');
  }

  function makeBlankItem(kind) {
    const base = {
      name: '',
      image: '',
      icon: '',
      description: '',
      translations: { en: '', sv: '', no: '', da: '', fi: '', ru: '', de: '' },
      tags: []
    };
    if (kind === 'wines') {
      return Object.assign(base, {
        producer: '', region: '', year: null, grape: '',
        glassPrice: null, bottlePrice: null, icon: '🍷'
      });
    }
    return Object.assign(base, { price: 0 });
  }

  // ============================================
  // Helpers for fields
  // ============================================
  function field(label, innerHtml) {
    const wrap = document.createElement('label');
    wrap.className = 'field';
    wrap.innerHTML = `<span>${label}</span>${innerHtml}`;
    return wrap;
  }

  function buildLangTabsField(label, values, onChange) {
    const wrap = document.createElement('div');
    wrap.className = 'field';
    wrap.innerHTML = `<span>${label}</span>`;
    const tabsBar = document.createElement('div');
    tabsBar.className = 'lang-tabs';
    const panes = document.createElement('div');

    const langs = (window.LANGUAGES || []).map(l => l.code);

    langs.forEach((lang, idx) => {
      const meta = window.LANGUAGES.find(l => l.code === lang);
      const tabBtn = document.createElement('button');
      tabBtn.type = 'button';
      tabBtn.className = 'lang-tab' + (idx === 0 ? ' active' : '');
      tabBtn.dataset.lang = lang;
      tabBtn.innerHTML = `<span>${meta.flag}</span><span>${meta.short}</span>`;
      if (values[lang]) tabBtn.classList.add('has-content');
      tabBtn.addEventListener('click', () => {
        tabsBar.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
        tabBtn.classList.add('active');
        panes.querySelectorAll('.lang-pane').forEach(p => p.classList.remove('active'));
        panes.querySelector(`[data-pane="${lang}"]`).classList.add('active');
      });
      tabsBar.appendChild(tabBtn);

      const pane = document.createElement('div');
      pane.className = 'lang-pane' + (idx === 0 ? ' active' : '');
      pane.dataset.pane = lang;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = values[lang] || '';
      input.style.cssText = 'background:var(--bg-elev);border:1px solid var(--border);border-radius:8px;padding:10px 12px;color:var(--text);font-size:14px;width:100%;';
      input.addEventListener('input', () => {
        onChange(lang, input.value);
        tabBtn.classList.toggle('has-content', !!input.value);
      });
      pane.appendChild(input);
      panes.appendChild(pane);
    });

    wrap.appendChild(tabsBar);
    wrap.appendChild(panes);
    return wrap;
  }

  function buildLangTabsTextarea(values, onChange) {
    const wrap = document.createElement('div');
    const tabsBar = document.createElement('div');
    tabsBar.className = 'lang-tabs';
    const panes = document.createElement('div');

    const langs = (window.LANGUAGES || []).map(l => l.code);

    langs.forEach((lang, idx) => {
      const meta = window.LANGUAGES.find(l => l.code === lang);
      const tabBtn = document.createElement('button');
      tabBtn.type = 'button';
      tabBtn.className = 'lang-tab' + (idx === 0 ? ' active' : '');
      tabBtn.innerHTML = `<span>${meta.flag}</span><span>${meta.short}</span>`;
      if (values[lang]) tabBtn.classList.add('has-content');
      tabBtn.addEventListener('click', () => {
        tabsBar.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
        tabBtn.classList.add('active');
        panes.querySelectorAll('.lang-pane').forEach(p => p.classList.remove('active'));
        panes.querySelector(`[data-pane="${lang}"]`).classList.add('active');
      });
      tabsBar.appendChild(tabBtn);

      const pane = document.createElement('div');
      pane.className = 'lang-pane' + (idx === 0 ? ' active' : '');
      pane.dataset.pane = lang;
      const ta = document.createElement('textarea');
      ta.value = values[lang] || '';
      ta.placeholder = lang === 'tr' ? 'Türkçe açıklama (varsayılan)…' : `${meta.name} açıklama (boş bırakırsanız İngilizce çeviri kullanılır)`;
      ta.style.cssText = 'background:var(--bg-elev);border:1px solid var(--border);border-radius:8px;padding:10px 12px;color:var(--text);font-size:14px;width:100%;min-height:80px;font-family:inherit;line-height:1.5;resize:vertical;';
      ta.addEventListener('input', () => {
        onChange(lang, ta.value);
        tabBtn.classList.toggle('has-content', !!ta.value);
      });
      pane.appendChild(ta);
      panes.appendChild(pane);
    });

    wrap.appendChild(tabsBar);
    wrap.appendChild(panes);
    return wrap;
  }

  // ============================================
  // Image upload zone
  // ============================================
  function buildImageZone(item, onChange) {
    const wrap = document.createElement('div');
    wrap.className = 'field';
    wrap.innerHTML = `<span>Görsel</span>`;
    const zone = document.createElement('div');
    zone.className = 'image-zone';
    wrap.appendChild(zone);

    function paint() {
      zone.innerHTML = '';
      if (item.image) {
        const preview = document.createElement('div');
        preview.className = 'image-zone-preview';
        const img = document.createElement('img');
        img.src = item.image;
        preview.appendChild(img);
        const info = document.createElement('div');
        info.className = 'image-zone-info';
        const sizeKB = Math.round((item.image.length * 0.75) / 1024); // approx for base64
        info.innerHTML = `
          <div class="image-zone-info-row"><span>Görsel yüklendi</span><span style="font-variant-numeric: tabular-nums;">~${sizeKB} KB</span></div>
          <div class="image-actions">
            <button type="button" class="btn btn-ghost btn-sm" data-act="replace">Değiştir</button>
            <button type="button" class="btn btn-danger btn-sm" data-act="remove">Kaldır</button>
          </div>`;
        preview.appendChild(info);
        zone.appendChild(preview);
        info.querySelector('[data-act="replace"]').addEventListener('click', (e) => { e.stopPropagation(); pickFile(); });
        info.querySelector('[data-act="remove"]').addEventListener('click', (e) => {
          e.stopPropagation();
          item.image = '';
          onChange('');
          paint();
        });
      } else {
        zone.innerHTML = `
          <div class="image-zone-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
            <strong>Görsel ekle</strong>
            <span>Sürükle bırak veya tıklayarak seç · JPG / PNG · otomatik küçültülür</span>
          </div>`;
      }
    }

    function pickFile() {
      const inp = document.createElement('input');
      inp.type = 'file';
      inp.accept = 'image/*';
      inp.addEventListener('change', () => {
        const f = inp.files[0];
        if (f) handleFile(f);
      });
      inp.click();
    }

    function handleFile(file) {
      if (!file.type.startsWith('image/')) {
        toast('Lütfen bir görsel dosyası seçin', true);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => resizeImage(e.target.result, 1000, 0.85, (resized) => {
        item.image = resized;
        onChange(resized);
        paint();
      });
      reader.readAsDataURL(file);
    }

    zone.addEventListener('click', (e) => {
      // Only trigger picker on empty zone click
      if (!item.image) pickFile();
    });

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    });

    paint();
    return wrap;
  }

  function resizeImage(dataUrl, maxDim, quality, cb) {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        const ratio = Math.min(maxDim / width, maxDim / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      try {
        cb(canvas.toDataURL('image/jpeg', quality));
      } catch (e) {
        cb(dataUrl);
      }
    };
    img.onerror = () => cb(dataUrl);
    img.src = dataUrl;
  }

  // ============================================
  // Modal open / close / save
  // ============================================
  function openModal(id) {
    const m = document.getElementById(id);
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    const m = document.getElementById(id);
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function bindModalButtons() {
    document.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
      }
    });

    // Save item
    document.getElementById('itemSave').addEventListener('click', saveItem);
    document.getElementById('itemDelete').addEventListener('click', () => {
      const e = STATE.editing;
      if (e.isNew) { closeModal('itemModal'); return; }
      const item = STATE.menu[e.kind][e.catIndex].items[e.itemIndex];
      if (!confirm(`"${item.name}" silinecek. Emin misiniz?`)) return;
      STATE.menu[e.kind][e.catIndex].items.splice(e.itemIndex, 1);
      saveDraft();
      renderList(e.kind);
      updateCounts();
      closeModal('itemModal');
    });

    // Save category
    document.getElementById('catSave').addEventListener('click', saveCategory);
    document.getElementById('catDelete').addEventListener('click', () => {
      const e = STATE.catEditing;
      if (e.isNew) { closeModal('catModal'); return; }
      deleteCategory(e.kind, e.catIndex);
      closeModal('catModal');
    });
  }

  function saveItem() {
    const e = STATE.editing;
    const draft = e.draft;
    // Pull form values
    draft.name = document.getElementById('itName').value.trim();
    draft.icon = document.getElementById('itIcon').value.trim();

    if (e.kind === 'wines') {
      const g = parseFloat(document.getElementById('itGlass').value);
      const b = parseFloat(document.getElementById('itBottle').value);
      draft.glassPrice  = isNaN(g) ? null : g;
      draft.bottlePrice = isNaN(b) ? null : b;
      draft.producer = document.getElementById('itProducer').value.trim();
      draft.region   = document.getElementById('itRegion').value.trim();
      const y = parseInt(document.getElementById('itYear').value, 10);
      draft.year = isNaN(y) ? null : y;
      draft.grape = document.getElementById('itGrape').value.trim();
    } else {
      const p = parseFloat(document.getElementById('itPrice').value);
      draft.price = isNaN(p) ? 0 : p;
    }

    const tags = [];
    if (document.getElementById('tagVeg').checked)   tags.push('veg');
    if (document.getElementById('tagSpicy').checked) tags.push('spicy');
    if (document.getElementById('tagNew').checked)   tags.push('new');
    draft.tags = tags;

    if (!draft.name) {
      toast('Ürün adı boş olamaz', true);
      return;
    }

    // Clean up empty section object so it doesn't render an empty subheader
    if (draft.section) {
      const hasSection = Object.values(draft.section).some(v => v && String(v).trim());
      if (!hasSection) delete draft.section;
    }

    if (e.isNew) {
      STATE.menu[e.kind][e.catIndex].items.push(draft);
    } else {
      STATE.menu[e.kind][e.catIndex].items[e.itemIndex] = draft;
    }
    saveDraft();
    renderList(e.kind);
    updateCounts();
    closeModal('itemModal');
    toast(e.isNew ? 'Ürün eklendi' : 'Ürün güncellendi');
  }

  function saveCategory() {
    const e = STATE.catEditing;
    const draft = e.draft;
    const idInput = document.getElementById('catId').value.trim();

    // Generate id if empty
    if (!idInput) {
      const base = (draft.name.tr || draft.name.en || 'cat')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '') || 'cat';
      let id = base, n = 1;
      const used = new Set(STATE.menu[e.kind].map((c, i) => i === e.catIndex ? null : c.id).filter(Boolean));
      while (used.has(id)) id = `${base}_${++n}`;
      draft.id = id;
    } else {
      draft.id = idInput;
    }

    if (!draft.name.tr && !draft.name.en) {
      toast('Kategori adı (TR veya EN) gerekli', true);
      return;
    }

    // Clean up empty note object so it doesn't render an empty paragraph
    if (draft.note) {
      const hasNote = Object.values(draft.note).some(v => v && String(v).trim());
      if (!hasNote) delete draft.note;
    }

    if (e.isNew) {
      if (!draft.items) draft.items = [];
      STATE.menu[e.kind].push(draft);
    } else {
      STATE.menu[e.kind][e.catIndex] = draft;
    }
    saveDraft();
    renderList(e.kind);
    updateCounts();
    closeModal('catModal');
    toast(e.isNew ? 'Kategori eklendi' : 'Kategori güncellendi');
  }

  // ============================================
  // Settings
  // ============================================
  function bindSettings() {
    // Triggered when settings tab opens (renderSettings handles bindings)
  }

  function renderSettings() {
    document.getElementById('cfgName').value = STATE.config.name || '';
    document.getElementById('cfgTagline').value = STATE.config.tagline || '';
    document.getElementById('cfgWifiSsid').value = (STATE.config.wifi && STATE.config.wifi.ssid) || '';
    document.getElementById('cfgWifiPassword').value = (STATE.config.wifi && STATE.config.wifi.password) || '';
    document.getElementById('cfgCurrency').value = STATE.config.currency || '₺';
    document.getElementById('cfgCurrencyBefore').checked = !!STATE.config.currencyBefore;

    // Default lang options
    const sel = document.getElementById('cfgDefaultLang');
    sel.innerHTML = '';
    (window.LANGUAGES || []).forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.code;
      opt.textContent = `${l.flag} ${l.name}`;
      sel.appendChild(opt);
    });
    sel.value = STATE.config.defaultLang || 'en';

    // Bind once
    if (!sel.dataset.bound) {
      const inputs = ['cfgName', 'cfgTagline', 'cfgWifiSsid', 'cfgWifiPassword', 'cfgCurrency'];
      inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', applySettings);
      });
      document.getElementById('cfgCurrencyBefore').addEventListener('change', applySettings);
      sel.addEventListener('change', applySettings);
      document.getElementById('btnAddSocial').addEventListener('click', addSocialRow);
      sel.dataset.bound = '1';
    }
    renderSocialList();
    renderLogoZone();
  }

  function renderLogoZone() {
    const zone = document.getElementById('logoZone');
    if (!zone) return;
    zone.className = 'image-zone';

    function paint() {
      zone.innerHTML = '';
      const logo = STATE.config.logo;
      if (logo) {
        const sizeKB = logo.startsWith('data:')
          ? Math.round((logo.length * 0.75) / 1024)
          : null;
        const preview = document.createElement('div');
        preview.className = 'image-zone-preview';
        const img = document.createElement('img');
        img.src = logo;
        img.style.background = 'rgba(255,255,255,0.04)';
        preview.appendChild(img);
        const info = document.createElement('div');
        info.className = 'image-zone-info';
        info.innerHTML = `
          <div class="image-zone-info-row">
            <span>Logo yüklendi</span>
            <span style="font-variant-numeric: tabular-nums;">${sizeKB ? '~' + sizeKB + ' KB' : ''}</span>
          </div>
          <div class="image-actions">
            <button type="button" class="btn btn-ghost btn-sm" data-act="replace">Değiştir</button>
            <button type="button" class="btn btn-danger btn-sm" data-act="remove">Kaldır</button>
          </div>`;
        preview.appendChild(info);
        zone.appendChild(preview);
        info.querySelector('[data-act="replace"]').addEventListener('click', (e) => { e.stopPropagation(); pickFile(); });
        info.querySelector('[data-act="remove"]').addEventListener('click', (e) => {
          e.stopPropagation();
          STATE.config.logo = '';
          saveDraft();
          paint();
        });
      } else {
        zone.innerHTML = `
          <div class="image-zone-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
            <strong>Logo yükle</strong>
            <span>Sürükle bırak veya tıklayarak seç · PNG (şeffaf arkaplan) önerilir · otomatik küçültülür</span>
          </div>`;
      }
    }

    function pickFile() {
      const inp = document.createElement('input');
      inp.type = 'file';
      inp.accept = 'image/*';
      inp.addEventListener('change', () => {
        const f = inp.files[0];
        if (f) handleFile(f);
      });
      inp.click();
    }

    function handleFile(file) {
      if (!file.type.startsWith('image/')) {
        toast('Lütfen bir görsel dosyası seçin', true);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const original = e.target.result;
        // SVG: keep as-is (small, scalable)
        if (file.type === 'image/svg+xml') {
          STATE.config.logo = original;
          saveDraft();
          paint();
          return;
        }
        // PNG/JPG: resize to max 600px, preserve transparency for PNG
        const useTransparent = (file.type === 'image/png');
        resizeLogoImage(original, 600, useTransparent, (resized) => {
          STATE.config.logo = resized;
          saveDraft();
          paint();
        });
      };
      reader.readAsDataURL(file);
    }

    zone.addEventListener('click', () => { if (!STATE.config.logo) pickFile(); });
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    });

    paint();
  }

  function resizeLogoImage(dataUrl, maxDim, transparent, cb) {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        const ratio = Math.min(maxDim / width, maxDim / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      try {
        // PNG to keep transparency, JPEG otherwise (smaller)
        const out = transparent
          ? canvas.toDataURL('image/png')
          : canvas.toDataURL('image/jpeg', 0.9);
        cb(out);
      } catch (e) {
        cb(dataUrl);
      }
    };
    img.onerror = () => cb(dataUrl);
    img.src = dataUrl;
  }

  function applySettings() {
    STATE.config.name = document.getElementById('cfgName').value.trim();
    STATE.config.tagline = document.getElementById('cfgTagline').value.trim();
    STATE.config.currency = document.getElementById('cfgCurrency').value || '₺';
    STATE.config.currencyBefore = document.getElementById('cfgCurrencyBefore').checked;
    STATE.config.defaultLang = document.getElementById('cfgDefaultLang').value;
    STATE.config.wifi = {
      ssid: document.getElementById('cfgWifiSsid').value.trim(),
      password: document.getElementById('cfgWifiPassword').value
    };
    saveDraft();
  }

  function renderSocialList() {
    const list = document.getElementById('socialList');
    list.innerHTML = '';
    (STATE.config.social || []).forEach((s, idx) => {
      const row = document.createElement('div');
      row.className = 'social-row';

      const drag = document.createElement('span');
      drag.className = 'social-drag';
      drag.textContent = '⋮⋮';
      drag.draggable = true;
      drag.dataset.idx = idx;
      drag.addEventListener('dragstart', (e) => {
        dragData = { type: 'social', idx };
        row.style.opacity = '0.5';
      });
      drag.addEventListener('dragend', () => row.style.opacity = '');
      row.addEventListener('dragover', (e) => {
        if (dragData && dragData.type === 'social' && dragData.idx !== idx) e.preventDefault();
      });
      row.addEventListener('drop', (e) => {
        if (!dragData || dragData.type !== 'social') return;
        e.preventDefault();
        const arr = STATE.config.social;
        const moved = arr.splice(dragData.idx, 1)[0];
        arr.splice(idx, 0, moved);
        saveDraft();
        renderSocialList();
      });

      const sel = document.createElement('select');
      SOCIAL_TYPES.forEach(t => {
        const o = document.createElement('option');
        o.value = t.value; o.textContent = t.label;
        if (t.value === s.type) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener('change', () => { s.type = sel.value; saveDraft(); });

      const url = document.createElement('input');
      url.type = 'text';
      url.value = s.url || '';
      url.placeholder = 'https://… veya tel:+9055…';
      url.addEventListener('input', () => { s.url = url.value.trim(); saveDraft(); });

      const remove = document.createElement('button');
      remove.className = 'icon-btn danger';
      remove.textContent = '✕';
      remove.title = 'Sil';
      remove.addEventListener('click', () => {
        STATE.config.social.splice(idx, 1);
        saveDraft();
        renderSocialList();
      });

      row.appendChild(drag);
      row.appendChild(sel);
      row.appendChild(url);
      row.appendChild(remove);
      list.appendChild(row);
    });
  }

  function addSocialRow() {
    if (!STATE.config.social) STATE.config.social = [];
    STATE.config.social.push({ type: 'instagram', url: '' });
    saveDraft();
    renderSocialList();
  }

  // ============================================
  // Export / Import
  // ============================================
  function exportFiles() {
    const menuJs = `/* ============================================
   MENÜ — Yönetim Paneli'nden ${new Date().toLocaleString('tr-TR')} tarihinde dışa aktarıldı
   ============================================ */

window.MENU = ${JSON.stringify(STATE.menu, null, 2)};
`;
    download('menu.js', menuJs, 'application/javascript');

    const configJs = `/* ============================================
   AYARLAR — Yönetim Paneli'nden ${new Date().toLocaleString('tr-TR')} tarihinde dışa aktarıldı
   ============================================ */

window.CONFIG = ${JSON.stringify(STATE.config, null, 2)};
`;
    download('config.js', configJs, 'application/javascript');

    toast('İki dosya indirildi: menu.js + config.js');
  }

  function download(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }

  function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      try {
        // Try JSON first
        let parsed;
        try { parsed = JSON.parse(text); }
        catch { parsed = parseJsExport(text); }

        if (!parsed) throw new Error('Dosya tanınamadı');

        if (parsed.food || parsed.drinks || parsed.wines) {
          // Looks like menu
          if (!confirm('Mevcut menü değişiklikleri içe aktarılan dosyayla değiştirilsin mi?')) return;
          STATE.menu = parsed;
          if (!STATE.menu.food)   STATE.menu.food = [];
          if (!STATE.menu.drinks) STATE.menu.drinks = [];
          if (!STATE.menu.wines)  STATE.menu.wines = [];
          saveDraft();
          renderAll();
          toast('Menü içe aktarıldı');
        } else if (parsed.name || parsed.wifi || parsed.social) {
          if (!confirm('Mevcut ayarlar değiştirilsin mi?')) return;
          STATE.config = parsed;
          if (!STATE.config.social) STATE.config.social = [];
          saveDraft();
          if (STATE.activeTab === 'settings') renderSettings();
          toast('Ayarlar içe aktarıldı');
        } else {
          toast('Dosya tanınamadı', true);
        }
      } catch (err) {
        toast('Dosya okunamadı: ' + err.message, true);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function parseJsExport(text) {
    // Strip comments
    const cleaned = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
    // Try to find object literal after = sign
    const m = cleaned.match(/=\s*(\{[\s\S]*\})\s*;?\s*$/);
    if (!m) return null;
    try {
      // Safe-ish parse using Function (data files only — user-controlled)
      return new Function('return ' + m[1])();
    } catch (e) {
      return null;
    }
  }

  // ============================================
  // Utilities
  // ============================================
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function escapeAttr(s) { return escapeHtml(s); }

  let toastTimer;
  function toast(msg, isError) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.toggle('error', !!isError);
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // ============================================
  // Boot
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
