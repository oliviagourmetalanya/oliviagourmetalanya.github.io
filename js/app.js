/* ============================================
   Olivia Gourmet — Application Logic
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // Preview / draft override
  // ============================================
  // Admin sayfası "Önizleme" tuşuna bastığında bu sayfayı
  // ?preview=1 ile açar. Bu durumda localStorage'daki taslak
  // veriler menu.js / config.js içeriğinin yerine kullanılır.
  (function applyDraft() {
    try {
      const params = new URLSearchParams(location.search);
      if (params.get('preview') !== '1') return;

      const dm = localStorage.getItem('olivia_draft_menu');
      if (dm) {
        const parsed = JSON.parse(dm);
        Object.keys(window.MENU || {}).forEach(k => delete window.MENU[k]);
        Object.assign(window.MENU, parsed);
      }
      const dc = localStorage.getItem('olivia_draft_config');
      if (dc) {
        const parsed = JSON.parse(dc);
        Object.keys(window.CONFIG || {}).forEach(k => delete window.CONFIG[k]);
        Object.assign(window.CONFIG, parsed);
      }
      // Optional: visual hint that this is a preview, not the live menu
      document.documentElement.dataset.preview = '1';
    } catch (e) {
      console.warn('Draft preview load failed', e);
    }
  })();

  // ============================================
  // Social media SVG icons
  // ============================================
  const SOCIAL_ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.21-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85C2.3 3.86 3.81 2.31 7.07 2.16 8.34 2.18 8.72 2.16 12 2.16zm0 5.84a4 4 0 100 8 4 4 0 000-8zm0 6.6a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2zm5.1-6.76a.94.94 0 11-1.88 0 .94.94 0 011.88 0z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 4H22l-7.2 8.23L23 22h-6.6l-5.18-6.77L5.3 22H2.2l7.7-8.81L1.7 4h6.77l4.68 6.18L18.9 4zm-1.16 16.13h1.72L7.36 5.78H5.5l12.24 14.35z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.6a4.85 4.85 0 01-2.83-1A4.85 4.85 0 0115.3 2h-3.5v13.4a2.66 2.66 0 11-2.66-2.66c.27 0 .53.04.78.12V9.31a6.16 6.16 0 105.38 6.1V8.6a8.16 8.16 0 004.78 1.54V6.6h-.5z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 00.5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 002.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 002.1-2.1C24 15.6 24 12 24 12s0-3.6-.5-5.5zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
    tripadvisor: '<svg viewBox="0 0 576 512" fill="#34E0A1" shape-rendering="geometricPrecision" class="social-icon-color"><path d="M166.4 280.7c-1.5-.1-3.1 0-4.7 0-30.3 0-53.7 24.7-53.7 55 0 30.4 24.6 55 55 55 30.3 0 55-24.6 55-55 0-30.3-22.7-54.1-51.6-55zm-1.4 82.9c-15.7 0-28.6-12.9-28.6-28.6 0-15.7 12.8-28.6 28.6-28.6 15.7 0 28.6 12.9 28.6 28.6-.1 15.7-13 28.6-28.6 28.6zm252.7-82.9c-30.3 0-55 24.6-55 55 0 30.4 24.6 55 55 55 30.3 0 55-24.7 55-55 0-30.4-24.6-55-55-55zm0 82.9c-15.7 0-28.6-12.8-28.6-28.6 0-15.7 12.8-28.6 28.6-28.6 15.7 0 28.6 12.9 28.6 28.6-.1 15.6-13 28.6-28.6 28.6zm159.3-101.7c0-40.4 43-165.7-289.5-165.7C41.7 96.4 39.5 227.8 39.5 262v1.1c-8.3-1.9-16-3.1-25.4-3.1S0 264 0 264v3.4c0 20.4 5 47.7 17.4 76.4l7.3 15.9 8.9-15.1c8.8-14.6 25.3-24.9 42.8-30.4C104.9 424.5 264.5 464 288 464c22.9 0 178.9-38.3 209.8-149.4 17.6 4.9 34.7 15.6 44.3 30.5l8.6 15.5 7.5-16c12.3-28.7 17.4-56 17.4-76.4v-3.4c0-.1-1.6-5.1-13.6-5.1-9.4 0-17.5 1.5-25.9 3.5v-1.7zM64.5 273.7c0-42 34.4-76.4 76.4-76.4s76.4 34.4 76.4 76.4c0 42-34.4 76.4-76.4 76.4-42 0-76.4-34.4-76.4-76.4zm223.5 155c-10.2 0-33-27.4-38.8-56.8h-1c-6.7 29.4-27.4 56.8-38.7 56.8-19.3 0-56.5-40.1-56.5-113.4 0-73.2 45.9-99 96.3-99h0c50.5 0 96.3 25.8 96.3 99 0 73.3-37.2 113.4-57.6 113.4zm153-155c0-42 34.4-76.4 76.4-76.4h.5c42 0 76.4 34.4 76.4 76.4 0 42-34.4 76.4-76.4 76.4-42 0-76.9-34.4-76.9-76.4z"/></svg>',
    googlemaps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" shape-rendering="geometricPrecision"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.71 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0122 16.92z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>'
  };

  const SOCIAL_LABELS = {
    instagram: 'Instagram', facebook: 'Facebook', twitter: 'X / Twitter',
    tiktok: 'TikTok', youtube: 'YouTube', tripadvisor: 'TripAdvisor',
    googlemaps: 'Google Maps', whatsapp: 'WhatsApp', phone: 'Phone',
    email: 'Email', website: 'Website'
  };

  // ============================================
  // State
  // ============================================
  const STATE = {
    lang: CONFIG.defaultLang,
    view: 'home',
    activeCategory: {
      food:   loadActiveCategory('food'),
      drinks: loadActiveCategory('drinks'),
      wines:  loadActiveCategory('wines')
    },
    drinksFilter: loadDrinksFilter()
  };

  function loadActiveCategory(kind) {
    try { return localStorage.getItem('olivia_active_cat_' + kind) || null; }
    catch (e) { return null; }
  }
  function saveActiveCategory(kind, catId) {
    try { localStorage.setItem('olivia_active_cat_' + kind, catId); } catch (e) {}
  }
  function loadDrinksFilter() {
    try { return localStorage.getItem('olivia_drinks_filter') || 'all'; }
    catch (e) { return 'all'; }
  }
  function saveDrinksFilter(f) {
    try { localStorage.setItem('olivia_drinks_filter', f); } catch (e) {}
  }

  // ============================================
  // Language detection & switching
  // ============================================
  function detectLanguage() {
    // 1. Saved preference takes priority
    try {
      const saved = localStorage.getItem('olivia_lang');
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch (e) { /* localStorage may be blocked */ }

    // 2. Device language(s) — navigator.languages preferred over navigator.language
    const candidates = [
      ...(navigator.languages || []),
      navigator.language,
      navigator.userLanguage
    ].filter(Boolean);

    for (const raw of candidates) {
      const code = raw.toLowerCase().split('-')[0];
      // Normalize Norwegian variants (nb, nn -> no)
      const norm = (code === 'nb' || code === 'nn') ? 'no' : code;
      if (TRANSLATIONS[norm]) return norm;
    }

    // 3. Fallback to default
    return CONFIG.defaultLang;
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    STATE.lang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('olivia_lang', lang); } catch (e) {}

    // Update language switcher button
    const meta = LANGUAGES.find(l => l.code === lang);
    if (meta) {
      document.getElementById('currentFlag').textContent = meta.flag;
      document.getElementById('currentCode').textContent = meta.short;
    }

    // Mark active option
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Translate UI strings
    const t = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
    });

    // Re-render menus (category names + descriptions)
    renderMenu('food');
    renderMenu('drinks');
    renderMenu('wines');
  }

  // Translation helper with fallback chain: lang -> en -> tr
  function tr(field, lang) {
    if (typeof field === 'string') return field;
    if (!field || typeof field !== 'object') return '';
    return field[lang] || field.en || field.tr || Object.values(field)[0] || '';
  }

  function trDesc(item, lang) {
    if (lang === CONFIG.sourceLang) return item.description || '';
    if (item.translations && item.translations[lang]) return item.translations[lang];
    if (item.translations && item.translations[CONFIG.defaultLang]) return item.translations[CONFIG.defaultLang];
    return item.description || '';
  }

  // ============================================
  // Rendering
  // ============================================
  function formatPrice(amount) {
    // 0 / null / undefined / empty → "—" (e.g., complimentary extras &
    // sauces that ship with the main dish — saves manual editing per item)
    if (!amount) return '—';
    const num = new Intl.NumberFormat(STATE.lang, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
    return CONFIG.currencyBefore ? `${CONFIG.currency}${num}` : `${num} ${CONFIG.currency}`;
  }

  function renderHome() {
    // Wi-Fi
    const wifiSsid = document.getElementById('wifiSsid');
    const wifiPwd = document.getElementById('wifiPassword');
    const wifiCard = document.querySelector('.info-card');

    if (CONFIG.wifi && CONFIG.wifi.ssid) {
      wifiSsid.textContent = CONFIG.wifi.ssid;
      wifiPwd.textContent = CONFIG.wifi.password || '';
      wifiCard.style.display = '';
    } else {
      wifiCard.style.display = 'none';
    }

    // Social
    const socialEl = document.getElementById('socialLinks');
    socialEl.innerHTML = '';
    (CONFIG.social || []).forEach(s => {
      if (!s.url || !SOCIAL_ICONS[s.type]) return;
      const a = document.createElement('a');
      a.className = 'social-link';
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', SOCIAL_LABELS[s.type] || s.type);
      a.innerHTML = SOCIAL_ICONS[s.type];
      socialEl.appendChild(a);
    });
  }

  function renderMenu(kind) {
    const allCats = MENU[kind];
    if (!allCats || !Array.isArray(allCats)) return;

    const catEl = document.getElementById(kind + 'Categories');
    const itemsEl = document.getElementById(kind + 'Items');
    catEl.innerHTML = '';
    itemsEl.innerHTML = '';

    if (!allCats.length) {
      itemsEl.innerHTML = '<div class="empty-state">—</div>';
      return;
    }

    // Drinks: filter by alcoholic toggle
    let data = allCats;
    if (kind === 'drinks' && STATE.drinksFilter !== 'all') {
      data = allCats.filter(c => {
        const isAlc = c.alcoholic !== false; // default true
        return STATE.drinksFilter === 'alc' ? isAlc : !isAlc;
      });
      if (!data.length) {
        itemsEl.innerHTML = '<div class="empty-state">—</div>';
        return;
      }
    }

    // Drinks: render filter toggle bar
    if (kind === 'drinks') renderDrinksFilter();

    // Pick active category (first by default)
    let activeId = STATE.activeCategory[kind];
    if (!activeId || (activeId !== '__all' && !data.find(c => c.id === activeId))) {
      activeId = data[0].id;
      STATE.activeCategory[kind] = activeId;
    }

    // Category pills (also "All")
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn' + (activeId === '__all' ? ' active' : '');
    allBtn.textContent = TRANSLATIONS[STATE.lang].all || 'All';
    allBtn.addEventListener('click', () => {
      STATE.activeCategory[kind] = '__all';
      saveActiveCategory(kind, '__all');
      renderMenu(kind);
    });
    catEl.appendChild(allBtn);

    data.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'category-btn' + (cat.id === activeId ? ' active' : '');
      btn.textContent = tr(cat.name, STATE.lang);
      btn.addEventListener('click', () => {
        STATE.activeCategory[kind] = cat.id;
        saveActiveCategory(kind, cat.id);
        renderMenu(kind);
        // Don't auto-scroll the page — categories bar is sticky, user keeps
        // their scroll position. They can manually scroll if they want.
      });
      catEl.appendChild(btn);
    });

    // Auto-scroll active pill into view (centered horizontally)
    requestAnimationFrame(() => {
      const active = catEl.querySelector('.category-btn.active');
      if (active && catEl.scrollWidth > catEl.clientWidth) {
        active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      setupCustomScrollbar(catEl);
      syncCategoriesBarHeight();
    });

    // Items
    if (activeId === '__all') {
      data.forEach(cat => {
        if (!cat.items || !cat.items.length) return;
        const section = document.createElement('div');
        section.className = 'category-section';
        const title = document.createElement('h3');
        title.className = 'category-title';
        title.textContent = tr(cat.name, STATE.lang);
        section.appendChild(title);
        if (cat.note) {
          const noteText = tr(cat.note, STATE.lang);
          if (noteText) {
            const note = document.createElement('p');
            note.className = 'category-note';
            note.textContent = noteText;
            section.appendChild(note);
          }
        }
        renderItemsWithSections(cat.items, kind, section);
        itemsEl.appendChild(section);
      });
    } else {
      const cat = data.find(c => c.id === activeId);
      if (cat) {
        if (cat.note) {
          const noteText = tr(cat.note, STATE.lang);
          if (noteText) {
            const note = document.createElement('p');
            note.className = 'category-note';
            note.textContent = noteText;
            itemsEl.appendChild(note);
          }
        }
        renderItemsWithSections(cat.items, kind, itemsEl);
      }
    }
  }

  // Render items, inserting subsection headers when item.section changes
  function renderItemsWithSections(items, kind, container) {
    let lastSection = null;
    items.forEach(item => {
      const sectionLabel = item.section ? tr(item.section, STATE.lang) : null;
      if (sectionLabel && sectionLabel !== lastSection) {
        const h = document.createElement('h4');
        h.className = 'item-section';
        h.textContent = sectionLabel;
        container.appendChild(h);
        lastSection = sectionLabel;
      } else if (!sectionLabel) {
        lastSection = null;
      }
      container.appendChild(renderItem(item, kind));
    });
  }

  // Drinks: render the alcoholic / non-alcoholic / all toggle above categories
  function renderDrinksFilter() {
    const filterEl = document.getElementById('drinksFilter');
    if (!filterEl) return;
    const t = TRANSLATIONS[STATE.lang];
    const buttons = [
      { key: 'all',   label: t.filterAll   || 'All' },
      { key: 'noalc', label: t.filterNonAlc|| 'Non-Alcoholic' },
      { key: 'alc',   label: t.filterAlc   || 'Alcoholic' }
    ];
    filterEl.innerHTML = '';
    buttons.forEach(b => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (STATE.drinksFilter === b.key ? ' active' : '');
      btn.textContent = b.label;
      btn.addEventListener('click', () => {
        if (STATE.drinksFilter === b.key) return;
        STATE.drinksFilter = b.key;
        saveDrinksFilter(b.key);
        // Reset active category — the previous one might be filtered out
        STATE.activeCategory.drinks = null;
        renderMenu('drinks');
      });
      filterEl.appendChild(btn);
    });
  }

  function renderItem(item, kind) {
    const card = document.createElement('article');
    card.className = 'item' + (kind === 'wines' ? ' item-wine' : '');

    // Always start with a lightweight placeholder (emoji or icon).
    // If the item has an image, load it lazily as user scrolls — so initial
    // page render is fast even with many embedded base64 images.
    const ph = document.createElement('div');
    ph.className = 'item-image-placeholder';
    ph.textContent = item.icon || (kind === 'wines' ? '🍷' : '🍽️');
    card.appendChild(ph);

    if (item.image) {
      ph.dataset.lazySrc = item.image;
      ph.dataset.lazyAlt = item.name || '';
      enqueueLazyImage(ph);
    }

    // Body
    const body = document.createElement('div');
    body.className = 'item-body';

    const header = document.createElement('div');
    header.className = 'item-header';
    const name = document.createElement('h4');
    name.className = 'item-name';
    name.textContent = item.name || '';
    header.appendChild(name);

    // Price (wines: glass / bottle, others: single price)
    const priceEl = document.createElement('div');
    priceEl.className = 'item-price-wrap';
    if (kind === 'wines') {
      const t = TRANSLATIONS[STATE.lang];
      const parts = [];
      if (item.glassPrice)  parts.push({ label: t.glass,  val: formatPrice(item.glassPrice) });
      if (item.bottlePrice) parts.push({ label: t.bottle, val: formatPrice(item.bottlePrice) });
      // Backward-compat: legacy "price" field if neither is set
      if (!parts.length && item.price) parts.push({ label: '', val: formatPrice(item.price) });

      const priceLine = document.createElement('span');
      priceLine.className = 'item-price';
      priceLine.textContent = parts.map(p => p.val).join(' / ');
      priceEl.appendChild(priceLine);

      if (parts.length === 2) {
        const subLabel = document.createElement('span');
        subLabel.className = 'item-price-sub';
        subLabel.textContent = parts.map(p => p.label).join(' / ');
        priceEl.appendChild(subLabel);
      }
    } else {
      const price = document.createElement('span');
      price.className = 'item-price';
      price.textContent = formatPrice(item.price);
      priceEl.appendChild(price);
    }
    header.appendChild(priceEl);
    body.appendChild(header);

    // Wine-specific subtitle: producer · year · grape
    if (kind === 'wines') {
      const subParts = [];
      if (item.producer) subParts.push(item.producer);
      if (item.region)   subParts.push(item.region);
      if (item.year)     subParts.push(String(item.year));
      if (subParts.length) {
        const sub = document.createElement('p');
        sub.className = 'item-wine-meta';
        sub.textContent = subParts.join(' · ');
        body.appendChild(sub);
      }
      if (item.grape) {
        const grape = document.createElement('p');
        grape.className = 'item-wine-grape';
        grape.textContent = item.grape;
        body.appendChild(grape);
      }
    }

    const desc = trDesc(item, STATE.lang);
    if (desc) {
      const d = document.createElement('p');
      d.className = 'item-desc';
      d.textContent = desc;
      body.appendChild(d);
    }

    if (Array.isArray(item.tags) && item.tags.length) {
      const tags = document.createElement('div');
      tags.className = 'item-tags';
      const t = TRANSLATIONS[STATE.lang];
      item.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'item-tag ' + tag;
        if (tag === 'veg')   span.textContent = t.tagVeg;
        else if (tag === 'spicy') span.textContent = t.tagSpicy;
        else if (tag === 'new')   span.textContent = t.tagNew;
        else span.textContent = tag;
        tags.appendChild(span);
      });
      body.appendChild(tags);
    }

    card.appendChild(body);
    return card;
  }

  // ============================================
  // View routing (hash-based)
  // ============================================
  function showView(view) {
    STATE.view = view;
    document.documentElement.setAttribute('data-view', view);
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(view + 'View');
    if (target) target.classList.add('active');

    // Back button visibility
    const backBtn = document.getElementById('backBtn');
    if (view === 'home') {
      backBtn.classList.remove('visible');
    } else {
      backBtn.classList.add('visible');
    }

    // Update document title
    if (view === 'home') {
      document.title = `${CONFIG.name} ${CONFIG.tagline}`;
    } else {
      const titleKey = view + 'Menu';
      const titleStr = (TRANSLATIONS[STATE.lang] && TRANSLATIONS[STATE.lang][titleKey]) || '';
      document.title = `${titleStr} — ${CONFIG.name}`;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function readHash() {
    const h = (window.location.hash || '').replace(/^#\/?/, '');
    if (h === 'food' || h === 'drinks' || h === 'wines') return h;
    return 'home';
  }

  function navigate(view) {
    if (view === 'home') {
      history.pushState(null, '', window.location.pathname + window.location.search);
    } else {
      window.location.hash = '#/' + view;
      return;
    }
    showView(view);
  }

  // ============================================
  // Toast
  // ============================================
  let toastTimer;
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
  }

  // ============================================
  // Init
  // ============================================
  // ============================================
  // Custom scrollbar for the categories pill — inset from rounded corners
  // ============================================
  function setupCustomScrollbar(catEl) {
    const wrap = catEl.parentElement;
    if (!wrap || !wrap.classList.contains('categories-wrap')) return;

    let track = wrap.querySelector('.cat-scroll-track');
    let thumb;
    if (!track) {
      track = document.createElement('div');
      track.className = 'cat-scroll-track';
      thumb = document.createElement('div');
      thumb.className = 'cat-scroll-thumb';
      track.appendChild(thumb);
      wrap.appendChild(track);
    } else {
      thumb = track.querySelector('.cat-scroll-thumb');
    }

    function update() {
      const sw = catEl.scrollWidth;
      const cw = catEl.clientWidth;
      if (sw <= cw + 1) {
        track.classList.add('hidden');
        return;
      }
      track.classList.remove('hidden');
      const trackWidth = track.offsetWidth;
      const thumbWidth = Math.max(28, Math.round((cw / sw) * trackWidth));
      const maxThumbX = trackWidth - thumbWidth;
      const ratio = catEl.scrollLeft / (sw - cw);
      const thumbX = Math.max(0, Math.min(maxThumbX, ratio * maxThumbX));
      thumb.style.width = thumbWidth + 'px';
      thumb.style.transform = `translateX(${thumbX}px)`;
    }

    if (!catEl.dataset.scrollListener) {
      catEl.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      catEl.dataset.scrollListener = '1';
    }
    update();
  }

  // ============================================
  // Lazy image loading (only fetch/decode when scrolled near viewport)
  // Items have a placeholder (emoji) until their card scrolls into view.
  // ============================================
  const LAZY_OBSERVER = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        loadLazyImage(e.target);
        LAZY_OBSERVER.unobserve(e.target);
      }
    });
  }, { rootMargin: '300px 0px' }) : null;

  function enqueueLazyImage(placeholder) {
    if (!LAZY_OBSERVER) {
      // Older browsers: load immediately
      loadLazyImage(placeholder);
      return;
    }
    LAZY_OBSERVER.observe(placeholder);
  }

  function loadLazyImage(placeholder) {
    const src = placeholder.dataset.lazySrc;
    if (!src) return;
    const test = new Image();
    test.onload = () => {
      const realImg = document.createElement('img');
      realImg.src = src;
      realImg.alt = placeholder.dataset.lazyAlt || '';
      realImg.className = 'item-image';
      realImg.loading = 'lazy';
      realImg.decoding = 'async';
      placeholder.replaceWith(realImg);
    };
    test.onerror = () => {
      // Keep the emoji placeholder
    };
    test.src = src;
  }

  // Render brand logo: prefer CONFIG.logo (data URL or path), then images/logo.png,
  // and finally fall back to the inline SVG already in the markup.
  function renderLogo() {
    const mark = document.querySelector('.brand-mark');
    if (!mark) return;
    const candidates = [];
    if (CONFIG.logo) candidates.push(CONFIG.logo);
    candidates.push('images/logo.png');

    function tryNext(i) {
      if (i >= candidates.length) return; // keep default SVG
      const src = candidates[i];
      const img = new Image();
      img.onload = () => {
        mark.innerHTML = '';
        const el = document.createElement('img');
        el.src = src;
        el.alt = CONFIG.name || 'Logo';
        el.className = 'brand-logo-img';
        mark.appendChild(el);
      };
      img.onerror = () => tryNext(i + 1);
      img.src = src;
    }
    tryNext(0);
  }

  function syncTopbarHeight() {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const h = topbar.offsetHeight;
    document.documentElement.style.setProperty('--topbar-height', h + 'px');
  }

  // Measure the (visible) categories bar so the sticky category-title in
  // 'All' view can sit just below it without overlapping.
  function syncCategoriesBarHeight() {
    const wrap = document.querySelector('.view.active .categories-wrap');
    if (!wrap) {
      document.documentElement.style.setProperty('--categories-bar-height', '0px');
      return;
    }
    document.documentElement.style.setProperty('--categories-bar-height', wrap.offsetHeight + 'px');
  }

  // Manage stacked sticky category titles in 'All' view.
  // Edge case: at max scroll, the previous section is still partly on-screen
  // so its title sticks at the top, while the next title sits below it in
  // normal flow (because there's no more scroll room to push it up to the
  // sticky position). Result: two titles visible.
  // Fix: hide the previous sticky title ONLY when the next title is visible
  // AND there isn't enough remaining scroll for it to reach the sticky pos.
  function syncStickyTitles() {
    const titles = document.querySelectorAll('.view.active .category-title');
    if (titles.length < 2) return;
    const stickyTop = parseFloat(getComputedStyle(titles[0]).top) || 0;
    const vh = window.innerHeight;
    const docEl = document.documentElement;
    const remainingScroll = (docEl.scrollHeight - vh) - (window.scrollY || docEl.scrollTop || 0);
    for (let i = 0; i < titles.length; i++) {
      const t = titles[i];
      const next = titles[i + 1];
      const rect = t.getBoundingClientRect();
      const isSticking = rect.top <= stickyTop + 2;
      let shouldHide = false;
      if (isSticking && next) {
        const nextRect = next.getBoundingClientRect();
        const needsScroll = nextRect.top - stickyTop;
        // Hide previous sticky title only when:
        // 1) next title is visible in viewport, and
        // 2) it cannot reach the sticky position even if we scroll all the way down
        if (nextRect.top > stickyTop + 2 && nextRect.top < vh && needsScroll > remainingScroll + 4) {
          shouldHide = true;
        }
      }
      t.style.visibility = shouldHide ? 'hidden' : '';
    }
  }
  // Run on scroll + resize for reliable behavior
  window.addEventListener('scroll', syncStickyTitles, { passive: true });
  window.addEventListener('resize', syncStickyTitles);

  // Scroll-to-top button: visible after scrolling down a bit
  function setupScrollTopBtn() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    let last = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 400 && last <= 400) btn.classList.add('visible');
      else if (y <= 400 && last > 400) btn.classList.remove('visible');
      last = y;
    }, { passive: true });
  }

  function buildLangDropdown() {
    const dd = document.getElementById('langDropdown');
    LANGUAGES.forEach(lang => {
      const btn = document.createElement('button');
      btn.className = 'lang-option';
      btn.dataset.lang = lang.code;
      btn.innerHTML = `<span class="lang-flag">${lang.flag}</span><span>${lang.name}</span>`;
      btn.addEventListener('click', () => {
        setLanguage(lang.code);
        closeLangDropdown();
      });
      dd.appendChild(btn);
    });
  }

  function openLangDropdown() {
    document.getElementById('langDropdown').classList.add('open');
    document.getElementById('langBtn').classList.add('open');
  }
  function closeLangDropdown() {
    document.getElementById('langDropdown').classList.remove('open');
    document.getElementById('langBtn').classList.remove('open');
  }
  function toggleLangDropdown() {
    const isOpen = document.getElementById('langDropdown').classList.contains('open');
    isOpen ? closeLangDropdown() : openLangDropdown();
  }

  function init() {
    // Apply restaurant name
    document.title = `${CONFIG.name} ${CONFIG.tagline}`;
    const brandName = document.querySelector('.brand-name');
    const brandTag = document.querySelector('.brand-tagline');
    if (brandName) brandName.textContent = CONFIG.name;
    // Update the tagline text without changing structure (the markup
    // already has both <span>s so the layout stays stable from initial
    // paint — no shift when JS runs).
    const tagMain = document.querySelector('.brand-tagline-main');
    if (tagMain) tagMain.textContent = `${CONFIG.name} ${CONFIG.tagline}`;

    renderLogo();

    // Measure topbar height so the sticky categories bar attaches just below it
    syncTopbarHeight();
    window.addEventListener('resize', syncTopbarHeight);
    window.addEventListener('resize', syncCategoriesBarHeight);

    setupScrollTopBtn();
    buildLangDropdown();

    // Detect & apply language
    const detected = detectLanguage();
    setLanguage(detected);

    // Render dynamic content
    renderHome();
    renderMenu('food');
    renderMenu('drinks');
    renderMenu('wines');

    // Initial view from URL hash
    showView(readHash());

    // Hash routing
    window.addEventListener('hashchange', () => showView(readHash()));

    // Desktop: convert vertical wheel to horizontal scroll on category pills
    document.querySelectorAll('.categories').forEach(el => {
      el.addEventListener('wheel', (e) => {
        // Only intervene if there's overflow and user isn't shift-scrolling
        if (el.scrollWidth <= el.clientWidth) return;
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }, { passive: false });
    });

    // Menu buttons (home -> food/drinks/wines).
    // Scope to .menu-btn so we don't accidentally attach this to <html>,
    // which now also carries a data-view attribute for routing-aware CSS.
    document.querySelectorAll('.menu-btn[data-view]').forEach(btn => {
      btn.addEventListener('click', () => navigate(btn.dataset.view));
    });

    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
      navigate('home');
    });

    // Language switcher
    document.getElementById('langBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLangDropdown();
    });
    document.addEventListener('click', closeLangDropdown);
    document.getElementById('langDropdown').addEventListener('click', e => e.stopPropagation());

    // Wi-Fi copy
    document.getElementById('wifiCopy').addEventListener('click', () => {
      const pwd = CONFIG.wifi && CONFIG.wifi.password;
      if (!pwd) return;
      const fallbackCopy = () => {
        const ta = document.createElement('textarea');
        ta.value = pwd;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pwd).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
      toast(TRANSLATIONS[STATE.lang].copied);
    });

    // Esc closes dropdown
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLangDropdown();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
