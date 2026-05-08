/* ============================================
   MENÜ — Olivia Gourmet Restaurant
   ============================================
   Tüm öğeler 8 dile çevrildi: TR (kaynak) · EN · SV · NO · DA · FI · RU · DE
   Görseller ayrı dosyalarda (images/menu/).
   ============================================ */

window.MENU = {
  "food": [
    {
      "id": "starters",
      "name": {
        "tr": "Başlangıçlar",
        "en": "Appetizers",
        "sv": "Förrätter",
        "no": "Forretter",
        "da": "Forretter",
        "fi": "Alkuruoat",
        "ru": "Закуски",
        "de": "Vorspeisen"
      },
      "items": [
        {
          "name": "Soup of the Day",
          "icon": "🍲",
          "image": "",
          "price": 220,
          "description": "Günün çorbası",
          "translations": {
            "en": "Soup of the day",
            "sv": "Dagens soppa",
            "no": "Dagens suppe",
            "da": "Dagens suppe",
            "fi": "Päivän keitto",
            "ru": "Суп дня",
            "de": "Tagessuppe"
          },
          "tags": []
        },
        {
          "name": "Nachos",
          "icon": "🌽",
          "image": "",
          "price": 270,
          "description": "Çıtır mısır tortillaları, eritilmiş peynir, guacamole ve ekşi krema sos ile",
          "translations": {
            "en": "Crispy corn tortillas, melted cheese, guacamole and sour cream sauce",
            "sv": "Krispiga majstortillor, smält ost, guacamole och gräddfilsås",
            "no": "Sprø maistortillaer, smeltet ost, guacamole og rømmesaus",
            "da": "Sprøde majstortillaer, smeltet ost, guacamole og creme fraiche-sauce",
            "fi": "Rapeat maissitortillat, sulatettu juusto, guacamole ja ranskankermakastike",
            "ru": "Хрустящие кукурузные тортильи с расплавленным сыром, гуакамоле и соусом сметана",
            "de": "Knusprige Mais-Tortilla-Chips mit geschmolzenem Käse, Guacamole und Sauerrahm-Sauce"
          },
          "tags": []
        },
        {
          "name": "Shrimps in Casserole",
          "icon": "🦐",
          "image": "images/menu/food-starters-3-shrimps-in-casserole.jpg",
          "price": 690,
          "description": "Karides, sarımsak, tereyağı, domates",
          "translations": {
            "en": "Shrimps, garlic, butter, tomatoes",
            "sv": "Räkor, vitlökssmör, tomater, grönsaker och potatis",
            "no": "Reker, hvitløkssmør, tomater, grønnsaker og poteter",
            "da": "Rejer, hvidløgssmør, tomater, grøntsager og kartofler",
            "fi": "Katkaravut, valkosipulivoi, tomaatit, vihannekset ja perunat",
            "ru": "Креветки, чесночное масло, помидоры, овощи и картофель",
            "de": "Garnelen, Knoblauchbutter, Tomaten, Gemüse und Kartoffeln"
          },
          "tags": []
        },
        {
          "name": "Shrimps Cocktail",
          "icon": "🦐",
          "image": "",
          "price": 690,
          "description": "Karides, iceberg marul, haşlanmış yumurta ve özel sosuyla servis edilir",
          "translations": {
            "en": "Shrimps served with curly lettuce, boiled eggs and special sauce",
            "sv": "Räkor serveras med isbergssallad, kokt ägg och specialsås",
            "no": "Reker serveres med isbergsalat, kokt egg og spesialsaus",
            "da": "Rejer serveres med icebergsalat, hårdkogte æg og specialsauce",
            "fi": "Katkaravut tarjoillaan jäävuorisalaatin, keitetyn munan ja erikoiskastikkeen kera",
            "ru": "Креветки с салатом айсберг, варёным яйцом и фирменным соусом",
            "de": "Garnelen mit Eisbergsalat, gekochtem Ei und spezieller Sauce"
          },
          "tags": []
        },
        {
          "name": "Fried Calamary",
          "icon": "🦑",
          "image": "",
          "price": 690,
          "description": "Taze yeşillikler ve tartar sos",
          "translations": {
            "en": "Fresh greens, tartar sauce",
            "sv": "Färska grönsaker, tartarsås",
            "no": "Friske grønnsaker, tartarsaus",
            "da": "Friske grøntsager, tartarsauce",
            "fi": "Tuoreet vihannekset, tartarkastike",
            "ru": "Свежая зелень, соус тартар",
            "de": "Frisches Grün, Tartarsauce"
          },
          "tags": []
        },
        {
          "name": "Mozzarella Sticks",
          "icon": "🧀",
          "image": "",
          "price": 280,
          "description": "Özel sos ile servis edilir",
          "translations": {
            "en": "Served with special sauce",
            "sv": "Serveras med specialsås",
            "no": "Serveres med spesialsaus",
            "da": "Serveres med specialsauce",
            "fi": "Tarjoillaan erikoiskastikkeen kera",
            "ru": "Подаётся с фирменным соусом",
            "de": "Wird mit spezieller Sauce serviert"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Carpaccio",
          "icon": "🥩",
          "image": "images/menu/food-starters-7-carpaccio.jpg",
          "price": 970,
          "description": "Roka, parmesan peyniri ve özel sosuyla servis edilir",
          "translations": {
            "en": "Served with arugula, parmesan cheese and special sauce",
            "sv": "Serveras med ruccola, parmesanost och specialsås",
            "no": "Serveres med ruccola, parmesanost og spesialsaus",
            "da": "Serveres med rucola, parmesanost og specialsauce",
            "fi": "Tarjoillaan rucolan, parmesaanin ja erikoiskastikkeen kera",
            "ru": "Подаётся с рукколой, пармезаном и фирменным соусом",
            "de": "Mit Rucola, Parmesan und spezieller Sauce serviert"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "salads",
      "name": {
        "tr": "Salatalar",
        "en": "Salads",
        "sv": "Sallader",
        "no": "Salater",
        "da": "Salater",
        "fi": "Salaatit",
        "ru": "Салаты",
        "de": "Salate"
      },
      "items": [
        {
          "name": "Sea Food Salad",
          "icon": "🥗",
          "image": "images/menu/food-salads-1-sea-food-salad.jpg",
          "price": 770,
          "description": "Akdeniz yeşillikleri üzerine karışık deniz ürünleri ve özel sos ile",
          "translations": {
            "en": "Mixed seafood on top of Mediterranean greens served with special sauce",
            "sv": "Blandade skaldjur på medelhavsgrönsaker med specialsås",
            "no": "Blandet sjømat på middelhavsgrønnsaker med spesialsaus",
            "da": "Blandet skaldyr på middelhavsgrønt med specialsauce",
            "fi": "Sekalaisia mereneläviä Välimeren vihannesten päällä, erikoiskastikkeen kera",
            "ru": "Морепродукты на средиземноморской зелени с фирменным соусом",
            "de": "Gemischte Meeresfrüchte auf mediterranem Grün mit spezieller Sauce"
          },
          "tags": []
        },
        {
          "name": "Caesar Salad",
          "icon": "🥗",
          "image": "",
          "price": 445,
          "description": "Taze yeşillikler, ızgara tavuk göğsü, Sezar sos ile",
          "translations": {
            "en": "Season greens, grilled chicken breast with Caesar sauce",
            "sv": "Säsongsgrönt, grillad kycklingfilé med Caesarsås",
            "no": "Sesongens grønnsaker, grillet kyllingbryst med Caesar-saus",
            "da": "Sæsonens grønt, grillet kyllingebryst med Caesar-sauce",
            "fi": "Kauden vihannekset, grillattu kanan rintafilee Caesar-kastikkeella",
            "ru": "Сезонная зелень, гриль из куриной грудки с соусом Цезарь",
            "de": "Saisonales Grün, gegrillte Hähnchenbrust mit Caesar-Dressing"
          },
          "tags": []
        },
        {
          "name": "Greek Salad",
          "icon": "🥗",
          "image": "",
          "price": 385,
          "description": "Taze domates, salatalık, soğan ve beyaz peynir",
          "translations": {
            "en": "Fresh tomatoes, cucumbers, onion and feta cheese",
            "sv": "Färska tomater, gurka, lök och fetaost",
            "no": "Friske tomater, agurk, løk og fetaost",
            "da": "Friske tomater, agurk, løg og fetaost",
            "fi": "Tuoreet tomaatit, kurkku, sipuli ja fetajuusto",
            "ru": "Свежие помидоры, огурцы, лук и сыр фета",
            "de": "Frische Tomaten, Gurken, Zwiebeln und Feta"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Mozzarella Caprice",
          "icon": "🍅",
          "image": "images/menu/food-salads-4-mozzarella-caprice.jpg",
          "price": 385,
          "description": "Mozzarella dilimleri, domates, pesto sosu ve balsamik sos",
          "translations": {
            "en": "Mozzarella slices, tomatoes served with pesto sauce, flavored balsamic sauce",
            "sv": "Mozzarellaskivor, tomater med pestosås och balsamicosås",
            "no": "Mozzarellaskiver, tomater med pestosaus og balsamicosaus",
            "da": "Mozzarellaskiver, tomater med pestosauce og balsamicosauce",
            "fi": "Mozzarellaviipaleita, tomaatteja pestolla ja balsamicokastikkeella",
            "ru": "Ломтики моцареллы, помидоры, соус песто и бальзамический соус",
            "de": "Mozzarella-Scheiben, Tomaten mit Pestosauce und Balsamico"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Chef's Avocado Salad",
          "icon": "🥑",
          "image": "images/menu/food-salads-5-chef-s-avocado-salad.jpg",
          "price": 0,
          "description": "Akdeniz yeşillikleri, avokado, brokoli, domates ve limon sos ile servis edilir",
          "translations": {
            "en": "Served with Mediterranean greens, avocado, broccoli, tomato and lemon sauce",
            "sv": "Serveras med medelhavsgrönt, avokado, broccoli, tomat och citronsås",
            "no": "Serveres med middelhavsgrønnsaker, avokado, brokkoli, tomat og sitronsaus",
            "da": "Serveres med middelhavsgrønt, avocado, broccoli, tomat og citronsauce",
            "fi": "Tarjoillaan Välimeren vihannesten, avokadon, parsakaalin, tomaatin ja sitruunakastikkeen kera",
            "ru": "Средиземноморская зелень, авокадо, брокколи, помидор и лимонный соус",
            "de": "Mit mediterranem Grün, Avocado, Brokkoli, Tomaten und Zitronensauce"
          },
          "tags": [
            "veg"
          ]
        }
      ]
    },
    {
      "id": "burgers",
      "name": {
        "tr": "Ev Yapımı Burgerler",
        "en": "Home Made Burgers",
        "sv": "Hemlagade burgare",
        "no": "Hjemmelagde burgere",
        "da": "Hjemmelavede burgere",
        "fi": "Kotitekoiset burgerit",
        "ru": "Домашние бургеры",
        "de": "Hausgemachte Burger"
      },
      "items": [
        {
          "name": "Hamburger (200g)",
          "icon": "🍔",
          "image": "",
          "price": 595,
          "description": "Taze yeşillikler, domates, cips",
          "translations": {
            "en": "Fresh greens, tomatoes and chips",
            "sv": "Färska grönsaker, tomater och pommes",
            "no": "Friske grønnsaker, tomater og pommes frites",
            "da": "Friske grønne, tomater og pommes",
            "fi": "Tuoreet vihannekset, tomaatit ja ranskalaiset",
            "ru": "Свежая зелень, помидоры и картофель фри",
            "de": "Frisches Grün, Tomaten und Pommes"
          },
          "tags": []
        },
        {
          "name": "Cheeseburger (200g)",
          "icon": "🍔",
          "image": "images/menu/food-burgers-2-cheeseburger-200g.jpg",
          "price": 610,
          "description": "Taze yeşillikler, domates, cips",
          "translations": {
            "en": "Fresh greens, tomatoes and chips",
            "sv": "Färska grönsaker, tomater och pommes",
            "no": "Friske grønnsaker, tomater og pommes frites",
            "da": "Friske grønne, tomater og pommes",
            "fi": "Tuoreet vihannekset, tomaatit ja ranskalaiset",
            "ru": "Свежая зелень, помидоры и картофель фри",
            "de": "Frisches Grün, Tomaten und Pommes"
          },
          "tags": []
        },
        {
          "name": "Mexican Burger (200g)",
          "icon": "🌶️",
          "image": "",
          "price": 630,
          "description": "Sotelenmiş biber, soğan, kaşar peyniri ve cips",
          "translations": {
            "en": "Sauteed peppers, onion, cheddar cheese and chips",
            "sv": "Sauterad paprika, lök, cheddarost och pommes",
            "no": "Sautert paprika, løk, cheddarost og pommes frites",
            "da": "Sauteret peberfrugt, løg, cheddarost og pommes",
            "fi": "Paistettua paprikaa, sipulia, cheddarjuustoa ja ranskalaisia",
            "ru": "Тушёный перец, лук, чеддер и картофель фри",
            "de": "Sautierte Paprika, Zwiebeln, Cheddar und Pommes"
          },
          "tags": [
            "spicy"
          ]
        },
        {
          "name": "Olivia Special Burger (200g)",
          "icon": "🍔",
          "image": "images/menu/food-burgers-4-olivia-special-burger-200g.jpg",
          "price": 630,
          "description": "Sarı ve beyaz çedar peyniri, karamelize soğan, taze yeşillikler ve cips",
          "translations": {
            "en": "Yellow and white cheddar cheese, caramelized onion with fresh greens and chips",
            "sv": "Gul och vit cheddarost, karamelliserad lök med färska grönsaker och pommes",
            "no": "Gul og hvit cheddarost, karamellisert løk med friske grønnsaker og pommes frites",
            "da": "Gul og hvid cheddarost, karamelliseret løg med friske grønne og pommes",
            "fi": "Keltaista ja valkoista cheddaria, karamellisoitua sipulia, tuoreita vihanneksia ja ranskalaisia",
            "ru": "Жёлтый и белый чеддер, карамелизированный лук со свежей зеленью и картофель фри",
            "de": "Gelber und weißer Cheddar, karamellisierte Zwiebeln mit frischem Grün und Pommes"
          },
          "tags": [
            "new"
          ]
        }
      ]
    },
    {
      "id": "chicken",
      "name": {
        "tr": "Tavuk Yemekleri",
        "en": "Chicken Dishes",
        "sv": "Kycklingrätter",
        "no": "Kyllingretter",
        "da": "Kyllingeretter",
        "fi": "Kanaruoat",
        "ru": "Блюда из курицы",
        "de": "Hähnchengerichte"
      },
      "note": {
        "tr": "Bütün ana yemekler, gratin edilmiş patates, sebze ve özel hazırlanmış sarımsaklı tereyağlı patates eşliğinde servis edilir.",
        "en": "All main meals are served with gratinated potatoes, vegetables and potatoes specially prepared with garlic butter.",
        "sv": "Alla huvudrätter serveras med gratinerad potatis, grönsaker och potatis tillagad med vitlökssmör.",
        "no": "Alle hovedretter serveres med gratinert potet, grønnsaker og potet tilberedt med hvitløkssmør.",
        "da": "Alle hovedretter serveres med gratinerede kartofler, grøntsager og kartofler tilberedt med hvidløgssmør.",
        "fi": "Kaikkien pääruokien lisukkeena kuorrutetut perunat, vihannekset ja valkosipulivoissa valmistetut perunat.",
        "ru": "Все основные блюда подаются с картофелем гратен, овощами и картофелем, приготовленным с чесночным маслом.",
        "de": "Alle Hauptgerichte werden mit Gratinkartoffeln, Gemüse und Kartoffeln in Knoblauchbutter serviert."
      },
      "items": [
        {
          "name": "Chicken Special",
          "icon": "🍗",
          "image": "images/menu/food-chicken-1-chicken-special.jpg",
          "price": 740,
          "description": "Ispanak, soğan ve mozzarella peyniriyle doldurulmuş tavuk göğsü, 2 çeşit sos ile sunulur",
          "translations": {
            "en": "Chicken breast filled with spinach, onion and mozzarella cheese served with 2 kinds of sauce",
            "sv": "Kycklingfilé fylld med spenat, lök och mozzarella, serveras med 2 sorters sås",
            "no": "Kyllingbryst fylt med spinat, løk og mozzarella, servert med 2 typer saus",
            "da": "Kyllingebryst fyldt med spinat, løg og mozzarella, serveret med 2 slags sauce",
            "fi": "Pinaatilla, sipulilla ja mozzarellalla täytetty kanan rintafilee, 2 kastikkeen kera",
            "ru": "Куриная грудка с начинкой из шпината, лука и моцареллы, с двумя видами соуса",
            "de": "Hähnchenbrust gefüllt mit Spinat, Zwiebeln und Mozzarella, mit 2 Saucen serviert"
          },
          "tags": []
        },
        {
          "name": "Chicken with Creamy Mushroom",
          "icon": "🍗",
          "image": "",
          "price": 720,
          "description": "Tavuk parçaları, mantar ve kremalı sos ile servis edilir",
          "translations": {
            "en": "Chicken pieces served with mushroom and creamy sauce",
            "sv": "Kycklingbitar serveras med svamp och gräddsås",
            "no": "Kyllingbiter serveres med sopp og fløtesaus",
            "da": "Kyllingestykker serveres med svampe og flødesauce",
            "fi": "Kanaa sienien ja kermakastikkeen kera",
            "ru": "Кусочки курицы с грибами в сливочном соусе",
            "de": "Hähnchenstücke mit Pilzen in Sahnesauce"
          },
          "tags": []
        },
        {
          "name": "Chicken Grill",
          "icon": "🍗",
          "image": "",
          "price": 670,
          "description": "Izgara tavuk göğsü",
          "translations": {
            "en": "Grilled chicken breast",
            "sv": "Grillad kycklingfilé",
            "no": "Grillet kyllingbryst",
            "da": "Grillet kyllingebryst",
            "fi": "Grillattu kanan rintafilee",
            "ru": "Куриная грудка гриль",
            "de": "Gegrillte Hähnchenbrust"
          },
          "tags": []
        },
        {
          "name": "Chicken Curry",
          "icon": "🍛",
          "image": "",
          "price": 720,
          "description": "Tavuk göğsü dilimleri, soğan, biber, krema köri sosu",
          "translations": {
            "en": "Chicken breast slices, onion, peppers, creamy curry sauce",
            "sv": "Kycklingfiléskivor, lök, paprika, krämig currysås",
            "no": "Skivet kyllingbryst, løk, paprika, kremet karrisaus",
            "da": "Skivet kyllingebryst, løg, peberfrugt, cremet karrysauce",
            "fi": "Kanan rintafileeviipaleet, sipuli, paprika, kermainen currykastike",
            "ru": "Ломтики куриной грудки, лук, перец, сливочный соус карри",
            "de": "Hähnchenbrust-Scheiben, Zwiebeln, Paprika, cremige Currysauce"
          },
          "tags": [
            "spicy"
          ]
        },
        {
          "name": "Chicken Schnitzel",
          "icon": "🍗",
          "image": "images/menu/food-chicken-5-chicken-schnitzel.jpg",
          "price": 720,
          "description": "Galeta unuyla panelenmiş tavuk göğsü, üzerinde tereyağı ile",
          "translations": {
            "en": "Chicken breast breaded with crumbs topped on garlic butter",
            "sv": "Panerad kycklingfilé toppad med vitlökssmör",
            "no": "Panert kyllingbryst toppet med hvitløkssmør",
            "da": "Paneret kyllingebryst toppet med hvidløgssmør",
            "fi": "Korppujauhotettu kanan rintafilee valkosipulivoilla",
            "ru": "Куриная грудка в панировке с чесночным маслом",
            "de": "Panierte Hähnchenbrust mit Knoblauchbutter"
          },
          "tags": []
        },
        {
          "name": "Ottoman Kebab Chicken",
          "icon": "🍗",
          "image": "",
          "price": 750,
          "description": "Güveçte tavuk göğsü parçaları, soğan, domates, biber, sarımsak",
          "translations": {
            "en": "Chicken breast slices, onion, tomatoes, peppers, garlic, served in casserole",
            "sv": "Kycklingbitar, lök, tomater, paprika, vitlök, serverade i gryta",
            "no": "Kyllingbiter, løk, tomater, paprika, hvitløk, servert i gryte",
            "da": "Kyllingestykker, løg, tomater, peberfrugt, hvidløg, serveret i gryderet",
            "fi": "Kanapaloja, sipulia, tomaatteja, paprikaa, valkosipulia padassa",
            "ru": "Кусочки куриной грудки, лук, помидоры, перец, чеснок в горшочке",
            "de": "Hähnchenbrust-Stücke, Zwiebeln, Tomaten, Paprika, Knoblauch im Schmortopf"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "texmex",
      "name": {
        "tr": "Tex-Mex",
        "en": "Tex-Mex",
        "sv": "Tex-Mex",
        "no": "Tex-Mex",
        "da": "Tex-Mex",
        "fi": "Tex-Mex",
        "ru": "Тех-Мекс",
        "de": "Tex-Mex"
      },
      "items": [
        {
          "name": "Fajita Combo (Beef & Chicken)",
          "icon": "🌯",
          "image": "",
          "price": 1390,
          "description": "Izgara dana ve tavuk dilimleri, biber, soğan, 3 çeşit sos ve tortilla",
          "translations": {
            "en": "Grilled beef & chicken slices, peppers, onion, 3 kinds of sauce and tortilla",
            "sv": "Grillade nöt- och kycklingskivor, paprika, lök, 3 sorters sås och tortilla",
            "no": "Grillede storfekjøtt- og kyllingskiver, paprika, løk, 3 typer saus og tortilla",
            "da": "Grillede oksekøds- og kyllingeskiver, peberfrugt, løg, 3 slags sauce og tortilla",
            "fi": "Grillattuja naudan- ja kanasuikaleita, paprikaa, sipulia, 3 kastiketta ja tortilla",
            "ru": "Гриль из говядины и курицы, перец, лук, 3 соуса и тортилья",
            "de": "Gegrillte Rind- und Hähnchenstreifen, Paprika, Zwiebeln, 3 Saucen und Tortilla"
          },
          "tags": []
        },
        {
          "name": "Fajita Chicken",
          "icon": "🌮",
          "image": "",
          "price": 980,
          "description": "Izgara tavuk dilimleri, biber, soğan, 3 çeşit sos ve tortilla",
          "translations": {
            "en": "Grilled chicken slices, peppers, onion, 3 kinds of sauce and tortilla",
            "sv": "Grillade kycklingskivor, paprika, lök, 3 sorters sås och tortilla",
            "no": "Grillede kyllingskiver, paprika, løk, 3 typer saus og tortilla",
            "da": "Grillede kyllingeskiver, peberfrugt, løg, 3 slags sauce og tortilla",
            "fi": "Grillattuja kanasuikaleita, paprikaa, sipulia, 3 kastiketta ja tortilla",
            "ru": "Гриль из курицы, перец, лук, 3 соуса и тортилья",
            "de": "Gegrillte Hähnchenstreifen, Paprika, Zwiebeln, 3 Saucen und Tortilla"
          },
          "tags": []
        },
        {
          "name": "Fajita Beef",
          "icon": "🌮",
          "image": "",
          "price": 1390,
          "description": "Izgara dana dilimleri, biber, soğan, 3 çeşit sos ve tortilla",
          "translations": {
            "en": "Grilled beef slices, peppers, onion, 3 kinds of sauce and tortilla",
            "sv": "Grillade nötköttsskivor, paprika, lök, 3 sorters sås och tortilla",
            "no": "Grillede storfekjøttskiver, paprika, løk, 3 typer saus og tortilla",
            "da": "Grillede oksekødsskiver, peberfrugt, løg, 3 slags sauce og tortilla",
            "fi": "Grillattuja naudansuikaleita, paprikaa, sipulia, 3 kastiketta ja tortilla",
            "ru": "Гриль из говядины, перец, лук, 3 соуса и тортилья",
            "de": "Gegrillte Rindfleischstreifen, Paprika, Zwiebeln, 3 Saucen und Tortilla"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "dryAged",
      "name": {
        "tr": "Dry Aged Steakler",
        "en": "Dry Aged Steaks",
        "sv": "Torrlagrade biffar",
        "no": "Tørrmodnede biffer",
        "da": "Tørmodnede bøffer",
        "fi": "Kuivakypsytetyt pihvit",
        "ru": "Стейки сухой выдержки",
        "de": "Dry Aged Steaks"
      },
      "note": {
        "tr": "Dry Aged steakleri az veya orta pişmiş tercih etmenizi tavsiye ediyoruz.",
        "en": "We suggest you to prefer the Dry Aged steaks rare or medium rare.",
        "sv": "Vi rekommenderar att Dry Aged-biffar tillagas blodig eller medium blodig.",
        "no": "Vi anbefaler at Dry Aged-biffer tilberedes rå eller medium rå.",
        "da": "Vi anbefaler, at Dry Aged-bøffer tilberedes rød eller medium rød.",
        "fi": "Suosittelemme Dry Aged -pihvit raakana tai puolikypsänä.",
        "ru": "Стейки сухой выдержки рекомендуем заказывать прожарки rare или medium rare.",
        "de": "Wir empfehlen Dry Aged Steaks rare oder medium rare."
      },
      "items": [
        {
          "name": "T-Bone Steak (700g) Dry Aged",
          "icon": "🥩",
          "image": "images/menu/food-dryAged-1-t-bone-steak-700g-dry-aged.jpg",
          "price": 2790,
          "description": "Izgara T-Bone Steak",
          "translations": {
            "en": "Grilled T-Bone Steak",
            "sv": "Grillad T-bone-biff",
            "no": "Grillet T-bone-biff",
            "da": "Grillet T-bone-bøf",
            "fi": "Grillattu T-bone-pihvi",
            "ru": "Стейк Ти-Бон гриль",
            "de": "Gegrilltes T-Bone-Steak"
          },
          "tags": []
        },
        {
          "name": "Dallas Steak (600g) Dry Aged",
          "icon": "🥩",
          "image": "",
          "price": 2790,
          "description": "Izgara Dallas Steak",
          "translations": {
            "en": "Grilled Dallas Steak",
            "sv": "Grillad Dallas-biff",
            "no": "Grillet Dallas-biff",
            "da": "Grillet Dallas-bøf",
            "fi": "Grillattu Dallas-pihvi",
            "ru": "Стейк Даллас гриль",
            "de": "Gegrilltes Dallas-Steak"
          },
          "tags": []
        },
        {
          "name": "Tomahawk Steak (700g) Dry Aged",
          "icon": "🥩",
          "image": "images/menu/food-dryAged-3-tomahawk-steak-700g-dry-aged.jpg",
          "price": 2790,
          "description": "Izgara Tomahawk Steak",
          "translations": {
            "en": "Grilled Tomahawk Steak",
            "sv": "Grillad Tomahawk-biff",
            "no": "Grillet Tomahawk-biff",
            "da": "Grillet Tomahawk-bøf",
            "fi": "Grillattu Tomahawk-pihvi",
            "ru": "Стейк Томагавк гриль",
            "de": "Gegrilltes Tomahawk-Steak"
          },
          "tags": [
            "new"
          ]
        }
      ]
    },
    {
      "id": "international",
      "name": {
        "tr": "Uluslararası Yemekler",
        "en": "International Dishes",
        "sv": "Internationella rätter",
        "no": "Internasjonale retter",
        "da": "Internationale retter",
        "fi": "Kansainväliset ruoat",
        "ru": "Международные блюда",
        "de": "Internationale Gerichte"
      },
      "items": [
        {
          "name": "Olivia Special (400g)",
          "icon": "🥩",
          "image": "",
          "price": 3490,
          "description": "Bonfile, soslar ile",
          "translations": {
            "en": "The best cut of fillet steak with sauces",
            "sv": "Bästa filéstycket med såser",
            "no": "Beste filetbiff med sauser",
            "da": "Bedste filetstykke med saucer",
            "fi": "Parhain filee-pihvi kastikkeiden kera",
            "ru": "Отборная вырезка с соусами",
            "de": "Bestes Filetstück mit Saucen"
          },
          "tags": [
            "new"
          ]
        },
        {
          "name": "Filet Mignon (200g)",
          "icon": "🥩",
          "image": "images/menu/food-international-2-filet-mignon-200g.jpg",
          "price": 1595,
          "description": "Bonfile yanında bearnez sos ile",
          "translations": {
            "en": "The best cut of fillet steak with bearnaise sauce on side",
            "sv": "Bästa filéstycket med bearnaisesås vid sidan",
            "no": "Beste filetbiff med bearnaisesaus ved siden",
            "da": "Bedste filetstykke med bearnaisesauce ved siden",
            "fi": "Parhain filee-pihvi bearnaisekastikkeen kera",
            "ru": "Отборная вырезка с соусом беарнез",
            "de": "Bestes Filetstück mit Béarnaise-Sauce dazu"
          },
          "tags": []
        },
        {
          "name": "Filet Mignon (300g)",
          "icon": "🥩",
          "image": "images/menu/food-international-3-filet-mignon-300g.jpg",
          "price": 2395,
          "description": "Bonfile yanında bearnez sos ile",
          "translations": {
            "en": "The best cut of fillet steak with bearnaise sauce on side",
            "sv": "Bästa filéstycket med bearnaisesås vid sidan",
            "no": "Beste filetbiff med bearnaisesaus ved siden",
            "da": "Bedste filetstykke med bearnaisesauce ved siden",
            "fi": "Parhain filee-pihvi bearnaisekastikkeen kera",
            "ru": "Отборная вырезка с соусом беарнез",
            "de": "Bestes Filetstück mit Béarnaise-Sauce dazu"
          },
          "tags": []
        },
        {
          "name": "Pepper Steak (200g)",
          "icon": "🥩",
          "image": "images/menu/food-international-4-pepper-steak-200g.jpg",
          "price": 1540,
          "description": "Izgara bonfile, biber sos ile",
          "translations": {
            "en": "Grilled tenderloin steak with pepper sauce",
            "sv": "Grillad oxfilé med pepparsås",
            "no": "Grillet oksefilet med peppersaus",
            "da": "Grillet oksefilet med pebersauce",
            "fi": "Grillattu naudanfilee pippurikastikkeella",
            "ru": "Гриль из вырезки с перечным соусом",
            "de": "Gegrilltes Filet mit Pfeffersauce"
          },
          "tags": []
        },
        {
          "name": "Mexican Steak (200g)",
          "icon": "🥩",
          "image": "images/menu/food-international-5-mexican-steak-200g.jpg",
          "price": 1570,
          "description": "Izgara bonfile, sotelenmiş biberler, soğan, çedar peyniri ile",
          "translations": {
            "en": "Grilled tenderloin steak, sauteed peppers, onion, cheddar cheese",
            "sv": "Grillad oxfilé, sauterad paprika, lök, cheddarost",
            "no": "Grillet oksefilet, sautert paprika, løk, cheddarost",
            "da": "Grillet oksefilet, sauteret peberfrugt, løg, cheddarost",
            "fi": "Grillattu naudanfilee, paistettu paprika, sipuli, cheddarjuusto",
            "ru": "Гриль из вырезки, тушёный перец, лук, чеддер",
            "de": "Gegrilltes Filet, sautierte Paprika, Zwiebeln, Cheddar"
          },
          "tags": [
            "spicy"
          ]
        },
        {
          "name": "California Steak (200g)",
          "icon": "🥩",
          "image": "",
          "price": 1570,
          "description": "Izgara bonfile, mantar ve demi-glas sos ile",
          "translations": {
            "en": "Grilled tenderloin steak, mushroom and demi-glace sauce",
            "sv": "Grillad oxfilé med svamp och demi-glace-sås",
            "no": "Grillet oksefilet med sopp og demi-glace-saus",
            "da": "Grillet oksefilet med svampe og demi-glace-sauce",
            "fi": "Grillattu naudanfilee, sieni- ja demi-glace-kastike",
            "ru": "Гриль из вырезки с грибами и соусом деми-глас",
            "de": "Gegrilltes Filet mit Pilzen und Demi-Glace-Sauce"
          },
          "tags": []
        },
        {
          "name": "Plank Steak (200g)",
          "icon": "🥩",
          "image": "images/menu/food-international-7-plank-steak-200g.jpg",
          "price": 1595,
          "description": "Izgara bonfile, bernez sos ve patates püresi ile",
          "translations": {
            "en": "Grilled tenderloin steak with bearnaise sauce, mashed potatoes",
            "sv": "Grillad oxfilé med bearnaisesås och potatismos",
            "no": "Grillet oksefilet med bearnaisesaus og potetmos",
            "da": "Grillet oksefilet med bearnaisesauce og kartoffelmos",
            "fi": "Grillattu naudanfilee bearnaisekastikkeella ja perunamuusilla",
            "ru": "Гриль из вырезки с соусом беарнез и картофельным пюре",
            "de": "Gegrilltes Filet mit Béarnaise-Sauce und Kartoffelpüree"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "turkish",
      "name": {
        "tr": "Türk Mutfağı",
        "en": "Turkish Cuisine",
        "sv": "Turkisk mat",
        "no": "Tyrkisk mat",
        "da": "Tyrkisk køkken",
        "fi": "Turkkilainen keittiö",
        "ru": "Турецкая кухня",
        "de": "Türkische Küche"
      },
      "items": [
        {
          "name": "Ottoman Kebab (Beef)",
          "icon": "🍢",
          "image": "images/menu/food-turkish-1-ottoman-kebab-beef.jpg",
          "price": 1350,
          "description": "Güveçte bonfile parçaları, domates, biber, sarımsak",
          "translations": {
            "en": "Beef pieces, onion, tomatoes, pepper, garlic, served in casserole",
            "sv": "Nötköttsbitar, lök, tomater, paprika, vitlök i gryta",
            "no": "Storfekjøttbiter, løk, tomater, paprika, hvitløk i gryte",
            "da": "Oksekødsstykker, løg, tomater, peberfrugt, hvidløg i gryderet",
            "fi": "Naudanlihaa, sipulia, tomaatteja, paprikaa, valkosipulia padassa",
            "ru": "Говядина, лук, помидоры, перец, чеснок в горшочке",
            "de": "Rindfleischstücke, Zwiebeln, Tomaten, Paprika, Knoblauch im Schmortopf"
          },
          "tags": []
        },
        {
          "name": "Mixed Grill",
          "icon": "🍢",
          "image": "",
          "price": 1650,
          "description": "Izgara biftek, tavuk göğsü, kuzu pirzola, köfte. 1 kişilik 1.650 ₺ · 2 kişilik 3.295 ₺",
          "translations": {
            "en": "Grilled beef, chicken breast, lamb cutlet, meatball. 1 person 1,650 ₺ · 2 persons 3,295 ₺",
            "sv": "Grillad nötkött, kycklingfilé, lammkotlett, köttbullar. 1 person 1.650 ₺ · 2 personer 3.295 ₺",
            "no": "Grillet storfekjøtt, kyllingbryst, lammekotelett, kjøttbolle. 1 pers. 1.650 ₺ · 2 pers. 3.295 ₺",
            "da": "Grillet oksekød, kyllingebryst, lammekotelet, kødbolle. 1 pers. 1.650 ₺ · 2 pers. 3.295 ₺",
            "fi": "Grillattua nautaa, kanan rinta, lampaan kyljys, lihapullia. 1 hlö 1 650 ₺ · 2 hlöä 3 295 ₺",
            "ru": "Говядина, куриная грудка, бараньи котлеты, котлета на гриле. 1 чел. 1 650 ₺ · 2 чел. 3 295 ₺",
            "de": "Rind, Hähnchenbrust, Lammkotelett, Frikadelle vom Grill. 1 Pers. 1.650 ₺ · 2 Pers. 3.295 ₺"
          },
          "tags": []
        },
        {
          "name": "Lamb Shank",
          "icon": "🍖",
          "image": "images/menu/food-turkish-3-lamb-shank.jpg",
          "price": 1450,
          "description": "Fırında kuzu incik, güveçte sunulur",
          "translations": {
            "en": "Baked lamb shank served in casserole",
            "sv": "Ugnsbakad lammlägg serverad i gryta",
            "no": "Ovnsbakt lammeskank servert i gryte",
            "da": "Ovnbagt lammeskank serveret i gryderet",
            "fi": "Uunissa kypsennetty lampaan potkanlapa padassa",
            "ru": "Бараньи рульки, запечённые в горшочке",
            "de": "Im Ofen geschmorte Lammhaxe im Schmortopf serviert"
          },
          "tags": []
        },
        {
          "name": "Lamb Cutlet",
          "icon": "🍖",
          "image": "images/menu/food-turkish-4-lamb-cutlet.jpg",
          "price": 1495,
          "description": "Izgara kuzu pirzola",
          "translations": {
            "en": "Grilled lamb cutlet",
            "sv": "Grillad lammkotlett",
            "no": "Grillet lammekotelett",
            "da": "Grillet lammekotelet",
            "fi": "Grillattu lampaan kyljys",
            "ru": "Бараньи котлеты на гриле",
            "de": "Gegrilltes Lammkotelett"
          },
          "tags": []
        },
        {
          "name": "Home Made Grilled Meatballs",
          "icon": "🍖",
          "image": "",
          "price": 980,
          "description": "Ev yapımı ızgara köfte",
          "translations": {
            "en": "Home made grilled meatballs",
            "sv": "Hemlagade grillade köttbullar",
            "no": "Hjemmelagde grillede kjøttboller",
            "da": "Hjemmelavede grillede kødboller",
            "fi": "Kotitekoiset grillatut lihapullat",
            "ru": "Домашние котлеты на гриле",
            "de": "Hausgemachte gegrillte Frikadellen"
          },
          "tags": []
        },
        {
          "name": "Vegetarian Casserole",
          "icon": "🥘",
          "image": "",
          "price": 560,
          "description": "Güveçte karışık sebzeler",
          "translations": {
            "en": "Mixed vegetables in casserole",
            "sv": "Blandade grönsaker i gryta",
            "no": "Blandede grønnsaker i gryte",
            "da": "Blandede grøntsager i gryderet",
            "fi": "Sekalaisia vihanneksia padassa",
            "ru": "Овощное рагу в горшочке",
            "de": "Gemischtes Gemüse im Schmortopf"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Ribs (Kaburga)",
          "icon": "🍖",
          "image": "",
          "price": 0,
          "description": "8 saat ağır ateşte pişirilir. Özel garnitürleriyle servis edilir",
          "translations": {
            "en": "Cooked 8 hours in slow fire. Served with special garnish",
            "sv": "Tillagade 8 timmar på låg värme. Serveras med specialtillbehör",
            "no": "Tilberedt 8 timer på svak varme. Serveres med spesialtilbehør",
            "da": "Tilberedt 8 timer på lav varme. Serveres med specialtilbehør",
            "fi": "Hauduttu 8 tuntia matalalla lämmöllä. Tarjoillaan erikoislisukkeiden kera",
            "ru": "Готовится 8 часов на медленном огне. Подаётся с фирменным гарниром",
            "de": "8 Stunden bei niedriger Hitze geschmort. Mit spezieller Beilage serviert"
          },
          "tags": [
            "new"
          ]
        }
      ]
    },
    {
      "id": "seafood",
      "name": {
        "tr": "Deniz Ürünleri",
        "en": "Sea Food",
        "sv": "Skaldjur & fisk",
        "no": "Sjømat",
        "da": "Skaldyr & fisk",
        "fi": "Merenelävät",
        "ru": "Морепродукты",
        "de": "Meeresfrüchte"
      },
      "items": [
        {
          "name": "Sea Bass",
          "icon": "🐟",
          "image": "",
          "price": 980,
          "description": "Deniz levreği, taze yeşillik, salata ve patates",
          "translations": {
            "en": "Sea bass fillet, fresh greens and potatoes",
            "sv": "Havsabborrefilé, färska grönsaker och potatis",
            "no": "Havabborfilet, friske grønnsaker og poteter",
            "da": "Havabbor-filet, friske grøntsager og kartofler",
            "fi": "Meriahvenfilee, tuoreita vihanneksia ja perunoita",
            "ru": "Филе сибаса, свежая зелень и картофель",
            "de": "Wolfsbarschfilet, frisches Grün und Kartoffeln"
          },
          "tags": []
        },
        {
          "name": "Sea Bream",
          "icon": "🐟",
          "image": "",
          "price": 950,
          "description": "Deniz çuprası, taze yeşillik, salata ve patates",
          "translations": {
            "en": "Sea bream fillet, fresh greens, salad and potatoes",
            "sv": "Havsbraxenfilé, färska grönsaker, sallad och potatis",
            "no": "Havsbrasme-filet, friske grønnsaker, salat og poteter",
            "da": "Havbrasen-filet, friske grøntsager, salat og kartofler",
            "fi": "Hammasahvenfilee, tuoreita vihanneksia, salaattia ja perunoita",
            "ru": "Филе дорадо, свежая зелень, салат и картофель",
            "de": "Doradenfilet, frisches Grün, Salat und Kartoffeln"
          },
          "tags": []
        },
        {
          "name": "Shrimps in Casserole",
          "icon": "🦐",
          "image": "images/menu/food-seafood-3-shrimps-in-casserole.jpg",
          "price": 995,
          "description": "Karides, tereyağı, domates, patates, sebze",
          "translations": {
            "en": "Shrimps, garlic butter, tomatoes, vegetables and potatoes",
            "sv": "Räkor, vitlökssmör, tomater, grönsaker och potatis",
            "no": "Reker, hvitløkssmør, tomater, grønnsaker og poteter",
            "da": "Rejer, hvidløgssmør, tomater, grøntsager og kartofler",
            "fi": "Katkaravut, valkosipulivoi, tomaatit, vihannekset ja perunat",
            "ru": "Креветки, чесночное масло, помидоры, овощи и картофель",
            "de": "Garnelen, Knoblauchbutter, Tomaten, Gemüse und Kartoffeln"
          },
          "tags": []
        },
        {
          "name": "King Prawns (Jumbo)",
          "icon": "🦐",
          "image": "images/menu/food-seafood-4-king-prawns-jumbo.jpg",
          "price": 1395,
          "description": "Taze yeşillik, salata ve patates · 1 gün önceden sipariş ediniz",
          "translations": {
            "en": "Fresh greens, salad and potatoes · Order 1 day before",
            "sv": "Färska grönsaker, sallad och potatis · Beställ 1 dag i förväg",
            "no": "Friske grønnsaker, salat og poteter · Bestill 1 dag i forveien",
            "da": "Friske grøntsager, salat og kartofler · Bestil 1 dag i forvejen",
            "fi": "Tuoreet vihannekset, salaatti ja perunat · Tilattava 1 päivä etukäteen",
            "ru": "Свежая зелень, салат и картофель · Заказ за сутки",
            "de": "Frisches Grün, Salat und Kartoffeln · Vorbestellung 1 Tag vorher"
          },
          "tags": [
            "new"
          ]
        },
        {
          "name": "Salmon",
          "icon": "🐟",
          "image": "images/menu/food-seafood-5-salmon.jpg",
          "price": 995,
          "description": "Taze sebzeler ile",
          "translations": {
            "en": "Served with fresh vegetables",
            "sv": "Serveras med färska grönsaker",
            "no": "Serveres med friske grønnsaker",
            "da": "Serveres med friske grøntsager",
            "fi": "Tarjoillaan tuoreiden vihannesten kera",
            "ru": "Подаётся со свежими овощами",
            "de": "Mit frischem Gemüse serviert"
          },
          "tags": []
        },
        {
          "name": "Grilled Octopus",
          "icon": "🐙",
          "image": "",
          "price": 0,
          "description": "Özel marine edilmiş ahtapot, patates püresi ile servis edilir",
          "translations": {
            "en": "Specially marinated octopus served with potato puree",
            "sv": "Speciellt marinerad bläckfisk serverad med potatispuré",
            "no": "Spesielt marinert blekksprut servert med potetpuré",
            "da": "Specielt marineret blæksprutte serveret med kartoffelmos",
            "fi": "Erikoismarinoitu mustekala perunamuusin kera",
            "ru": "Маринованный осьминог с картофельным пюре",
            "de": "Speziell marinierter Oktopus mit Kartoffelpüree"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "pasta",
      "name": {
        "tr": "Makarnalar",
        "en": "Pastas",
        "sv": "Pasta",
        "no": "Pasta",
        "da": "Pasta",
        "fi": "Pastat",
        "ru": "Паста",
        "de": "Pasta"
      },
      "items": [
        {
          "name": "Spaghetti Bolognese",
          "icon": "🍝",
          "image": "",
          "price": 580,
          "description": "Bolognese sos ve parmesan peyniri",
          "translations": {
            "en": "Bolognese sauce, parmesan cheese",
            "sv": "Bolognesesås, parmesanost",
            "no": "Bolognesesaus, parmesanost",
            "da": "Bolognesesauce, parmesanost",
            "fi": "Bolognesekastike, parmesaani",
            "ru": "Соус болоньезе, пармезан",
            "de": "Bolognese-Sauce, Parmesan"
          },
          "tags": []
        },
        {
          "name": "Spaghetti Carbonara",
          "icon": "🍝",
          "image": "",
          "price": 575,
          "description": "Jambon, mantar, krema sos ve parmesan peyniri",
          "translations": {
            "en": "Ham, mushroom, creamy sauce, parmesan cheese",
            "sv": "Skinka, svamp, gräddsås, parmesanost",
            "no": "Skinke, sopp, fløtesaus, parmesanost",
            "da": "Skinke, svampe, flødesauce, parmesanost",
            "fi": "Kinkku, sienet, kermakastike, parmesaani",
            "ru": "Ветчина, грибы, сливочный соус, пармезан",
            "de": "Schinken, Pilze, Sahnesauce, Parmesan"
          },
          "tags": []
        },
        {
          "name": "Fettucini Alfredo",
          "icon": "🍝",
          "image": "images/menu/food-pasta-3-fettucini-alfredo.jpg",
          "price": 580,
          "description": "Tavuk dilimleri, mantar ve kremalı sos ile servis edilir",
          "translations": {
            "en": "Chicken slices, served with mushroom and cream",
            "sv": "Kycklingskivor med svamp och grädde",
            "no": "Kyllingskiver med sopp og fløte",
            "da": "Kyllingeskiver med svampe og fløde",
            "fi": "Kanasuikaleita sienien ja kerman kanssa",
            "ru": "Ломтики курицы, грибы и сливки",
            "de": "Hähnchenstreifen mit Pilzen und Sahne"
          },
          "tags": []
        },
        {
          "name": "Seafood Pasta",
          "icon": "🍝",
          "image": "",
          "price": 790,
          "description": "Pasta Gnocchetti, karışık deniz ürünleri ile servis edilir",
          "translations": {
            "en": "Pasta Gnocchetti served with mixed seafood",
            "sv": "Pasta Gnocchetti med blandade skaldjur",
            "no": "Pasta Gnocchetti med blandet sjømat",
            "da": "Pasta Gnocchetti med blandet skaldyr",
            "fi": "Gnocchetti-pasta sekalaisten merenelävien kera",
            "ru": "Паста Ньоккетти с морепродуктами",
            "de": "Pasta Gnocchetti mit gemischten Meeresfrüchten"
          },
          "tags": []
        },
        {
          "name": "Gluten Free Pasta",
          "icon": "🍝",
          "image": "",
          "price": 490,
          "description": "Sebze ve domates sos ile",
          "translations": {
            "en": "With vegetables and tomato sauce",
            "sv": "Med grönsaker och tomatsås",
            "no": "Med grønnsaker og tomatsaus",
            "da": "Med grøntsager og tomatsauce",
            "fi": "Vihannesten ja tomaattikastikkeen kera",
            "ru": "С овощами и томатным соусом",
            "de": "Mit Gemüse und Tomatensauce"
          },
          "tags": [
            "veg"
          ]
        }
      ]
    },
    {
      "id": "pizza",
      "name": {
        "tr": "Pizzalar",
        "en": "Pizzas",
        "sv": "Pizzor",
        "no": "Pizzaer",
        "da": "Pizzaer",
        "fi": "Pizzat",
        "ru": "Пиццы",
        "de": "Pizzen"
      },
      "items": [
        {
          "name": "Pizza Margarita",
          "icon": "🍕",
          "image": "images/menu/food-pizza-1-pizza-margarita.jpg",
          "price": 560,
          "description": "Mozzarella peyniri, domates ve kekik",
          "translations": {
            "en": "Mozzarella cheese, tomato, oregano",
            "sv": "Mozzarellaost, tomat, oregano",
            "no": "Mozzarellaost, tomat, oregano",
            "da": "Mozzarellaost, tomat, oregano",
            "fi": "Mozzarella, tomaatti, oregano",
            "ru": "Моцарелла, помидоры, орегано",
            "de": "Mozzarella, Tomate, Oregano"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Pizza Hawaii",
          "icon": "🍕",
          "image": "",
          "price": 565,
          "description": "Mozzarella peyniri, jambon, ananas",
          "translations": {
            "en": "Mozzarella cheese, ham, pineapple",
            "sv": "Mozzarellaost, skinka, ananas",
            "no": "Mozzarellaost, skinke, ananas",
            "da": "Mozzarellaost, skinke, ananas",
            "fi": "Mozzarella, kinkku, ananas",
            "ru": "Моцарелла, ветчина, ананас",
            "de": "Mozzarella, Schinken, Ananas"
          },
          "tags": []
        },
        {
          "name": "Pizza Hot Chilli",
          "icon": "🌶️",
          "image": "",
          "price": 590,
          "description": "Mozzarella peyniri, sucuk, jalapeno, sarımsak ve acı sos ile",
          "translations": {
            "en": "Mozzarella, pepperoni, jalapeño, garlic and hot chilli sauce",
            "sv": "Mozzarella, pepperoni, jalapeño, vitlök och stark chilisås",
            "no": "Mozzarella, pepperoni, jalapeño, hvitløk og sterk chilisaus",
            "da": "Mozzarella, pepperoni, jalapeño, hvidløg og stærk chilisauce",
            "fi": "Mozzarella, pepperoni, jalapeño, valkosipuli ja tulinen chilikastike",
            "ru": "Моцарелла, пепперони, халапеньо, чеснок и острый соус",
            "de": "Mozzarella, Pepperoni, Jalapeño, Knoblauch und scharfe Chilisauce"
          },
          "tags": [
            "spicy"
          ]
        },
        {
          "name": "Pizza Bolognese",
          "icon": "🍕",
          "image": "",
          "price": 595,
          "description": "Mozzarella peyniri ve kıyma",
          "translations": {
            "en": "Mozzarella cheese with minced meat sauce",
            "sv": "Mozzarellaost med köttfärssås",
            "no": "Mozzarellaost med kjøttdeigsaus",
            "da": "Mozzarellaost med hakket kødsauce",
            "fi": "Mozzarella ja jauhelihakastike",
            "ru": "Моцарелла и фарш в соусе",
            "de": "Mozzarella mit Hackfleischsauce"
          },
          "tags": []
        },
        {
          "name": "Pizza Marinara",
          "icon": "🍕",
          "image": "",
          "price": 690,
          "description": "Mozzarella peyniri, ton balığı, karides, mısır, soğan",
          "translations": {
            "en": "Mozzarella, tuna fish, shrimps, sweet corn, onion",
            "sv": "Mozzarella, tonfisk, räkor, majs, lök",
            "no": "Mozzarella, tunfisk, reker, mais, løk",
            "da": "Mozzarella, tun, rejer, majs, løg",
            "fi": "Mozzarella, tonnikala, katkaravut, maissi, sipuli",
            "ru": "Моцарелла, тунец, креветки, кукуруза, лук",
            "de": "Mozzarella, Thunfisch, Garnelen, Mais, Zwiebeln"
          },
          "tags": []
        },
        {
          "name": "Pizza Vegetarian",
          "icon": "🥦",
          "image": "",
          "price": 560,
          "description": "Mozzarella peyniri, mısır, zeytin, mantar, biber",
          "translations": {
            "en": "Mozzarella, sweet corn, olive, mushroom, pepper",
            "sv": "Mozzarella, majs, oliver, svamp, paprika",
            "no": "Mozzarella, mais, oliven, sopp, paprika",
            "da": "Mozzarella, majs, oliven, svampe, peberfrugt",
            "fi": "Mozzarella, maissi, oliivit, sienet, paprika",
            "ru": "Моцарелла, кукуруза, оливки, грибы, перец",
            "de": "Mozzarella, Mais, Oliven, Pilze, Paprika"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Pizza Mixed",
          "icon": "🍕",
          "image": "images/menu/food-pizza-7-pizza-mixed.jpg",
          "price": 640,
          "description": "Mozzarella peyniri, sucuk, mantar, biber, domates",
          "translations": {
            "en": "Mozzarella, pepperoni, mushroom, pepper, tomato",
            "sv": "Mozzarella, pepperoni, svamp, paprika, tomat",
            "no": "Mozzarella, pepperoni, sopp, paprika, tomat",
            "da": "Mozzarella, pepperoni, svampe, peberfrugt, tomat",
            "fi": "Mozzarella, pepperoni, sienet, paprika, tomaatti",
            "ru": "Моцарелла, пепперони, грибы, перец, помидоры",
            "de": "Mozzarella, Pepperoni, Pilze, Paprika, Tomate"
          },
          "tags": []
        },
        {
          "name": "Pizza Chicken",
          "icon": "🍕",
          "image": "",
          "price": 640,
          "description": "Mozzarella peyniri, domates sos, tavuk dilimleri, soğan ile",
          "translations": {
            "en": "Mozzarella, tomato sauce, chicken slices, onion",
            "sv": "Mozzarella, tomatsås, kycklingskivor, lök",
            "no": "Mozzarella, tomatsaus, kyllingskiver, løk",
            "da": "Mozzarella, tomatsauce, kyllingeskiver, løg",
            "fi": "Mozzarella, tomaattikastike, kanasuikaleet, sipuli",
            "ru": "Моцарелла, томатный соус, ломтики курицы, лук",
            "de": "Mozzarella, Tomatensauce, Hähnchenstreifen, Zwiebeln"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "extras",
      "name": {
        "tr": "Ekler & Soslar",
        "en": "Extras",
        "sv": "Tillbehör",
        "no": "Tilbehør",
        "da": "Tilbehør",
        "fi": "Lisukkeet",
        "ru": "Дополнительно",
        "de": "Beilagen"
      },
      "items": [
        {
          "name": "Pepper Sauce",
          "icon": "🌶️",
          "image": "",
          "price": 0,
          "description": "Karabiber sosu",
          "translations": {
            "en": "Peppercorn sauce",
            "sv": "Pepparsås",
            "no": "Peppersaus",
            "da": "Pebersauce",
            "fi": "Pippurikastike",
            "ru": "Перечный соус",
            "de": "Pfeffersauce"
          },
          "tags": []
        },
        {
          "name": "Mushroom Sauce",
          "icon": "🍄",
          "image": "",
          "price": 0,
          "description": "Mantar sosu",
          "translations": {
            "en": "Mushroom sauce",
            "sv": "Svampsås",
            "no": "Soppsaus",
            "da": "Svampesauce",
            "fi": "Sienikastike",
            "ru": "Грибной соус",
            "de": "Pilzsauce"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Bearnaise Sauce",
          "icon": "🥣",
          "image": "",
          "price": 0,
          "description": "Bernez sosu",
          "translations": {
            "en": "Béarnaise sauce",
            "sv": "Bearnaisesås",
            "no": "Bearnaisesaus",
            "da": "Bearnaisesauce",
            "fi": "Bearnaisekastike",
            "ru": "Соус беарнез",
            "de": "Béarnaise-Sauce"
          },
          "tags": []
        },
        {
          "name": "Gorgonzola Sauce",
          "icon": "🧀",
          "image": "",
          "price": 0,
          "description": "Gorgonzola sosu",
          "translations": {
            "en": "Gorgonzola sauce",
            "sv": "Gorgonzolasås",
            "no": "Gorgonzolasaus",
            "da": "Gorgonzolasauce",
            "fi": "Gorgonzolakastike",
            "ru": "Соус горгонзола",
            "de": "Gorgonzola-Sauce"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Garlic Butter",
          "icon": "🧈",
          "image": "",
          "price": 0,
          "description": "Sarımsaklı tereyağı",
          "translations": {
            "en": "Garlic butter",
            "sv": "Vitlökssmör",
            "no": "Hvitløkssmør",
            "da": "Hvidløgssmør",
            "fi": "Valkosipulivoi",
            "ru": "Чесночное масло",
            "de": "Knoblauchbutter"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Chips",
          "icon": "🍟",
          "image": "",
          "price": 0,
          "description": "Patates kızartması",
          "translations": {
            "en": "French fries",
            "sv": "Pommes frites",
            "no": "Pommes frites",
            "da": "Pommes frites",
            "fi": "Ranskalaiset perunat",
            "ru": "Картофель фри",
            "de": "Pommes frites"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Lavaş",
          "icon": "🫓",
          "image": "",
          "price": 0,
          "description": "Sıcak lavaş ekmeği",
          "translations": {
            "en": "Warm lavash bread",
            "sv": "Varmt lavashbröd",
            "no": "Varmt lavashbrød",
            "da": "Varmt lavashbrød",
            "fi": "Lämmin lavash-leipä",
            "ru": "Тёплый лаваш",
            "de": "Warmes Lavash-Brot"
          },
          "tags": [
            "veg"
          ]
        }
      ]
    }
  ],
  "drinks": [
    {
      "id": "hotDrinks",
      "alcoholic": false,
      "name": {
        "tr": "Sıcak İçecekler",
        "en": "Hot Drinks",
        "sv": "Varma drycker",
        "no": "Varme drikker",
        "da": "Varme drikke",
        "fi": "Kuumat juomat",
        "ru": "Горячие напитки",
        "de": "Heiße Getränke"
      },
      "items": [
        {
          "name": "Americano",
          "icon": "☕",
          "image": "",
          "price": 155,
          "description": "Americano kahve",
          "translations": {
            "en": "Americano coffee",
            "sv": "Americano-kaffe",
            "no": "Americano-kaffe",
            "da": "Americano-kaffe",
            "fi": "Americano-kahvi",
            "ru": "Кофе американо",
            "de": "Americano-Kaffee"
          },
          "tags": []
        },
        {
          "name": "Cappuccino",
          "icon": "☕",
          "image": "",
          "price": 180,
          "description": "Espresso, buharda ısıtılmış süt ve süt köpüğü",
          "translations": {
            "en": "Espresso, steamed milk and milk foam",
            "sv": "Espresso, ångad mjölk och mjölkskum",
            "no": "Espresso, dampet melk og melkeskum",
            "da": "Espresso, dampet mælk og mælkeskum",
            "fi": "Espresso, höyrytetty maito ja maitovaahto",
            "ru": "Эспрессо, паровое молоко и молочная пена",
            "de": "Espresso, aufgeschäumte Milch und Milchschaum"
          },
          "tags": []
        },
        {
          "name": "Coffee Latte",
          "icon": "☕",
          "image": "",
          "price": 195,
          "description": "Espresso ve bol süt",
          "translations": {
            "en": "Espresso with steamed milk",
            "sv": "Espresso med ångad mjölk",
            "no": "Espresso med dampet melk",
            "da": "Espresso med dampet mælk",
            "fi": "Espresso ja höyrytettyä maitoa",
            "ru": "Эспрессо с молоком",
            "de": "Espresso mit aufgeschäumter Milch"
          },
          "tags": []
        },
        {
          "name": "Espresso",
          "icon": "☕",
          "image": "",
          "price": 155,
          "description": "Tek shot İtalyan usulü espresso",
          "translations": {
            "en": "Single shot Italian espresso",
            "sv": "Enkel italiensk espresso",
            "no": "Enkel italiensk espresso",
            "da": "Enkelt italiensk espresso",
            "fi": "Yksinkertainen italialainen espresso",
            "ru": "Одинарный итальянский эспрессо",
            "de": "Einfacher italienischer Espresso"
          },
          "tags": []
        },
        {
          "name": "Double Espresso",
          "icon": "☕",
          "image": "",
          "price": 310,
          "description": "Çift shot espresso",
          "translations": {
            "en": "Double shot espresso",
            "sv": "Dubbel espresso",
            "no": "Dobbel espresso",
            "da": "Dobbelt espresso",
            "fi": "Tupla-espresso",
            "ru": "Двойной эспрессо",
            "de": "Doppelter Espresso"
          },
          "tags": []
        },
        {
          "name": "Turkish Coffee",
          "icon": "☕",
          "image": "",
          "price": 155,
          "description": "Geleneksel cezvede pişirilmiş Türk kahvesi",
          "translations": {
            "en": "Traditionally brewed Turkish coffee",
            "sv": "Traditionellt bryggt turkiskt kaffe",
            "no": "Tradisjonelt brygget tyrkisk kaffe",
            "da": "Traditionelt brygget tyrkisk kaffe",
            "fi": "Perinteisesti keitetty turkkilainen kahvi",
            "ru": "Турецкий кофе, сваренный по традиционному рецепту",
            "de": "Traditionell zubereiteter türkischer Kaffee"
          },
          "tags": []
        },
        {
          "name": "Tea",
          "icon": "🍵",
          "image": "",
          "price": 55,
          "description": "Demli Türk çayı",
          "translations": {
            "en": "Brewed Turkish tea",
            "sv": "Bryggt turkiskt te",
            "no": "Brygget tyrkisk te",
            "da": "Brygget tyrkisk te",
            "fi": "Hauduttu turkkilainen tee",
            "ru": "Заваренный турецкий чай",
            "de": "Aufgebrühter türkischer Tee"
          },
          "tags": []
        },
        {
          "name": "Apple Tea",
          "icon": "🍎",
          "image": "",
          "price": 55,
          "description": "Sıcak elma çayı",
          "translations": {
            "en": "Hot apple tea",
            "sv": "Varmt äppelte",
            "no": "Varm epleté",
            "da": "Varm æbleté",
            "fi": "Kuuma omenatee",
            "ru": "Горячий яблочный чай",
            "de": "Heißer Apfeltee"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "softDrinks",
      "alcoholic": false,
      "name": {
        "tr": "Soft İçecekler",
        "en": "Soft Drinks",
        "sv": "Läskedrycker",
        "no": "Brus",
        "da": "Sodavand",
        "fi": "Virvoitusjuomat",
        "ru": "Безалкогольные напитки",
        "de": "Erfrischungsgetränke"
      },
      "items": [
        {
          "name": "Coca Cola / Cola Zero",
          "icon": "🥤",
          "image": "",
          "price": 145,
          "description": "Tek 145 ₺ · Büyük 265 ₺",
          "translations": {
            "en": "Single 145 ₺ · Large 265 ₺",
            "sv": "Enkel 145 ₺ · Stor 265 ₺",
            "no": "Enkel 145 ₺ · Stor 265 ₺",
            "da": "Enkel 145 ₺ · Stor 265 ₺",
            "fi": "Pieni 145 ₺ · Suuri 265 ₺",
            "ru": "Маленькая 145 ₺ · Большая 265 ₺",
            "de": "Klein 145 ₺ · Groß 265 ₺"
          },
          "tags": []
        },
        {
          "name": "Fanta / Sprite",
          "icon": "🥤",
          "image": "",
          "price": 145,
          "description": "Tek 145 ₺ · Büyük 265 ₺",
          "translations": {
            "en": "Single 145 ₺ · Large 265 ₺",
            "sv": "Enkel 145 ₺ · Stor 265 ₺",
            "no": "Enkel 145 ₺ · Stor 265 ₺",
            "da": "Enkel 145 ₺ · Stor 265 ₺",
            "fi": "Pieni 145 ₺ · Suuri 265 ₺",
            "ru": "Маленькая 145 ₺ · Большая 265 ₺",
            "de": "Klein 145 ₺ · Groß 265 ₺"
          },
          "tags": []
        },
        {
          "name": "Ice Tea (Şeftali / Limon)",
          "icon": "🧊",
          "image": "",
          "price": 145,
          "description": "Tek 145 ₺ · Büyük 265 ₺",
          "translations": {
            "en": "Single 145 ₺ · Large 265 ₺ (peach / lemon)",
            "sv": "Enkel 145 ₺ · Stor 265 ₺ (persika / citron)",
            "no": "Enkel 145 ₺ · Stor 265 ₺ (fersken / sitron)",
            "da": "Enkel 145 ₺ · Stor 265 ₺ (fersken / citron)",
            "fi": "Pieni 145 ₺ · Suuri 265 ₺ (persikka / sitruuna)",
            "ru": "Маленький 145 ₺ · Большой 265 ₺ (персик / лимон)",
            "de": "Klein 145 ₺ · Groß 265 ₺ (Pfirsich / Zitrone)"
          },
          "tags": []
        },
        {
          "name": "Fruit Juice",
          "icon": "🧃",
          "image": "",
          "price": 145,
          "description": "Meyve suyu — Tek 145 ₺ · Büyük 265 ₺",
          "translations": {
            "en": "Fruit juice — Single 145 ₺ · Large 265 ₺",
            "sv": "Fruktjuice — Enkel 145 ₺ · Stor 265 ₺",
            "no": "Fruktjuice — Enkel 145 ₺ · Stor 265 ₺",
            "da": "Frugtjuice — Enkel 145 ₺ · Stor 265 ₺",
            "fi": "Hedelmämehu — Pieni 145 ₺ · Suuri 265 ₺",
            "ru": "Фруктовый сок — Маленький 145 ₺ · Большой 265 ₺",
            "de": "Fruchtsaft — Klein 145 ₺ · Groß 265 ₺"
          },
          "tags": []
        },
        {
          "name": "Soda",
          "icon": "🥂",
          "image": "",
          "price": 65,
          "description": "Tek 65 ₺ · Büyük 130 ₺",
          "translations": {
            "en": "Single 65 ₺ · Large 130 ₺",
            "sv": "Enkel 65 ₺ · Stor 130 ₺",
            "no": "Enkel 65 ₺ · Stor 130 ₺",
            "da": "Enkel 65 ₺ · Stor 130 ₺",
            "fi": "Pieni 65 ₺ · Suuri 130 ₺",
            "ru": "Маленькая 65 ₺ · Большая 130 ₺",
            "de": "Klein 65 ₺ · Groß 130 ₺"
          },
          "tags": []
        },
        {
          "name": "Schweppes Tonic / Bitter Lemon",
          "icon": "🥃",
          "image": "",
          "price": 210,
          "description": "Tek 210 ₺ · Büyük 400 ₺",
          "translations": {
            "en": "Single 210 ₺ · Large 400 ₺",
            "sv": "Enkel 210 ₺ · Stor 400 ₺",
            "no": "Enkel 210 ₺ · Stor 400 ₺",
            "da": "Enkel 210 ₺ · Stor 400 ₺",
            "fi": "Pieni 210 ₺ · Suuri 400 ₺",
            "ru": "Маленькая 210 ₺ · Большая 400 ₺",
            "de": "Klein 210 ₺ · Groß 400 ₺"
          },
          "tags": []
        },
        {
          "name": "Fresh Orange Juice",
          "icon": "🍊",
          "image": "",
          "price": 210,
          "description": "Taze sıkılmış portakal suyu — Tek 210 ₺ · Büyük 400 ₺",
          "translations": {
            "en": "Freshly squeezed orange juice — Single 210 ₺ · Large 400 ₺",
            "sv": "Nypressad apelsinjuice — Enkel 210 ₺ · Stor 400 ₺",
            "no": "Nypresset appelsinjuice — Enkel 210 ₺ · Stor 400 ₺",
            "da": "Friskpresset appelsinjuice — Enkel 210 ₺ · Stor 400 ₺",
            "fi": "Tuoremehu appelsiini — Pieni 210 ₺ · Suuri 400 ₺",
            "ru": "Свежевыжатый апельсиновый сок — Маленький 210 ₺ · Большой 400 ₺",
            "de": "Frisch gepresster Orangensaft — Klein 210 ₺ · Groß 400 ₺"
          },
          "tags": []
        },
        {
          "name": "Water 0.5L",
          "icon": "💧",
          "image": "",
          "price": 55,
          "description": "Şişe su 0.5 litre",
          "translations": {
            "en": "Bottled water 0.5L",
            "sv": "Flaskvatten 0,5 L",
            "no": "Flaskevann 0,5 L",
            "da": "Flaskevand 0,5 L",
            "fi": "Pullovesi 0,5 l",
            "ru": "Бутилированная вода 0,5 л",
            "de": "Flaschenwasser 0,5 L"
          },
          "tags": []
        },
        {
          "name": "Water 1.5L",
          "icon": "💧",
          "image": "",
          "price": 105,
          "description": "Şişe su 1.5 litre",
          "translations": {
            "en": "Bottled water 1.5L",
            "sv": "Flaskvatten 1,5 L",
            "no": "Flaskevann 1,5 L",
            "da": "Flaskevand 1,5 L",
            "fi": "Pullovesi 1,5 l",
            "ru": "Бутилированная вода 1,5 л",
            "de": "Flaschenwasser 1,5 L"
          },
          "tags": []
        },
        {
          "name": "Energy Drink (Red Bull)",
          "icon": "⚡",
          "image": "",
          "price": 210,
          "description": "Red Bull enerji içeceği",
          "translations": {
            "en": "Red Bull energy drink",
            "sv": "Red Bull energidryck",
            "no": "Red Bull energidrikk",
            "da": "Red Bull energidrik",
            "fi": "Red Bull -energiajuoma",
            "ru": "Энергетический напиток Red Bull",
            "de": "Red Bull Energy Drink"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "nonAlcoholicCocktails",
      "alcoholic": false,
      "name": {
        "tr": "Alkolsüz Kokteyller",
        "en": "Non-Alcoholic Cocktails",
        "sv": "Alkoholfria cocktails",
        "no": "Alkoholfrie cocktailer",
        "da": "Alkoholfrie cocktails",
        "fi": "Alkoholittomat cocktailit",
        "ru": "Безалкогольные коктейли",
        "de": "Alkoholfreie Cocktails"
      },
      "items": [
        {
          "name": "Cinderella",
          "icon": "🍹",
          "image": "",
          "price": 325,
          "description": "Portakal suyu, elma suyu, ananas suyu, grenadine",
          "translations": {
            "en": "Orange juice, apple juice, pineapple juice, grenadine",
            "sv": "Apelsinjuice, äppeljuice, ananasjuice, grenadine",
            "no": "Appelsinjuice, eplejuice, ananasjuice, grenadine",
            "da": "Appelsinjuice, æblejuice, ananasjuice, grenadine",
            "fi": "Appelsiinimehu, omenamehu, ananasmehu, grenadiini",
            "ru": "Апельсиновый, яблочный, ананасовый соки, гренадин",
            "de": "Orangensaft, Apfelsaft, Ananassaft, Grenadine"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Coconut Kiss",
          "icon": "🥥",
          "image": "",
          "price": 365,
          "description": "Ananas suyu, elma suyu, hindistan cevizi sütü, hindistan cevizi şurubu, muz şurubu, buz",
          "translations": {
            "en": "Pineapple juice, apple juice, coconut milk, coconut syrup, banana syrup, ice",
            "sv": "Ananasjuice, äppeljuice, kokosmjölk, kokossirap, banansirap, is",
            "no": "Ananasjuice, eplejuice, kokosmelk, kokossirup, banansirup, is",
            "da": "Ananasjuice, æblejuice, kokosmælk, kokossirup, banansirup, is",
            "fi": "Ananasmehu, omenamehu, kookosmaito, kookossiirappi, banaanisiirappi, jää",
            "ru": "Ананасовый сок, яблочный сок, кокосовое молоко, кокосовый сироп, банановый сироп, лёд",
            "de": "Ananassaft, Apfelsaft, Kokosmilch, Kokossirup, Bananensirup, Eis"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Mojito (Alkolsüz)",
          "icon": "🌿",
          "image": "",
          "price": 400,
          "description": "Taze lime, taze nane, lime şurubu, esmer şeker, şeker şurubu, maden suyu, kırılmış buz",
          "translations": {
            "en": "Fresh lime, fresh mint leaves, lime syrup, brown sugar, sugar syrup, mineral water, crushed ice",
            "sv": "Färsk lime, färska myntablad, limesirap, farinsocker, sockerlag, mineralvatten, krossad is",
            "no": "Fersk lime, friske mynteblader, limesirup, brunt sukker, sukkersirup, mineralvann, knust is",
            "da": "Frisk lime, friske mynteblade, limesirup, brunt sukker, sukkersirup, mineralvand, knust is",
            "fi": "Tuore lime, tuoreet mintunlehdet, limettisiirappi, ruskea sokeri, sokerisiirappi, kivennäisvesi, jäämurska",
            "ru": "Свежий лайм, мята, лаймовый сироп, тростниковый сахар, сахарный сироп, минеральная вода, колотый лёд",
            "de": "Frische Limette, frische Minzblätter, Limettensirup, brauner Zucker, Zuckersirup, Mineralwasser, Crushed Ice"
          },
          "tags": [
            "veg"
          ]
        },
        {
          "name": "Frozen Strawberry",
          "icon": "🍓",
          "image": "",
          "price": 445,
          "description": "Donmuş çilek, çilek şurubu, esmer şeker, lime şurubu, şeker şurubu, kırılmış buz",
          "translations": {
            "en": "Frozen strawberry, strawberry syrup, brown sugar, lime syrup, sugar syrup, crushed ice",
            "sv": "Frusna jordgubbar, jordgubbssirap, farinsocker, limesirap, sockerlag, krossad is",
            "no": "Frosne jordbær, jordbærsirup, brunt sukker, limesirup, sukkersirup, knust is",
            "da": "Frosne jordbær, jordbærsirup, brunt sukker, limesirup, sukkersirup, knust is",
            "fi": "Pakastemansikat, mansikkasiirappi, ruskea sokeri, limettisiirappi, sokerisiirappi, jäämurska",
            "ru": "Замороженная клубника, клубничный сироп, тростниковый сахар, лаймовый сироп, сахарный сироп, колотый лёд",
            "de": "Gefrorene Erdbeeren, Erdbeersirup, brauner Zucker, Limettensirup, Zuckersirup, Crushed Ice"
          },
          "tags": [
            "veg"
          ]
        }
      ]
    },
    {
      "id": "beers",
      "name": {
        "tr": "Biralar",
        "en": "Beers",
        "sv": "Öl",
        "no": "Øl",
        "da": "Øl",
        "fi": "Oluet",
        "ru": "Пиво",
        "de": "Biere"
      },
      "items": [
        {
          "name": "Heineken 33cl",
          "icon": "🍺",
          "image": "",
          "price": 310,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Miller 33cl",
          "icon": "🍺",
          "image": "",
          "price": 290,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Carlsberg 33cl",
          "icon": "🍺",
          "image": "",
          "price": 290,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Corona 35cl",
          "icon": "🍺",
          "image": "",
          "price": 370,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Tuborg 50cl",
          "icon": "🍺",
          "image": "",
          "price": 270,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Efes 50cl",
          "icon": "🍺",
          "image": "",
          "price": 260,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Efes 30cl",
          "icon": "🍺",
          "image": "",
          "price": 240,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Efes Malt 50cl",
          "icon": "🍺",
          "image": "",
          "price": 260,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Non-Alcohol Beer 33cl",
          "icon": "🍺",
          "image": "",
          "price": 260,
          "description": "Alkolsüz bira",
          "translations": {
            "en": "Non-alcoholic beer",
            "sv": "Alkoholfri öl",
            "no": "Alkoholfri øl",
            "da": "Alkoholfri øl",
            "fi": "Alkoholiton olut",
            "ru": "Безалкогольное пиво",
            "de": "Alkoholfreies Bier"
          },
          "tags": []
        },
        {
          "name": "Gluten Free Beer 50cl",
          "icon": "🍺",
          "image": "",
          "price": 320,
          "description": "Glutensiz bira",
          "translations": {
            "en": "Gluten-free beer",
            "sv": "Glutenfri öl",
            "no": "Glutenfri øl",
            "da": "Glutenfri øl",
            "fi": "Gluteeniton olut",
            "ru": "Безглютеновое пиво",
            "de": "Glutenfreies Bier"
          },
          "tags": []
        },
        {
          "name": "Budweiser 33cl",
          "icon": "🍺",
          "image": "",
          "price": 0,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        }
      ]
    },
    {
      "id": "localDrinks",
      "name": {
        "tr": "Yerli İçkiler",
        "en": "Local Drinks",
        "sv": "Lokala drycker",
        "no": "Lokale drikker",
        "da": "Lokale drikkevarer",
        "fi": "Paikalliset juomat",
        "ru": "Местные напитки",
        "de": "Lokale Getränke"
      },
      "items": [
        {
          "name": "Rakı",
          "icon": "🥃",
          "image": "",
          "price": 380,
          "description": "Tek (5cl) 380 ₺ · Duble 700 ₺",
          "translations": {
            "en": "Single (5cl) 380 ₺ · Double 700 ₺",
            "sv": "Enkel (5 cl) 380 ₺ · Dubbel 700 ₺",
            "no": "Enkel (5 cl) 380 ₺ · Dobbel 700 ₺",
            "da": "Enkel (5 cl) 380 ₺ · Dobbelt 700 ₺",
            "fi": "Yksinkertainen (5 cl) 380 ₺ · Tupla 700 ₺",
            "ru": "Одинарный (5 cl) 380 ₺ · Двойной 700 ₺",
            "de": "Einfach (5 cl) 380 ₺ · Doppelt 700 ₺"
          },
          "tags": []
        },
        {
          "name": "Vodka",
          "icon": "🥃",
          "image": "",
          "price": 380,
          "description": "Tek 380 ₺ · Duble 700 ₺",
          "translations": {
            "en": "Single 380 ₺ · Double 700 ₺",
            "sv": "Enkel 380 ₺ · Dubbel 700 ₺",
            "no": "Enkel 380 ₺ · Dobbel 700 ₺",
            "da": "Enkel 380 ₺ · Dobbelt 700 ₺",
            "fi": "Yksinkertainen 380 ₺ · Tupla 700 ₺",
            "ru": "Одинарный 380 ₺ · Двойной 700 ₺",
            "de": "Einfach 380 ₺ · Doppelt 700 ₺"
          },
          "tags": []
        },
        {
          "name": "Gin",
          "icon": "🥃",
          "image": "",
          "price": 380,
          "description": "Tek 380 ₺ · Duble 700 ₺",
          "translations": {
            "en": "Single 380 ₺ · Double 700 ₺",
            "sv": "Enkel 380 ₺ · Dubbel 700 ₺",
            "no": "Enkel 380 ₺ · Dobbel 700 ₺",
            "da": "Enkel 380 ₺ · Dobbelt 700 ₺",
            "fi": "Yksinkertainen 380 ₺ · Tupla 700 ₺",
            "ru": "Одинарный 380 ₺ · Двойной 700 ₺",
            "de": "Einfach 380 ₺ · Doppelt 700 ₺"
          },
          "tags": []
        },
        {
          "name": "Liqueurs",
          "icon": "🥃",
          "image": "",
          "price": 0,
          "description": "Yerli likörler, tek 380 ₺ · duble 700 ₺",
          "translations": {
            "en": "Local liqueurs, single 380 ₺ · double 700 ₺",
            "sv": "Lokala likörer, enkel 380 ₺ · dubbel 700 ₺",
            "no": "Lokale likører, enkel 380 ₺ · dobbel 700 ₺",
            "da": "Lokale likører, enkel 380 ₺ · dobbelt 700 ₺",
            "fi": "Paikalliset liköörit, yksinkertainen 380 ₺ · tupla 700 ₺",
            "ru": "Местные ликёры, одинарный 380 ₺ · двойной 700 ₺",
            "de": "Lokale Liköre, einfach 380 ₺ · doppelt 700 ₺"
          },
          "tags": []
        },
        {
          "name": "Glass of Wine (Red / White / Rose)",
          "icon": "🍷",
          "image": "",
          "price": 310,
          "description": "Kadeh kuru şarap (kırmızı / beyaz / roze)",
          "translations": {
            "en": "Glass of dry wine (red / white / rose)",
            "sv": "Glas torrt vin (rött / vitt / rosé)",
            "no": "Glass tørr vin (rød / hvit / rosé)",
            "da": "Glas tør vin (rød / hvid / rosé)",
            "fi": "Lasi kuivaa viiniä (puna / valko / rosee)",
            "ru": "Бокал сухого вина (красное / белое / розовое)",
            "de": "Glas Trockenwein (rot / weiß / rosé)"
          },
          "tags": []
        },
        {
          "name": "Glass of Sweet/Semi-Sweet Wine (White/Rose)",
          "icon": "🍷",
          "image": "",
          "price": 325,
          "description": "Kadeh tatlı veya yarı tatlı şarap (beyaz / roze)",
          "translations": {
            "en": "Glass of sweet or semi-sweet wine (white / rose)",
            "sv": "Glas sött eller halvsött vin (vitt / rosé)",
            "no": "Glass søt eller halvsøt vin (hvit / rosé)",
            "da": "Glas sød eller halvsød vin (hvid / rosé)",
            "fi": "Lasi makeaa tai puolimakeaa viiniä (valko / rosee)",
            "ru": "Бокал сладкого или полусладкого вина (белое / розовое)",
            "de": "Glas Süß- oder Halbsüßwein (weiß / rosé)"
          },
          "tags": []
        },
        {
          "name": "Apple Cider",
          "icon": "🍎",
          "image": "",
          "price": 360,
          "description": "Elma şarabı",
          "translations": {
            "en": "Apple cider",
            "sv": "Äppelcider",
            "no": "Eplecider",
            "da": "Æblecider",
            "fi": "Omenasiideri",
            "ru": "Яблочный сидр",
            "de": "Apfelwein"
          },
          "tags": []
        },
        {
          "name": "Vodka with Red Bull",
          "icon": "⚡",
          "image": "",
          "price": 545,
          "description": "Votka + Red Bull",
          "translations": {
            "en": "Vodka with Red Bull",
            "sv": "Vodka med Red Bull",
            "no": "Vodka med Red Bull",
            "da": "Vodka med Red Bull",
            "fi": "Vodka ja Red Bull",
            "ru": "Водка с Red Bull",
            "de": "Wodka mit Red Bull"
          },
          "tags": []
        },
        {
          "name": "Vodka / Gin with Soft Drink",
          "icon": "🥃",
          "image": "",
          "price": 495,
          "description": "Votka veya cin + soft içecek",
          "translations": {
            "en": "Vodka or gin with soft drink",
            "sv": "Vodka eller gin med läsk",
            "no": "Vodka eller gin med brus",
            "da": "Vodka eller gin med sodavand",
            "fi": "Vodka tai gini virvoitusjuoman kanssa",
            "ru": "Водка или джин с безалкогольным напитком",
            "de": "Wodka oder Gin mit Erfrischungsgetränk"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "whiskeys",
      "name": {
        "tr": "Viskiler",
        "en": "Whiskeys",
        "sv": "Whiskey",
        "no": "Whisky",
        "da": "Whisky",
        "fi": "Viskit",
        "ru": "Виски",
        "de": "Whisky"
      },
      "note": {
        "tr": "Soft içecek ile +20 ₺ · Red Bull ile +65 ₺",
        "en": "With soft drink +20 ₺ · with Red Bull +65 ₺",
        "sv": "Med läsk +20 ₺ · med Red Bull +65 ₺",
        "no": "Med brus +20 ₺ · med Red Bull +65 ₺",
        "da": "Med sodavand +20 ₺ · med Red Bull +65 ₺",
        "fi": "Virvoitusjuoman kanssa +20 ₺ · Red Bullin kanssa +65 ₺",
        "ru": "С безалкогольным напитком +20 ₺ · с Red Bull +65 ₺",
        "de": "Mit Erfrischungsgetränk +20 ₺ · mit Red Bull +65 ₺"
      },
      "items": [
        {
          "name": "Jim Beam",
          "icon": "🥃",
          "image": "",
          "price": 510,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Johnnie Walker",
          "icon": "🥃",
          "image": "",
          "price": 495,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Jack Daniel's",
          "icon": "🥃",
          "image": "",
          "price": 520,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Dimple",
          "icon": "🥃",
          "image": "",
          "price": 530,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Chivas Regal",
          "icon": "🥃",
          "image": "",
          "price": 580,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Jameson",
          "icon": "🥃",
          "image": "",
          "price": 520,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Singleton Single Malt 12 Years",
          "icon": "🥃",
          "image": "",
          "price": 620,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        }
      ]
    },
    {
      "id": "importDrinks",
      "name": {
        "tr": "İthal İçecekler",
        "en": "Import Drinks",
        "sv": "Importerade drycker",
        "no": "Importerte drikker",
        "da": "Importerede drikke",
        "fi": "Tuontijuomat",
        "ru": "Импортные напитки",
        "de": "Import-Spirituosen"
      },
      "note": {
        "tr": "Red Bull ile 630 ₺ · Soft içecek ile 595 ₺ (geçerli ürünler için)",
        "en": "With Red Bull 630 ₺ · with soft drink 595 ₺ (where applicable)",
        "sv": "Med Red Bull 630 ₺ · med läsk 595 ₺ (där tillämpligt)",
        "no": "Med Red Bull 630 ₺ · med brus 595 ₺ (der det er aktuelt)",
        "da": "Med Red Bull 630 ₺ · med sodavand 595 ₺ (hvor det er muligt)",
        "fi": "Red Bullin kanssa 630 ₺ · virvoitusjuoman kanssa 595 ₺ (soveltuvin osin)",
        "ru": "С Red Bull 630 ₺ · с безалкогольным напитком 595 ₺ (где применимо)",
        "de": "Mit Red Bull 630 ₺ · mit Erfrischungsgetränk 595 ₺ (wo zutreffend)"
      },
      "items": [
        {
          "name": "Bacardi",
          "section": {
            "tr": "Romlar",
            "en": "Rums",
            "sv": "Rom",
            "no": "Rom",
            "da": "Rom",
            "fi": "Rommit",
            "ru": "Ромы",
            "de": "Rums"
          },
          "icon": "🥃",
          "image": "",
          "price": 485,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Captain Morgan",
          "section": {
            "tr": "Romlar",
            "en": "Rums",
            "sv": "Rom",
            "no": "Rom",
            "da": "Rom",
            "fi": "Rommit",
            "ru": "Ромы",
            "de": "Rums"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Malibu",
          "section": {
            "tr": "Romlar",
            "en": "Rums",
            "sv": "Rom",
            "no": "Rom",
            "da": "Rom",
            "fi": "Rommit",
            "ru": "Ромы",
            "de": "Rums"
          },
          "icon": "🥥",
          "image": "",
          "price": 430,
          "description": "Hindistan cevizi aromalı rom",
          "translations": {
            "en": "Coconut-flavored rum",
            "sv": "Kokosaromat rom",
            "no": "Kokosaromat rom",
            "da": "Kokossmagende rom",
            "fi": "Kookosmaustettu rommi",
            "ru": "Ром с ароматом кокоса",
            "de": "Kokosnuss-Rum"
          },
          "tags": []
        },
        {
          "name": "Smirnoff",
          "section": {
            "tr": "Votka & Cin",
            "en": "Vodka & Gin",
            "sv": "Vodka & gin",
            "no": "Vodka & gin",
            "da": "Vodka & gin",
            "fi": "Vodka & gini",
            "ru": "Водка и джин",
            "de": "Wodka & Gin"
          },
          "icon": "🥃",
          "image": "",
          "price": 430,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Absolut",
          "section": {
            "tr": "Votka & Cin",
            "en": "Vodka & Gin",
            "sv": "Vodka & gin",
            "no": "Vodka & gin",
            "da": "Vodka & gin",
            "fi": "Vodka & gini",
            "ru": "Водка и джин",
            "de": "Wodka & Gin"
          },
          "icon": "🥃",
          "image": "",
          "price": 430,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Bombay",
          "section": {
            "tr": "Votka & Cin",
            "en": "Vodka & Gin",
            "sv": "Vodka & gin",
            "no": "Vodka & gin",
            "da": "Vodka & gin",
            "fi": "Vodka & gini",
            "ru": "Водка и джин",
            "de": "Wodka & Gin"
          },
          "icon": "🥃",
          "image": "",
          "price": 485,
          "description": "Bombay Sapphire",
          "translations": {
            "en": "Bombay Sapphire gin",
            "sv": "Bombay Sapphire-gin",
            "no": "Bombay Sapphire-gin",
            "da": "Bombay Sapphire-gin",
            "fi": "Bombay Sapphire -gini",
            "ru": "Джин Bombay Sapphire",
            "de": "Bombay Sapphire Gin"
          },
          "tags": []
        },
        {
          "name": "Gordon's",
          "section": {
            "tr": "Votka & Cin",
            "en": "Vodka & Gin",
            "sv": "Vodka & gin",
            "no": "Vodka & gin",
            "da": "Vodka & gin",
            "fi": "Vodka & gini",
            "ru": "Водка и джин",
            "de": "Wodka & Gin"
          },
          "icon": "🥃",
          "image": "",
          "price": 485,
          "description": "Gordon's London Dry Gin",
          "translations": {
            "en": "Gordon's London Dry Gin",
            "sv": "Gordon's London Dry Gin",
            "no": "Gordon's London Dry Gin",
            "da": "Gordon's London Dry Gin",
            "fi": "Gordon's London Dry Gin",
            "ru": "Gordon's London Dry Gin",
            "de": "Gordon's London Dry Gin"
          },
          "tags": []
        },
        {
          "name": "Martini (Dry / Rosso / Bianco)",
          "section": {
            "tr": "Vermut & Bitter",
            "en": "Vermouth & Bitter",
            "sv": "Vermouth & bitter",
            "no": "Vermut & bitter",
            "da": "Vermouth & bitter",
            "fi": "Vermutti & bitter",
            "ru": "Вермут и биттер",
            "de": "Wermut & Bitter"
          },
          "icon": "🍸",
          "image": "",
          "price": 445,
          "description": "Dry, Rosso veya Bianco",
          "translations": {
            "en": "Dry, Rosso or Bianco",
            "sv": "Dry, Rosso eller Bianco",
            "no": "Dry, Rosso eller Bianco",
            "da": "Dry, Rosso eller Bianco",
            "fi": "Dry, Rosso tai Bianco",
            "ru": "Dry, Rosso или Bianco",
            "de": "Dry, Rosso oder Bianco"
          },
          "tags": []
        },
        {
          "name": "Campari",
          "section": {
            "tr": "Vermut & Bitter",
            "en": "Vermouth & Bitter",
            "sv": "Vermouth & bitter",
            "no": "Vermut & bitter",
            "da": "Vermouth & bitter",
            "fi": "Vermutti & bitter",
            "ru": "Вермут и биттер",
            "de": "Wermut & Bitter"
          },
          "icon": "🥃",
          "image": "",
          "price": 460,
          "description": "İtalyan acı aperitif",
          "translations": {
            "en": "Italian bitter aperitif",
            "sv": "Italiensk bitter aperitif",
            "no": "Italiensk bitter aperitif",
            "da": "Italiensk bitter aperitif",
            "fi": "Italialainen kitkerä aperitiivi",
            "ru": "Итальянский горький аперитив",
            "de": "Italienischer Bitter-Aperitif"
          },
          "tags": []
        },
        {
          "name": "Jägermeister",
          "section": {
            "tr": "Vermut & Bitter",
            "en": "Vermouth & Bitter",
            "sv": "Vermouth & bitter",
            "no": "Vermut & bitter",
            "da": "Vermouth & bitter",
            "fi": "Vermutti & bitter",
            "ru": "Вермут и биттер",
            "de": "Wermut & Bitter"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Alman bitter likörü",
          "translations": {
            "en": "German herbal bitter"
          },
          "tags": []
        },
        {
          "name": "Fernet Branca",
          "section": {
            "tr": "Vermut & Bitter",
            "en": "Vermouth & Bitter",
            "sv": "Vermouth & bitter",
            "no": "Vermut & bitter",
            "da": "Vermouth & bitter",
            "fi": "Vermutti & bitter",
            "ru": "Вермут и биттер",
            "de": "Wermut & Bitter"
          },
          "icon": "🥃",
          "image": "",
          "price": 470,
          "description": "İtalyan acı likörü",
          "translations": {
            "en": "Italian bitter liqueur"
          },
          "tags": []
        },
        {
          "name": "Amaretto",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🥃",
          "image": "",
          "price": 475,
          "description": "Bademli İtalyan likörü",
          "translations": {
            "en": "Italian almond liqueur",
            "sv": "Italiensk mandellikör",
            "no": "Italiensk mandellikør",
            "da": "Italiensk mandellikør",
            "fi": "Italialainen mantelilikööri",
            "ru": "Итальянский миндальный ликёр",
            "de": "Italienischer Mandellikör"
          },
          "tags": []
        },
        {
          "name": "Archers",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🍑",
          "image": "",
          "price": 465,
          "description": "Şeftali likörü",
          "translations": {
            "en": "Peach schnapps",
            "sv": "Persikolikör",
            "no": "Ferskenlikør",
            "da": "Ferskenlikør",
            "fi": "Persikkalikööri",
            "ru": "Персиковый ликёр",
            "de": "Pfirsichlikör"
          },
          "tags": []
        },
        {
          "name": "Bailey's",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "İrlanda kreması",
          "translations": {
            "en": "Irish cream",
            "sv": "Irländsk gräddlikör",
            "no": "Irsk fløtelikør",
            "da": "Irsk fløde",
            "fi": "Irlantilainen kermalikööri",
            "ru": "Ирландский сливочный ликёр",
            "de": "Irish Cream"
          },
          "tags": []
        },
        {
          "name": "Cointreau",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🍊",
          "image": "",
          "price": 0,
          "description": "Portakal likörü",
          "translations": {
            "en": "Orange liqueur",
            "sv": "Apelsinlikör",
            "no": "Appelsinlikør",
            "da": "Appelsinlikør",
            "fi": "Appelsiinilikööri",
            "ru": "Апельсиновый ликёр",
            "de": "Orangenlikör"
          },
          "tags": []
        },
        {
          "name": "Kahlúa",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Kahve likörü",
          "translations": {
            "en": "Coffee liqueur",
            "sv": "Kaffelikör",
            "no": "Kaffelikør",
            "da": "Kaffelikør",
            "fi": "Kahvilikööri",
            "ru": "Кофейный ликёр",
            "de": "Kaffeelikör"
          },
          "tags": []
        },
        {
          "name": "Safari",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Tropikal likör",
          "translations": {
            "en": "Tropical liqueur",
            "sv": "Tropisk likör",
            "no": "Tropisk likør",
            "da": "Tropisk likør",
            "fi": "Trooppinen likööri",
            "ru": "Тропический ликёр",
            "de": "Tropischer Likör"
          },
          "tags": []
        },
        {
          "name": "Sambuca",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Anason aromalı İtalyan likörü",
          "translations": {
            "en": "Aniseed-flavored Italian liqueur"
          },
          "tags": []
        },
        {
          "name": "Southern Comfort",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Amerikan viski likörü",
          "translations": {
            "en": "American whisky liqueur",
            "sv": "Amerikansk whiskeylikör",
            "no": "Amerikansk whiskylikør",
            "da": "Amerikansk whiskylikør",
            "fi": "Amerikkalainen viskilikööri",
            "ru": "Американский виски-ликёр",
            "de": "Amerikanischer Whisky-Likör"
          },
          "tags": []
        },
        {
          "name": "Tia Maria",
          "section": {
            "tr": "Likörler",
            "en": "Liqueurs",
            "sv": "Likörer",
            "no": "Likører",
            "da": "Likører",
            "fi": "Liköörit",
            "ru": "Ликёры",
            "de": "Liköre"
          },
          "icon": "🥃",
          "image": "",
          "price": 455,
          "description": "Karayip kahve likörü",
          "translations": {
            "en": "Caribbean coffee liqueur",
            "sv": "Karibisk kaffelikör",
            "no": "Karibisk kaffelikør",
            "da": "Caribisk kaffelikør",
            "fi": "Karibialainen kahvilikööri",
            "ru": "Карибский кофейный ликёр",
            "de": "Karibischer Kaffeelikör"
          },
          "tags": []
        },
        {
          "name": "Tequila",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 420,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Sambuca",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 410,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Jägermeister",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 420,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Fernet Branca",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 420,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Turkish Pepper",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🌶️",
          "image": "",
          "price": 420,
          "description": "Türk biberi shot",
          "translations": {
            "en": "Turkish Pepper shot",
            "sv": "Turkish Pepper-shot",
            "no": "Turkish Pepper-shot",
            "da": "Turkish Pepper-shot",
            "fi": "Turkish Pepper -shotti",
            "ru": "Шот Turkish Pepper",
            "de": "Turkish Pepper Shot"
          },
          "tags": [
            "spicy"
          ]
        },
        {
          "name": "B-52",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Kahlúa, Bailey's, Cointreau",
          "translations": {
            "en": "Kahlúa, Bailey's, Cointreau",
            "sv": "Kahlúa, Bailey's, Cointreau",
            "no": "Kahlúa, Bailey's, Cointreau",
            "da": "Kahlúa, Bailey's, Cointreau",
            "fi": "Kahlúa, Bailey's, Cointreau",
            "ru": "Kahlúa, Bailey's, Cointreau",
            "de": "Kahlúa, Bailey's, Cointreau"
          },
          "tags": []
        },
        {
          "name": "Jager Sam",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Jägermeister + Sambuca",
          "translations": {
            "en": "Jägermeister + Sambuca",
            "sv": "Jägermeister + Sambuca",
            "no": "Jägermeister + Sambuca",
            "da": "Jägermeister + Sambuca",
            "fi": "Jägermeister + Sambuca",
            "ru": "Jägermeister + Sambuca",
            "de": "Jägermeister + Sambuca"
          },
          "tags": []
        },
        {
          "name": "Slippery Nipple",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 445,
          "description": "Sambuca + Bailey's",
          "translations": {
            "en": "Sambuca + Bailey's",
            "sv": "Sambuca + Bailey's",
            "no": "Sambuca + Bailey's",
            "da": "Sambuca + Bailey's",
            "fi": "Sambuca + Bailey's",
            "ru": "Sambuca + Bailey's",
            "de": "Sambuca + Bailey's"
          },
          "tags": []
        },
        {
          "name": "Whiskey Shot",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 410,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Vodka Shot",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 375,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Gin Shot",
          "section": {
            "tr": "Shotlar",
            "en": "Shots",
            "sv": "Shots",
            "no": "Shots",
            "da": "Shots",
            "fi": "Shotit",
            "ru": "Шоты",
            "de": "Shots"
          },
          "icon": "🥃",
          "image": "",
          "price": 375,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Hennessy",
          "section": {
            "tr": "Konyak & Brendi",
            "en": "Cognac & Brandy",
            "sv": "Cognac & brandy",
            "no": "Cognac & brandy",
            "da": "Cognac & brandy",
            "fi": "Konjakki & brandy",
            "ru": "Коньяк и бренди",
            "de": "Cognac & Brandy"
          },
          "icon": "🥃",
          "image": "",
          "price": 640,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Rémy Martin",
          "section": {
            "tr": "Konyak & Brendi",
            "en": "Cognac & Brandy",
            "sv": "Cognac & brandy",
            "no": "Cognac & brandy",
            "da": "Cognac & brandy",
            "fi": "Konjakki & brandy",
            "ru": "Коньяк и бренди",
            "de": "Cognac & Brandy"
          },
          "icon": "🥃",
          "image": "",
          "price": 0,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Martell",
          "section": {
            "tr": "Konyak & Brendi",
            "en": "Cognac & Brandy",
            "sv": "Cognac & brandy",
            "no": "Cognac & brandy",
            "da": "Cognac & brandy",
            "fi": "Konjakki & brandy",
            "ru": "Коньяк и бренди",
            "de": "Cognac & Brandy"
          },
          "icon": "🥃",
          "image": "",
          "price": 0,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        },
        {
          "name": "Napoleon",
          "section": {
            "tr": "Konyak & Brendi",
            "en": "Cognac & Brandy",
            "sv": "Cognac & brandy",
            "no": "Cognac & brandy",
            "da": "Cognac & brandy",
            "fi": "Konjakki & brandy",
            "ru": "Коньяк и бренди",
            "de": "Cognac & Brandy"
          },
          "icon": "🥃",
          "image": "",
          "price": 545,
          "description": "",
          "translations": {
            "en": ""
          },
          "tags": []
        }
      ]
    },
    {
      "id": "hotCoffeeAlcohol",
      "name": {
        "tr": "Alkollü Sıcak Kahveler",
        "en": "Hot Coffee with Alcohol",
        "sv": "Varm kaffe med alkohol",
        "no": "Varm kaffe med alkohol",
        "da": "Varm kaffe med alkohol",
        "fi": "Kuuma kahvi alkoholilla",
        "ru": "Горячий кофе с алкоголем",
        "de": "Heißer Kaffee mit Alkohol"
      },
      "items": [
        {
          "name": "Irish Coffee",
          "icon": "☕",
          "image": "",
          "price": 595,
          "description": "Viski, sıcak kahve, esmer şeker, krema",
          "translations": {
            "en": "Whiskey, hot coffee, brown sugar, cream",
            "sv": "Whiskey, varmt kaffe, farinsocker, grädde",
            "no": "Whisky, varm kaffe, brunt sukker, fløte",
            "da": "Whisky, varm kaffe, brunt sukker, fløde",
            "fi": "Viski, kuuma kahvi, ruskea sokeri, kerma",
            "ru": "Виски, горячий кофе, тростниковый сахар, сливки",
            "de": "Whiskey, heißer Kaffee, brauner Zucker, Sahne"
          },
          "tags": []
        },
        {
          "name": "Bailey's Coffee",
          "icon": "☕",
          "image": "",
          "price": 585,
          "description": "Bailey's, sıcak kahve, krema",
          "translations": {
            "en": "Bailey's, hot coffee, cream",
            "sv": "Bailey's, varmt kaffe, grädde",
            "no": "Bailey's, varm kaffe, fløte",
            "da": "Bailey's, varm kaffe, fløde",
            "fi": "Bailey's, kuuma kahvi, kerma",
            "ru": "Bailey's, горячий кофе, сливки",
            "de": "Bailey's, heißer Kaffee, Sahne"
          },
          "tags": []
        },
        {
          "name": "Calypso Coffee",
          "icon": "☕",
          "image": "",
          "price": 595,
          "description": "Tia Maria, sıcak kahve, krema",
          "translations": {
            "en": "Tia Maria, hot coffee, cream",
            "sv": "Tia Maria, varmt kaffe, grädde",
            "no": "Tia Maria, varm kaffe, fløte",
            "da": "Tia Maria, varm kaffe, fløde",
            "fi": "Tia Maria, kuuma kahvi, kerma",
            "ru": "Tia Maria, горячий кофе, сливки",
            "de": "Tia Maria, heißer Kaffee, Sahne"
          },
          "tags": []
        },
        {
          "name": "Mexican Coffee",
          "icon": "☕",
          "image": "",
          "price": 620,
          "description": "Tekila, Kahlúa, sıcak kahve, krema",
          "translations": {
            "en": "Tequila, Kahlúa, hot coffee, cream",
            "sv": "Tequila, Kahlúa, varmt kaffe, grädde",
            "no": "Tequila, Kahlúa, varm kaffe, fløte",
            "da": "Tequila, Kahlúa, varm kaffe, fløde",
            "fi": "Tequila, Kahlúa, kuuma kahvi, kerma",
            "ru": "Текила, Kahlúa, горячий кофе, сливки",
            "de": "Tequila, Kahlúa, heißer Kaffee, Sahne"
          },
          "tags": []
        },
        {
          "name": "Jamaican Coffee",
          "icon": "☕",
          "image": "",
          "price": 640,
          "description": "Tia Maria, Cointreau, sıcak kahve, krema",
          "translations": {
            "en": "Tia Maria, Cointreau, hot coffee, cream",
            "sv": "Tia Maria, Cointreau, varmt kaffe, grädde",
            "no": "Tia Maria, Cointreau, varm kaffe, fløte",
            "da": "Tia Maria, Cointreau, varm kaffe, fløde",
            "fi": "Tia Maria, Cointreau, kuuma kahvi, kerma",
            "ru": "Tia Maria, Cointreau, горячий кофе, сливки",
            "de": "Tia Maria, Cointreau, heißer Kaffee, Sahne"
          },
          "tags": []
        },
        {
          "name": "French Coffee",
          "icon": "☕",
          "image": "",
          "price": 620,
          "description": "Brendi, sıcak kahve, esmer şeker, krema",
          "translations": {
            "en": "Brandy, hot coffee, brown sugar, cream",
            "sv": "Brandy, varmt kaffe, farinsocker, grädde",
            "no": "Brandy, varm kaffe, brunt sukker, fløte",
            "da": "Brandy, varm kaffe, brunt sukker, fløde",
            "fi": "Brandy, kuuma kahvi, ruskea sokeri, kerma",
            "ru": "Бренди, горячий кофе, тростниковый сахар, сливки",
            "de": "Brandy, heißer Kaffee, brauner Zucker, Sahne"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "cocktails",
      "name": {
        "tr": "Kokteyller",
        "en": "Cocktails",
        "sv": "Cocktails",
        "no": "Cocktailer",
        "da": "Cocktails",
        "fi": "Cocktailit",
        "ru": "Коктейли",
        "de": "Cocktails"
      },
      "items": [
        {
          "name": "Sex on the Beach",
          "icon": "🍹",
          "image": "",
          "price": 595,
          "description": "Votka, Archers, tekila, portakal suyu, grenadine",
          "translations": {
            "en": "Vodka, Archers, tequila, orange juice, grenadine",
            "sv": "Vodka, Archers, tequila, apelsinjuice, grenadine",
            "no": "Vodka, Archers, tequila, appelsinjuice, grenadine",
            "da": "Vodka, Archers, tequila, appelsinjuice, grenadine",
            "fi": "Vodka, Archers, tequila, appelsiinimehu, grenadiini",
            "ru": "Водка, Archers, текила, апельсиновый сок, гренадин",
            "de": "Wodka, Archers, Tequila, Orangensaft, Grenadine"
          },
          "tags": []
        },
        {
          "name": "Summer Love",
          "icon": "🍹",
          "image": "",
          "price": 560,
          "description": "Safari, Malibu, portakal suyu, ananas suyu, grenadine",
          "translations": {
            "en": "Safari, Malibu, orange juice, pineapple juice, grenadine",
            "sv": "Safari, Malibu, apelsinjuice, ananasjuice, grenadine",
            "no": "Safari, Malibu, appelsinjuice, ananasjuice, grenadine",
            "da": "Safari, Malibu, appelsinjuice, ananasjuice, grenadine",
            "fi": "Safari, Malibu, appelsiinimehu, ananasmehu, grenadiini",
            "ru": "Safari, Malibu, апельсиновый сок, ананасовый сок, гренадин",
            "de": "Safari, Malibu, Orangensaft, Ananassaft, Grenadine"
          },
          "tags": []
        },
        {
          "name": "Blue Hawaii",
          "icon": "🍹",
          "image": "",
          "price": 625,
          "description": "Bacardi, Malibu, blue curaçao, ananas suyu, buz",
          "translations": {
            "en": "Bacardi, Malibu, blue curaçao, pineapple juice, ice",
            "sv": "Bacardi, Malibu, blue curaçao, ananasjuice, is",
            "no": "Bacardi, Malibu, blue curaçao, ananasjuice, is",
            "da": "Bacardi, Malibu, blue curaçao, ananasjuice, is",
            "fi": "Bacardi, Malibu, blue curaçao, ananasmehu, jää",
            "ru": "Bacardi, Malibu, blue curaçao, ананасовый сок, лёд",
            "de": "Bacardi, Malibu, Blue Curaçao, Ananassaft, Eis"
          },
          "tags": []
        },
        {
          "name": "Turkish Delight",
          "icon": "🍦",
          "image": "",
          "price": 625,
          "description": "Vanilya, dondurma, Bailey's, Cointreau, Kahlúa, süt, krema, kırılmış buz",
          "translations": {
            "en": "Vanilla, ice cream, Bailey's, Cointreau, Kahlúa, milk, cream, crushed ice",
            "sv": "Vanilj, glass, Bailey's, Cointreau, Kahlúa, mjölk, grädde, krossad is",
            "no": "Vanilje, iskrem, Bailey's, Cointreau, Kahlúa, melk, fløte, knust is",
            "da": "Vanilje, is, Bailey's, Cointreau, Kahlúa, mælk, fløde, knust is",
            "fi": "Vanilja, jäätelö, Bailey's, Cointreau, Kahlúa, maito, kerma, jäämurska",
            "ru": "Ваниль, мороженое, Bailey's, Cointreau, Kahlúa, молоко, сливки, колотый лёд",
            "de": "Vanille, Eis, Bailey's, Cointreau, Kahlúa, Milch, Sahne, Crushed Ice"
          },
          "tags": [
            "new"
          ]
        },
        {
          "name": "Blue Lagoon",
          "icon": "🍹",
          "image": "",
          "price": 525,
          "description": "Votka, blue curaçao, lime, sprite, buz",
          "translations": {
            "en": "Vodka, blue curaçao, lime, sprite, ice",
            "sv": "Vodka, blue curaçao, lime, sprite, is",
            "no": "Vodka, blue curaçao, lime, sprite, is",
            "da": "Vodka, blue curaçao, lime, sprite, is",
            "fi": "Vodka, blue curaçao, lime, sprite, jää",
            "ru": "Водка, blue curaçao, лайм, sprite, лёд",
            "de": "Wodka, Blue Curaçao, Limette, Sprite, Eis"
          },
          "tags": []
        },
        {
          "name": "Blue Horizon",
          "icon": "🍹",
          "image": "",
          "price": 595,
          "description": "Votka, blue curaçao, sprite, portakal suyu, lime, grenadine, buz",
          "translations": {
            "en": "Vodka, blue curaçao, sprite, orange juice, lime, grenadine, ice",
            "sv": "Vodka, blue curaçao, sprite, apelsinjuice, lime, grenadine, is",
            "no": "Vodka, blue curaçao, sprite, appelsinjuice, lime, grenadine, is",
            "da": "Vodka, blue curaçao, sprite, appelsinjuice, lime, grenadine, is",
            "fi": "Vodka, blue curaçao, sprite, appelsiinimehu, lime, grenadiini, jää",
            "ru": "Водка, blue curaçao, sprite, апельсиновый сок, лайм, гренадин, лёд",
            "de": "Wodka, Blue Curaçao, Sprite, Orangensaft, Limette, Grenadine, Eis"
          },
          "tags": []
        },
        {
          "name": "Caribbean Sunset",
          "icon": "🍹",
          "image": "",
          "price": 595,
          "description": "Captain Morgan, blue curaçao, portakal suyu, ananas suyu, buz",
          "translations": {
            "en": "Captain Morgan, blue curaçao, orange juice, pineapple juice, ice",
            "sv": "Captain Morgan, blue curaçao, apelsinjuice, ananasjuice, is",
            "no": "Captain Morgan, blue curaçao, appelsinjuice, ananasjuice, is",
            "da": "Captain Morgan, blue curaçao, appelsinjuice, ananasjuice, is",
            "fi": "Captain Morgan, blue curaçao, appelsiinimehu, ananasmehu, jää",
            "ru": "Captain Morgan, blue curaçao, апельсиновый сок, ананасовый сок, лёд",
            "de": "Captain Morgan, Blue Curaçao, Orangensaft, Ananassaft, Eis"
          },
          "tags": []
        },
        {
          "name": "Apple Martini",
          "icon": "🍸",
          "image": "",
          "price": 845,
          "description": "Smirnoff, şeftali likörü, acı elma suyu, buz",
          "translations": {
            "en": "Smirnoff, peach schnapps, bitter apple juice, ice",
            "sv": "Smirnoff, persikolikör, bitter äppeljuice, is",
            "no": "Smirnoff, ferskenlikør, bitter eplejuice, is",
            "da": "Smirnoff, ferskenlikør, bitter æblejuice, is",
            "fi": "Smirnoff, persikkalikööri, kitkerä omenamehu, jää",
            "ru": "Smirnoff, персиковый ликёр, горький яблочный сок, лёд",
            "de": "Smirnoff, Pfirsichlikör, bitterer Apfelsaft, Eis"
          },
          "tags": []
        },
        {
          "name": "Ocean Storm",
          "icon": "🍹",
          "image": "",
          "price": 645,
          "description": "Votka, Bacardi, blue curaçao, Archers, Cointreau, Red Bull, lime, buz",
          "translations": {
            "en": "Vodka, Bacardi, blue curaçao, Archers, Cointreau, Red Bull, lime, ice",
            "sv": "Vodka, Bacardi, blue curaçao, Archers, Cointreau, Red Bull, lime, is",
            "no": "Vodka, Bacardi, blue curaçao, Archers, Cointreau, Red Bull, lime, is",
            "da": "Vodka, Bacardi, blue curaçao, Archers, Cointreau, Red Bull, lime, is",
            "fi": "Vodka, Bacardi, blue curaçao, Archers, Cointreau, Red Bull, lime, jää",
            "ru": "Водка, Bacardi, blue curaçao, Archers, Cointreau, Red Bull, лайм, лёд",
            "de": "Wodka, Bacardi, Blue Curaçao, Archers, Cointreau, Red Bull, Limette, Eis"
          },
          "tags": [
            "new"
          ]
        },
        {
          "name": "Scarlet O'Hara",
          "icon": "🍸",
          "image": "",
          "price": 525,
          "description": "Southern Comfort, limon, kızılcık suyu, buz",
          "translations": {
            "en": "Southern Comfort, lemon, cranberry juice, ice",
            "sv": "Southern Comfort, citron, tranbärsjuice, is",
            "no": "Southern Comfort, sitron, tranebærjuice, is",
            "da": "Southern Comfort, citron, tranebærsjuice, is",
            "fi": "Southern Comfort, sitruuna, karpalomehu, jää",
            "ru": "Southern Comfort, лимон, клюквенный сок, лёд",
            "de": "Southern Comfort, Zitrone, Cranberrysaft, Eis"
          },
          "tags": []
        },
        {
          "name": "P.S. I Love U",
          "icon": "🍸",
          "image": "",
          "price": 645,
          "description": "Bailey's, Kahlúa, Amaretto, süt, krema, buz",
          "translations": {
            "en": "Bailey's, Kahlúa, Amaretto, milk, cream, ice",
            "sv": "Bailey's, Kahlúa, Amaretto, mjölk, grädde, is",
            "no": "Bailey's, Kahlúa, Amaretto, melk, fløte, is",
            "da": "Bailey's, Kahlúa, Amaretto, mælk, fløde, is",
            "fi": "Bailey's, Kahlúa, Amaretto, maito, kerma, jää",
            "ru": "Bailey's, Kahlúa, Amaretto, молоко, сливки, лёд",
            "de": "Bailey's, Kahlúa, Amaretto, Milch, Sahne, Eis"
          },
          "tags": []
        },
        {
          "name": "Hawaiian Martini",
          "icon": "🍸",
          "image": "",
          "price": 545,
          "description": "Bacardi, Malibu, blue curaçao, ananas suyu, lime, buz",
          "translations": {
            "en": "Bacardi, Malibu, blue curaçao, pineapple juice, lime, ice",
            "sv": "Bacardi, Malibu, blue curaçao, ananasjuice, lime, is",
            "no": "Bacardi, Malibu, blue curaçao, ananasjuice, lime, is",
            "da": "Bacardi, Malibu, blue curaçao, ananasjuice, lime, is",
            "fi": "Bacardi, Malibu, blue curaçao, ananasmehu, lime, jää",
            "ru": "Bacardi, Malibu, blue curaçao, ананасовый сок, лайм, лёд",
            "de": "Bacardi, Malibu, Blue Curaçao, Ananassaft, Limette, Eis"
          },
          "tags": []
        },
        {
          "name": "Cosmopolitan",
          "icon": "🍸",
          "image": "",
          "price": 565,
          "description": "Smirnoff votka, Cointreau, limon suyu, kızılcık suyu, buz",
          "translations": {
            "en": "Smirnoff vodka, Cointreau, lemon juice, cranberry juice, ice",
            "sv": "Smirnoff vodka, Cointreau, citronjuice, tranbärsjuice, is",
            "no": "Smirnoff vodka, Cointreau, sitronjuice, tranebærjuice, is",
            "da": "Smirnoff vodka, Cointreau, citronjuice, tranebærsjuice, is",
            "fi": "Smirnoff-vodka, Cointreau, sitruunamehu, karpalomehu, jää",
            "ru": "Smirnoff водка, Cointreau, лимонный сок, клюквенный сок, лёд",
            "de": "Smirnoff Wodka, Cointreau, Zitronensaft, Cranberrysaft, Eis"
          },
          "tags": []
        },
        {
          "name": "Pina Colada",
          "icon": "🥥",
          "image": "",
          "price": 545,
          "description": "Bacardi, Malibu, hindistan cevizi sütü, hindistan cevizi kreması, ananas suyu, hindistan cevizi şurubu, buz",
          "translations": {
            "en": "Bacardi, Malibu, coconut milk, coconut cream, pineapple juice, coconut syrup, ice",
            "sv": "Bacardi, Malibu, kokosmjölk, kokosgrädde, ananasjuice, kokossirap, is",
            "no": "Bacardi, Malibu, kokosmelk, kokoskrem, ananasjuice, kokossirup, is",
            "da": "Bacardi, Malibu, kokosmælk, kokosflødeskum, ananasjuice, kokossirup, is",
            "fi": "Bacardi, Malibu, kookosmaito, kookoskerma, ananasmehu, kookossiirappi, jää",
            "ru": "Bacardi, Malibu, кокосовое молоко, кокосовые сливки, ананасовый сок, кокосовый сироп, лёд",
            "de": "Bacardi, Malibu, Kokosmilch, Kokosnusscreme, Ananassaft, Kokossirup, Eis"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "refreshingCocktails",
      "name": {
        "tr": "Ferahlatıcı Kokteyller",
        "en": "Refreshing Cocktails",
        "sv": "Uppfriskande cocktails",
        "no": "Forfriskende cocktailer",
        "da": "Forfriskende cocktails",
        "fi": "Virkistävät cocktailit",
        "ru": "Освежающие коктейли",
        "de": "Erfrischende Cocktails"
      },
      "items": [
        {
          "name": "Cuba Libre",
          "icon": "🍹",
          "image": "",
          "price": 545,
          "description": "Bacardi, lime, taze lime dilimleri, kola, kırılmış buz",
          "translations": {
            "en": "Bacardi, lime, fresh sliced lime, cola, crushed ice",
            "sv": "Bacardi, lime, färska limeskivor, cola, krossad is",
            "no": "Bacardi, lime, friske limeskiver, cola, knust is",
            "da": "Bacardi, lime, friske limeskiver, cola, knust is",
            "fi": "Bacardi, lime, tuoreita limeviipaleita, cola, jäämurska",
            "ru": "Bacardi, лайм, свежие дольки лайма, кола, колотый лёд",
            "de": "Bacardi, Limette, frische Limettenscheiben, Cola, Crushed Ice"
          },
          "tags": []
        },
        {
          "name": "Long Island Iced Tea",
          "icon": "🍹",
          "image": "",
          "price": 845,
          "description": "Bacardi, votka, cin, Cointreau, tekila, taze lime, kola",
          "translations": {
            "en": "Bacardi, vodka, gin, Cointreau, tequila, fresh lime, cola",
            "sv": "Bacardi, vodka, gin, Cointreau, tequila, färsk lime, cola",
            "no": "Bacardi, vodka, gin, Cointreau, tequila, fersk lime, cola",
            "da": "Bacardi, vodka, gin, Cointreau, tequila, frisk lime, cola",
            "fi": "Bacardi, vodka, gini, Cointreau, tequila, tuore lime, cola",
            "ru": "Bacardi, водка, джин, Cointreau, текила, свежий лайм, кола",
            "de": "Bacardi, Wodka, Gin, Cointreau, Tequila, frische Limette, Cola"
          },
          "tags": []
        },
        {
          "name": "Negroni",
          "icon": "🍹",
          "image": "",
          "price": 710,
          "description": "Campari, Martini Rosso, Bombay cin, buz",
          "translations": {
            "en": "Campari, Martini Rosso, Bombay gin, ice",
            "sv": "Campari, Martini Rosso, Bombay-gin, is",
            "no": "Campari, Martini Rosso, Bombay-gin, is",
            "da": "Campari, Martini Rosso, Bombay-gin, is",
            "fi": "Campari, Martini Rosso, Bombay-gini, jää",
            "ru": "Campari, Martini Rosso, Bombay джин, лёд",
            "de": "Campari, Martini Rosso, Bombay Gin, Eis"
          },
          "tags": []
        },
        {
          "name": "Bacardi Mojito",
          "icon": "🌿",
          "image": "",
          "price": 595,
          "description": "Bacardi, taze lime suyu, taze nane yaprakları, lime şurubu, esmer şeker, soda, kırılmış buz",
          "translations": {
            "en": "Bacardi, fresh lime juice, fresh mint leaves, lime syrup, brown sugar, soda, crushed ice",
            "sv": "Bacardi, färsk limejuice, färska myntablad, limesirap, farinsocker, sodavatten, krossad is",
            "no": "Bacardi, fersk limejuice, friske mynteblader, limesirup, brunt sukker, soda, knust is",
            "da": "Bacardi, frisk limejuice, friske mynteblade, limesirup, brunt sukker, danskvand, knust is",
            "fi": "Bacardi, tuore limemehu, tuoreet mintunlehdet, limettisiirappi, ruskea sokeri, soodavesi, jäämurska",
            "ru": "Bacardi, свежий сок лайма, мята, лаймовый сироп, тростниковый сахар, содовая, колотый лёд",
            "de": "Bacardi, frischer Limettensaft, Minzblätter, Limettensirup, brauner Zucker, Sodawasser, Crushed Ice"
          },
          "tags": []
        },
        {
          "name": "Jager Mojito",
          "icon": "🌿",
          "image": "",
          "price": 620,
          "description": "Jägermeister, taze lime suyu, taze lime, taze nane, maden suyu, kırılmış buz",
          "translations": {
            "en": "Jägermeister, fresh lime juice, fresh lime, fresh mint leaves, mineral water, crushed ice",
            "sv": "Jägermeister, färsk limejuice, färsk lime, färsk mynta, mineralvatten, krossad is",
            "no": "Jägermeister, fersk limejuice, fersk lime, fersk mynte, mineralvann, knust is",
            "da": "Jägermeister, frisk limejuice, frisk lime, frisk mynte, mineralvand, knust is",
            "fi": "Jägermeister, tuore limemehu, tuore lime, tuore minttu, kivennäisvesi, jäämurska",
            "ru": "Jägermeister, свежий сок лайма, лайм, мята, минеральная вода, колотый лёд",
            "de": "Jägermeister, frischer Limettensaft, frische Limette, Minze, Mineralwasser, Crushed Ice"
          },
          "tags": []
        },
        {
          "name": "Scarlet Burn — Whisky Aperativo",
          "icon": "🥃",
          "image": "",
          "price": 650,
          "description": "Aperol, taze lime suyu, sprite, viski, buz",
          "translations": {
            "en": "Aperol, fresh lime juice, sprite, whiskey, ice",
            "sv": "Aperol, färsk limejuice, sprite, whiskey, is",
            "no": "Aperol, fersk limejuice, sprite, whisky, is",
            "da": "Aperol, frisk limejuice, sprite, whisky, is",
            "fi": "Aperol, tuore limemehu, sprite, viski, jää",
            "ru": "Aperol, свежий сок лайма, sprite, виски, лёд",
            "de": "Aperol, frischer Limettensaft, Sprite, Whisky, Eis"
          },
          "tags": []
        },
        {
          "name": "Aperol Spritz",
          "icon": "🍸",
          "image": "",
          "price": 595,
          "description": "Aperol, prosecco, soda, buz",
          "translations": {
            "en": "Aperol, prosecco, soda, ice",
            "sv": "Aperol, prosecco, sodavatten, is",
            "no": "Aperol, prosecco, soda, is",
            "da": "Aperol, prosecco, danskvand, is",
            "fi": "Aperol, prosecco, soodavesi, jää",
            "ru": "Aperol, просекко, содовая, лёд",
            "de": "Aperol, Prosecco, Sodawasser, Eis"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "frozenCocktails",
      "name": {
        "tr": "Frozen Kokteyller",
        "en": "Frozen Cocktails",
        "sv": "Frusna cocktails",
        "no": "Frosne cocktailer",
        "da": "Frosne cocktails",
        "fi": "Jäiset cocktailit",
        "ru": "Замороженные коктейли",
        "de": "Frozen Cocktails"
      },
      "items": [
        {
          "name": "Frozen Strawberry Daiquiri",
          "icon": "🍓",
          "image": "",
          "price": 640,
          "description": "Bacardi, donmuş çilek, esmer şeker, lime şurubu, şeker şurubu, çilek şurubu, kırılmış buz",
          "translations": {
            "en": "Bacardi, frozen strawberry, brown sugar, lime syrup, sugar syrup, strawberry syrup, crushed ice",
            "sv": "Bacardi, frusna jordgubbar, farinsocker, limesirap, sockerlag, jordgubbssirap, krossad is",
            "no": "Bacardi, frosne jordbær, brunt sukker, limesirup, sukkersirup, jordbærsirup, knust is",
            "da": "Bacardi, frosne jordbær, brunt sukker, limesirup, sukkersirup, jordbærsirup, knust is",
            "fi": "Bacardi, pakastemansikat, ruskea sokeri, limettisiirappi, sokerisiirappi, mansikkasiirappi, jäämurska",
            "ru": "Bacardi, замороженная клубника, тростниковый сахар, лаймовый сироп, сахарный сироп, клубничный сироп, колотый лёд",
            "de": "Bacardi, gefrorene Erdbeeren, brauner Zucker, Limettensirup, Zuckersirup, Erdbeersirup, Crushed Ice"
          },
          "tags": []
        },
        {
          "name": "Frozen Strawberry Margarita",
          "icon": "🍓",
          "image": "",
          "price": 660,
          "description": "Donmuş çilek, tekila, Cointreau, taze lime suyu, esmer şeker, lime şurubu, şeker şurubu, çilek şurubu, kırılmış buz",
          "translations": {
            "en": "Frozen strawberry, tequila, Cointreau, fresh lime juice, brown sugar, lime syrup, sugar syrup, strawberry syrup, crushed ice",
            "sv": "Frusna jordgubbar, tequila, Cointreau, färsk limejuice, farinsocker, limesirap, sockerlag, jordgubbssirap, krossad is",
            "no": "Frosne jordbær, tequila, Cointreau, fersk limejuice, brunt sukker, limesirup, sukkersirup, jordbærsirup, knust is",
            "da": "Frosne jordbær, tequila, Cointreau, frisk limejuice, brunt sukker, limesirup, sukkersirup, jordbærsirup, knust is",
            "fi": "Pakastemansikat, tequila, Cointreau, tuore limemehu, ruskea sokeri, limettisiirappi, sokerisiirappi, mansikkasiirappi, jäämurska",
            "ru": "Замороженная клубника, текила, Cointreau, свежий сок лайма, тростниковый сахар, лаймовый сироп, сахарный сироп, клубничный сироп, колотый лёд",
            "de": "Gefrorene Erdbeeren, Tequila, Cointreau, frischer Limettensaft, brauner Zucker, Limettensirup, Zuckersirup, Erdbeersirup, Crushed Ice"
          },
          "tags": []
        }
      ]
    }
  ],
  "wines": [
    {
      "id": "redWines",
      "name": {
        "tr": "Kırmızı Şaraplar",
        "en": "Red Wines",
        "sv": "Röda viner",
        "no": "Rødvin",
        "da": "Rødvine",
        "fi": "Punaviinit",
        "ru": "Красные вина",
        "de": "Rotweine"
      },
      "items": [
        {
          "name": "Angora",
          "producer": "Kavaklıdere",
          "region": "Türkiye · Ege Kıyısı",
          "year": null,
          "grape": "Cabernet Sauvignon, Alicante, Merlot",
          "icon": "🍷",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1650,
          "description": "Meyvemsi, yuvarlak ve iyi dengelenmiş, yumuşak tanenli",
          "translations": {
            "en": "Fruity, round and well-balanced with soft tannins",
            "sv": "Passar bra till grillad kyckling, fisk, pasta med lätta såser och sallader",
            "no": "Passer godt til grillet kylling, fisk, pasta med lette sauser og salater",
            "da": "Passer godt til grillet kylling, fisk, pasta med lette saucer og salater",
            "fi": "Sopii grillattuun kanaan, kalaan, kevyellä kastikkeella valmistettuun pastaan ja salaatteihin",
            "ru": "Хорошо сочетается с курицей-гриль, рыбой, пастой с лёгкими соусами и салатами",
            "de": "Passt gut zu gegrilltem Hähnchen, Fisch, Pasta mit leichten Saucen und Salaten"
          },
          "tags": []
        },
        {
          "name": "Ancyra Cabernet Sauvignon-Syrah",
          "producer": "Kavaklıdere",
          "region": "Türkiye · Güney Ege",
          "year": null,
          "grape": "Cabernet Sauvignon, Syrah",
          "icon": "🍷",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1850,
          "description": "Yoğun baharat aromaları ve koyu kırmızı meyve notaları, orta gövdeli, dengeli yumuşak tanenler. Baharatlı ve soslu dana eti, fajita, barbekü ve sarı sert peynirlerle uyumlu",
          "translations": {
            "en": "Persistent and remarkable with intense spice aromas and dark red fruit notes; medium body and very well balanced soft tannins. Pairs with spicy and sauced veal, fajitas, barbeque and yellow hard cheeses",
            "sv": "Ihållande med intensiva kryddaromer och mörka röda fruktnotor; medelfyllig kropp med mycket välbalanserade mjuka tanniner",
            "no": "Vedvarende med intense krydderaromaer og mørke røde fruktnotater; middels fylde med svært godt balanserte myke tanniner",
            "da": "Vedvarende med intense krydderiaromaer og mørke røde frugtnoter; middel fylde med meget velafbalancerede bløde tanniner",
            "fi": "Pitkäkestoinen, voimakkaita maustearomeja ja tummia punaisia hedelmiä; keskitäyteläinen ja hyvin tasapainoiset pehmeät tanniinit",
            "ru": "Стойкое, с интенсивными пряными ароматами и нотами тёмных красных фруктов; среднетельное, очень хорошо сбалансированные мягкие танины",
            "de": "Anhaltend mit intensiven Gewürzaromen und dunklen roten Fruchtnoten; mittelschwer mit sehr gut ausbalancierten weichen Tanninen"
          },
          "tags": []
        },
        {
          "name": "Montes",
          "producer": "Montes",
          "region": "Şili · Colchagua Vadisi",
          "year": null,
          "grape": "Malbec",
          "icon": "🍷",
          "image": "",
          "glassPrice": null,
          "bottlePrice": null,
          "description": "Çikolata ve vanilya aromaları, orta gövdeli, vanilya-karamel notalı kalıcı tat. Spaghetti Bolognese, peynir, biftek-patates, pirinç esaslı yemekler ve yoğun soslarla önerilir",
          "translations": {
            "en": "Remarkable with chocolate and vanilla aromas; mid-bodied and persistent with vanilla-caramel notes. Highly recommended with Spaghetti Bolognese, cheeses, steak and french fries, rice-based dishes and strong-flavoured sauces",
            "sv": "Anmärkningsvärt med choklad- och vaniljaromer; medelfylligt och ihållande med vanilj- och kola­toner",
            "no": "Bemerkelsesverdig med sjokolade- og vaniljearomaer; middels fylde og vedvarende med vanilje- og karamellnotater",
            "da": "Bemærkelsesværdig med chokolade- og vaniljearomaer; middel fylde og vedvarende med vanilje- og karamelnoter",
            "fi": "Huomattavat suklaa- ja vaniljaaromit; keskitäyteläinen ja pitkäkestoinen, vanilja- ja karamellivivahteet",
            "ru": "Запоминающееся с ароматами шоколада и ванили; среднетельное, стойкое, с нотами ванили и карамели",
            "de": "Bemerkenswert mit Schokoladen- und Vanillearomen; mittelschwer und anhaltend mit Vanille-Karamell-Noten"
          },
          "tags": []
        },
        {
          "name": "La Folie — Maison Kavaklıdere",
          "producer": "Kavaklıdere",
          "region": "Fransa · AOC Castillon Côtes de Bordeaux",
          "year": null,
          "grape": "Merlot",
          "icon": "🍷",
          "image": "images/menu/wines-redWines-4-la-folie-maison-kavakl-dere.jpg",
          "glassPrice": null,
          "bottlePrice": null,
          "description": "Kırmızı erik gibi taze meyveli, kalıcı aromalarıyla canlı ve dikkat çekici. Mantar soslu bonfile, ızgara tavuk, sucuklu pizza ve yumuşak peynirlerle mükemmel uyum",
          "translations": {
            "en": "Juicy with fresh fruit like red plum; remarkable and live with persistent aromas. Perfectly matches with mushroom sauced tenderloin, grilled chicken, pepperoni pizza and soft cheeses",
            "sv": "Saftigt med färsk frukt som röda plommon; livfullt och anmärkningsvärt med ihållande aromer",
            "no": "Saftig med fersk frukt som rødt plommon; livfullt og bemerkelsesverdig med vedvarende aromaer",
            "da": "Saftig med frisk frugt som røde blommer; livfuldt og bemærkelsesværdigt med vedvarende aromaer",
            "fi": "Mehukas, tuoreita hedelmiä kuten punaista luumua; eloisa ja huomiota herättävä, pitkäkestoiset aromit",
            "ru": "Сочное, с тонами свежей красной сливы; запоминающееся, живое, с устойчивыми ароматами",
            "de": "Saftig mit frischen Früchten wie roter Pflaume; lebhaft und bemerkenswert mit anhaltenden Aromen"
          },
          "tags": [
            "new"
          ]
        },
        {
          "name": "Alamos Malbec",
          "producer": "Alamos",
          "region": "Arjantin · Mendoza",
          "year": null,
          "grape": "Malbec",
          "icon": "🍷",
          "image": "images/menu/wines-redWines-5-alamos-malbec.jpg",
          "glassPrice": null,
          "bottlePrice": 2850,
          "description": "Siyah meyveler, damağa gelen siyah biber notaları ve çiçeksi aromalar; deri dokunuşu",
          "translations": {
            "en": "Black fruits, black pepper to taste and floral notes; with a leathery touch",
            "sv": "Svarta frukter, svartpeppar i smaken och blommiga toner; med en läderaktig touch",
            "no": "Svarte frukter, svart pepper i smaken og blomsteraromaer; med et hint av lær",
            "da": "Sorte frugter, sort peber i smagen og blomsterduft; med et strejf af læder",
            "fi": "Mustia hedelmiä, mustapippuria maussa ja kukkaisia aromeja; nahkainen vivahde",
            "ru": "Чёрные фрукты, чёрный перец во вкусе и цветочные ноты; кожаный оттенок",
            "de": "Schwarze Früchte, schwarzer Pfeffer am Gaumen und florale Noten; mit einer ledrigen Note"
          },
          "tags": []
        },
        {
          "name": "Conte Guicciardini — Le Terre Chianti",
          "producer": "Guicciardini",
          "region": "İtalya · DOCG Chianti",
          "year": null,
          "grape": "Sangiovese, Canaiolo, Colorino",
          "icon": "🍷",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 2800,
          "description": "Taze meyve aromalarıyla yoğun ve dengeli. Domates soslu makarna, pizza, lazanya, parmigiano-reggiano, mozzarella, şarküteri-antipasti ve ızgara sebzelerle önerilir",
          "translations": {
            "en": "Intense and balanced with fresh fruit aromas. Recommended with pasta with tomato sauce, pizza, lasagna, parmigiano-reggiano, mozzarella, charcuterie and antipasti, grilled vegetables",
            "sv": "Intensivt och balanserat med färska fruktaromer",
            "no": "Intenst og balansert med friske fruktaromaer",
            "da": "Intenst og balanceret med friske frugtaromaer",
            "fi": "Intensiivinen ja tasapainoinen, tuoreita hedelmäaromeja",
            "ru": "Насыщенное и сбалансированное с ароматами свежих фруктов",
            "de": "Intensiv und ausbalanciert mit frischen Fruchtaromen"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "whiteWines",
      "name": {
        "tr": "Beyaz Şaraplar",
        "en": "White Wines",
        "sv": "Vita viner",
        "no": "Hvitvin",
        "da": "Hvidvine",
        "fi": "Valkoviinit",
        "ru": "Белые вина",
        "de": "Weißweine"
      },
      "items": [
        {
          "name": "Angora",
          "producer": "Kavaklıdere",
          "region": "Türkiye · Tokat, Kapadokya, Denizli",
          "year": null,
          "grape": "Sultaniye",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1650,
          "description": "Narenciye ve beyaz meyve aromaları, canlı ve gevrek, yoğun ve kalıcı meyve tatlarıyla lezzetli",
          "translations": {
            "en": "Citrus and white fruit aromas, lively and crisp, delicious with persistent and intense fruit flavours",
            "sv": "Passar bra till grillad kyckling, fisk, pasta med lätta såser och sallader",
            "no": "Passer godt til grillet kylling, fisk, pasta med lette sauser og salater",
            "da": "Passer godt til grillet kylling, fisk, pasta med lette saucer og salater",
            "fi": "Sopii grillattuun kanaan, kalaan, kevyellä kastikkeella valmistettuun pastaan ja salaatteihin",
            "ru": "Хорошо сочетается с курицей-гриль, рыбой, пастой с лёгкими соусами и салатами",
            "de": "Passt gut zu gegrilltem Hähnchen, Fisch, Pasta mit leichten Saucen und Salaten"
          },
          "tags": []
        },
        {
          "name": "Ancyra Narince",
          "producer": "Kavaklıdere",
          "region": "Türkiye · Tokat / Orta Anadolu",
          "year": null,
          "grape": "Emir",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1850,
          "description": "Yoğun narenciye ve sert çekirdek meyve aromaları, çiçeksi notalar; iyi asit ve kalıcılıkla zarif ve dengeli. Deniz ürünleri, ahtapot salatası, ızgara tavuk-balık, hafif soslu makarna ve taze peynirlerle uyumlu",
          "translations": {
            "en": "Intense with citrus and stony fruit aromas, floral notes; elegant and well balanced with good acidity. Pairs with shellfish, octopus salad, grilled chicken and fish, lightly sauced pasta and fresh cheeses",
            "sv": "Intensivt med citrus- och stenfruktsaromer, blomsterdoft; elegant och välbalanserat med god syra",
            "no": "Intenst med sitrus- og steinfruktaromaer, blomsternotater; elegant og godt balansert med god syre",
            "da": "Intenst med citrus- og stenfrugtaromaer, blomsternoter; elegant og velafbalanceret med god syre",
            "fi": "Voimakas, sitrus- ja kivihedelmäaromit, kukkaisia vivahteita; tyylikäs ja tasapainoinen, hyvä happoisuus",
            "ru": "Насыщенное, ароматы цитрусов и косточковых фруктов, цветочные ноты; элегантное и сбалансированное, хорошая кислотность",
            "de": "Intensiv mit Zitrus- und Steinfruchtaromen, floralen Noten; elegant und gut ausbalanciert mit guter Säure"
          },
          "tags": []
        },
        {
          "name": "Ancyra Sauvignon Blanc",
          "producer": "Kavaklıdere",
          "region": "Türkiye · Denizli-Güney Ege",
          "year": null,
          "grape": "Sauvignon Blanc",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1950,
          "description": "Yoğun yeşil biber ve çim aromaları, çiçeksi notalar; gevrek asit ve mineralite ile sulu ve dengeli. Deniz ürünleri, hafif soslu balık, yeşil salata ve taze peynirlerle iyi gider",
          "translations": {
            "en": "Intense with green pepper and grass aromas and floral notes; juicy and well balanced with crisp acidity and minerality. Goes well with shellfish, lightly sauced fish, green salad and fresh cheeses",
            "sv": "Intensivt med aromer av grön paprika och gräs, blomsterdoft; saftigt och välbalanserat med frisk syra och mineralitet",
            "no": "Intenst med aromaer av grønn paprika og gress, blomsternotater; saftig og godt balansert med sprø syre og mineralitet",
            "da": "Intenst med aromaer af grøn peberfrugt og græs, blomsternoter; saftig og velafbalanceret med sprød syre og mineralitet",
            "fi": "Voimakas, vihreän paprikan ja ruohon aromit, kukkaisia vivahteita; mehukas ja tasapainoinen, raikas happoisuus ja mineraalisuus",
            "ru": "Насыщенное, ароматы зелёного перца и трав, цветочные ноты; сочное и сбалансированное, свежая кислотность и минеральность",
            "de": "Intensiv mit Aromen von grünem Pfeffer und Gras, floralen Noten; saftig und gut ausbalanciert mit knackiger Säure und Mineralität"
          },
          "tags": []
        },
        {
          "name": "Baron de Lestac Bordeaux",
          "producer": "Baron de Lestac",
          "region": "Fransa · Bordeaux AOC",
          "year": null,
          "grape": "Sauvignon Blanc, Sémillon",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 2295,
          "description": "Çiçek ve vanilya notalarıyla çok ifadeli; taze ve ağız dolduran, çok iyi uzunlukta. Balık ve deniz ürünlerine, beyaz ete, taze keçi peyniri ve tartlara mükemmel eşlik eder",
          "translations": {
            "en": "Very expressive with floral and vanilla notes; fresh and mouth-filling with very good length. Perfect with fish and shellfish as well as white meat, fresh goat cheese and tarts",
            "sv": "Mycket uttrycksfullt med blomster- och vaniljnoter; friskt och munfyllande med mycket god längd",
            "no": "Svært uttrykksfullt med blomster- og vaniljenotater; friskt og munnfyllende med svært god lengde",
            "da": "Meget udtryksfuldt med blomster- og vaniljenoter; frisk og mundfyldende med meget god længde",
            "fi": "Erittäin ilmeikäs, kukkaisia ja vaniljaisia vivahteita; raikas ja suuntäyteinen, hyvin pitkä jälkimaku",
            "ru": "Очень выразительное, с цветочными и ванильными нотами; свежее и наполняющее, с очень хорошим послевкусием",
            "de": "Sehr ausdrucksvoll mit floralen und Vanillenoten; frisch und mundfüllend mit sehr guter Länge"
          },
          "tags": []
        },
        {
          "name": "Montes Alpha Chardonnay",
          "producer": "Montes",
          "region": "Şili · Colchagua Vadisi",
          "year": null,
          "grape": "Chardonnay",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 3495,
          "description": "Yoğun ve kompleks burun: ananas, muz, olgun mango gibi tropikal meyveler; şeftali ve armut notaları meyvemsi profili tamamlar. Beyaz et, makarna, suşi, balık, deniz ürünleri ve peynirlerle önerilir",
          "translations": {
            "en": "Intense complex nose with tropical fruit aromas — pineapple, banana, ripe mango — and notes of peaches and pears. Recommended with white meats, pasta, sushi, fish, seafood and cheeses",
            "sv": "Intensiv komplex näsa med tropiska fruktaromer — ananas, banan, mogen mango — och toner av persika och päron",
            "no": "Intens kompleks nese med tropiske fruktaromaer — ananas, banan, moden mango — og notater av fersken og pære",
            "da": "Intens kompleks næse med tropiske frugtaromaer — ananas, banan, moden mango — og noter af fersken og pære",
            "fi": "Voimakas ja monimuotoinen tuoksu: trooppisia hedelmiä — ananasta, banaania, kypsää mangoa — sekä persikan ja päärynän vivahteita",
            "ru": "Интенсивный сложный нос с ароматами тропических фруктов — ананас, банан, спелое манго — и нотами персика и груши",
            "de": "Intensive, komplexe Nase mit tropischen Fruchtaromen — Ananas, Banane, reife Mango — sowie Pfirsich- und Birnennoten"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "roseWines",
      "name": {
        "tr": "Roze Şaraplar",
        "en": "Rosé Wines",
        "sv": "Roséviner",
        "no": "Rosévin",
        "da": "Rosévine",
        "fi": "Roseeviinit",
        "ru": "Розовые вина",
        "de": "Roséweine"
      },
      "items": [
        {
          "name": "Angora",
          "producer": "Kavaklıdere",
          "region": "Türkiye · Elazığ, Denizli",
          "year": null,
          "grape": "Öküzgözü, Çalkarası",
          "icon": "🌸",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1650,
          "description": "Izgara tavuk, balık, hafif soslu makarna ve salatalarla iyi gider",
          "translations": {
            "en": "Goes well with grilled chicken, fish, pasta with light sauces and salads",
            "sv": "Passar bra till grillad kyckling, fisk, pasta med lätta såser och sallader",
            "no": "Passer godt til grillet kylling, fisk, pasta med lette sauser og salater",
            "da": "Passer godt til grillet kylling, fisk, pasta med lette saucer og salater",
            "fi": "Sopii grillattuun kanaan, kalaan, kevyellä kastikkeella valmistettuun pastaan ja salaatteihin",
            "ru": "Хорошо сочетается с курицей-гриль, рыбой, пастой с лёгкими соусами и салатами",
            "de": "Passt gut zu gegrilltem Hähnchen, Fisch, Pasta mit leichten Saucen und Salaten"
          },
          "tags": []
        },
        {
          "name": "Ancyra Blush",
          "producer": "Kavaklıdere",
          "region": "Türkiye · Ankara / Orta Anadolu",
          "year": null,
          "grape": "Kalecik Karası, Çal Karası, Syrah",
          "icon": "🌸",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1850,
          "description": "Yoğun çilek, ahududu ve nektarin aromaları; çekici aromalarla iyi dengelenmiş, gevrek, yuvarlak ve kalıcı. Doğu Asya yemekleri, ızgara balık ve taze peynirlerle iyi uyum",
          "translations": {
            "en": "Intense with strawberry, raspberry and nectarine aromas; well balanced with charming aromas, crispy, round and persistent. East Asian foods, grilled fishes and fresh cheeses",
            "sv": "Intensivt med jordgubbs-, hallon- och nektarinaromer; välbalanserat med charmiga aromer, friskt, runt och ihållande",
            "no": "Intenst med jordbær-, bringebær- og nektarinaromaer; godt balansert med sjarmerende aromaer, sprøtt, rundt og vedvarende",
            "da": "Intenst med jordbær-, hindbær- og nektarinaromaer; velafbalanceret med charmerende aromaer, sprødt, rundt og vedvarende",
            "fi": "Voimakkaita mansikan, vadelman ja nektariinin aromeja; hyvin tasapainoinen, raikas, pyöreä ja pitkäkestoinen",
            "ru": "Насыщенное, ароматы клубники, малины и нектарина; хорошо сбалансированное, свежее, округлое, стойкое",
            "de": "Intensiv mit Erdbeer-, Himbeer- und Nektarinenaromen; gut ausbalanciert mit charmanten Aromen, knackig, rund und anhaltend"
          },
          "tags": []
        },
        {
          "name": "Lâl",
          "producer": "Doluca",
          "region": "Türkiye · Denizli-Ege",
          "year": null,
          "grape": "Çal Karası",
          "icon": "🌸",
          "image": "",
          "glassPrice": null,
          "bottlePrice": null,
          "description": "Çilek ve ahududu gibi taze kırmızı meyve aromaları, yoğun ve kalıcı, çok iyi dengeli ve canlı. Izgara balık ve tavuk, hafif baharatlı pizza ve makarnalarla iyi gider",
          "translations": {
            "en": "Pronounced with fresh red fruits like strawberry and raspberry; intense and persistent flavours, very well balanced and lively. Grilled fish and chicken, lightly spiced pizza and pastas",
            "sv": "Tydligt med färska röda frukter som jordgubbe och hallon; intensiv och ihållande smak, mycket välbalanserat och livfullt",
            "no": "Tydelig med friske røde frukter som jordbær og bringebær; intens og vedvarende smak, svært godt balansert og livfullt",
            "da": "Tydeligt med friske røde frugter som jordbær og hindbær; intens og vedvarende smag, meget velafbalanceret og livfuldt",
            "fi": "Selkeät tuoreiden punaisten hedelmien aromit, kuten mansikka ja vadelma; voimakas ja pitkäkestoinen, erittäin tasapainoinen ja eloisa",
            "ru": "Выраженные ароматы свежих красных фруктов — клубники и малины; насыщенный и стойкий вкус, очень сбалансированное и живое",
            "de": "Ausgeprägt mit frischen roten Früchten wie Erdbeere und Himbeere; intensiv und anhaltend, sehr gut ausbalanciert und lebhaft"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "sparklingWines",
      "name": {
        "tr": "Köpüklü Şaraplar",
        "en": "Sparkling Wines",
        "sv": "Mousserande viner",
        "no": "Musserende",
        "da": "Mousserende vine",
        "fi": "Kuohuviinit",
        "ru": "Игристые вина",
        "de": "Schaumweine"
      },
      "items": [
        {
          "name": "İnci Damlası — Smooth Bubble White",
          "producer": "Kavaklıdere",
          "region": "Türkiye",
          "year": null,
          "grape": "",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1900,
          "description": "Yumuşak köpüklü beyaz, ferahlatıcı ve hafif tatlı",
          "translations": {
            "en": "Smooth sparkling white, refreshing and slightly sweet",
            "sv": "Mjukt mousserande vitt, uppfriskande och lätt sött",
            "no": "Mykt musserende hvitt, forfriskende og lett søtt",
            "da": "Blødt mousserende hvidt, forfriskende og let sødt",
            "fi": "Pehmeä kuohuva valkoinen, raikas ja hieman makea",
            "ru": "Мягкое игристое белое, освежающее и слегка сладкое",
            "de": "Sanft prickelnder Weißwein, erfrischend und leicht süß"
          },
          "tags": []
        },
        {
          "name": "İnci Damlası Pembe — Smooth Bubble Pink",
          "producer": "Kavaklıdere",
          "region": "Türkiye",
          "year": null,
          "grape": "",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1900,
          "description": "Yumuşak köpüklü pembe, kırmızı meyveler",
          "translations": {
            "en": "Smooth sparkling pink, red fruits",
            "sv": "Mjukt mousserande rosé, röda frukter",
            "no": "Mykt musserende rosa, røde frukter",
            "da": "Blødt mousserende lyserødt, røde frugter",
            "fi": "Pehmeä kuohuva rosee, punaisia hedelmiä",
            "ru": "Мягкое розовое игристое, красные фрукты",
            "de": "Sanft prickelnder Rosé, rote Früchte"
          },
          "tags": []
        },
        {
          "name": "Henkel Trocken",
          "producer": "Henkel",
          "region": "Almanya",
          "year": null,
          "grape": "",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 3400,
          "description": "Alman köpüklüsü, kuru ve canlı",
          "translations": {
            "en": "German sparkling, dry and lively",
            "sv": "Tysk mousserande, torrt och livfullt",
            "no": "Tysk musserende, tørt og livlig",
            "da": "Tysk mousserende, tør og livlig",
            "fi": "Saksalainen kuohuviini, kuiva ja eloisa",
            "ru": "Немецкое игристое, сухое и живое",
            "de": "Deutscher Sekt, trocken und lebhaft"
          },
          "tags": []
        },
        {
          "name": "Henkel Trocken Rose",
          "producer": "Henkel",
          "region": "Almanya",
          "year": null,
          "grape": "",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 3400,
          "description": "Pembe Henkel köpüklüsü",
          "translations": {
            "en": "Pink Henkel sparkling",
            "sv": "Rosé Henkel mousserande",
            "no": "Rosa Henkel musserende",
            "da": "Lyserød Henkel mousserende",
            "fi": "Rosee-Henkel-kuohuviini",
            "ru": "Розовое игристое Henkel",
            "de": "Rosé Henkel Sekt"
          },
          "tags": []
        },
        {
          "name": "Prosecco La Tondera",
          "producer": "La Tondera",
          "region": "İtalya / Veneto",
          "year": null,
          "grape": "Glera",
          "icon": "🥂",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 3800,
          "description": "İtalyan Prosecco, narin köpük, çiçek ve elma notaları",
          "translations": {
            "en": "Italian Prosecco, fine bubbles, floral and apple notes",
            "sv": "Italiensk Prosecco, fina bubblor, blomster- och äppelnoter",
            "no": "Italiensk Prosecco, fine bobler, blomster- og eplenotater",
            "da": "Italiensk Prosecco, fine bobler, blomster- og æblenoter",
            "fi": "Italialainen Prosecco, hienot kuplat, kukkaisia ja omenaisia vivahteita",
            "ru": "Итальянское Просекко, тонкая перляж, цветочные и яблочные ноты",
            "de": "Italienischer Prosecco, feine Perlage, florale und Apfelnoten"
          },
          "tags": []
        }
      ]
    },
    {
      "id": "semiSweetWines",
      "name": {
        "tr": "Yarı Tatlı & Tatlı Şaraplar",
        "en": "Sweet & Semi-Sweet Wines",
        "sv": "Söta & halvsöta viner",
        "no": "Søte & halvsøte viner",
        "da": "Søde & halvsøde vine",
        "fi": "Makeat & puolimakeat viinit",
        "ru": "Сладкие и полусладкие вина",
        "de": "Süße & halbsüße Weine"
      },
      "items": [
        {
          "name": "Sultaniye Semi-Sweet White",
          "producer": "Doluca",
          "region": "Türkiye · Ege Kıyısı",
          "year": null,
          "grape": "Sultaniye",
          "icon": "🍯",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1600,
          "description": "Tropikal meyveler, ananas ve mango notaları, canlı; iyi asit-tatlılık dengesi",
          "translations": {
            "en": "Tropical fruits, pineapple and mango notes, lively; well-balanced acidity and sweetness",
            "sv": "Tropiska frukter, ananas- och mangotoner, livfullt; välbalanserad syra och sötma",
            "no": "Tropiske frukter, ananas- og mangonotater, livfullt; godt balansert syre og sødme",
            "da": "Tropiske frugter, ananas- og mangonoter, livfuldt; velafbalanceret syre og sødme",
            "fi": "Trooppisia hedelmiä, ananasta ja mangoa, eloisa; tasapainoinen happoisuus ja makeus",
            "ru": "Тропические фрукты, ноты ананаса и манго, живое; хорошо сбалансированная кислотность и сладость",
            "de": "Tropische Früchte, Ananas- und Mangonoten, lebhaft; ausgewogene Säure und Süße"
          },
          "tags": []
        },
        {
          "name": "Senfoni Sweet White Wine",
          "producer": "Doluca",
          "region": "Türkiye · Denizli",
          "year": null,
          "grape": "Sultaniye, Misket",
          "icon": "🍯",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1600,
          "description": "Narin, yuvarlak ve dengeli yoğun aromalar. 6-8 °C'de aperitif olarak veya meyve, pasta ve rokfor benzeri peynirlerle servis önerilir",
          "translations": {
            "en": "Intense flavours with delicate, round and balanced taste. Served at 6-8°C as an aperitif or with fruits, pastries and cheese like roquefort",
            "sv": "Intensiva smaker med delikat, rund och balanserad karaktär. Serveras vid 6-8 °C som aperitif eller till frukt, bakverk och ost som roquefort",
            "no": "Intense smaker med delikat, rundt og balansert preg. Serveres ved 6-8 °C som aperitif eller til frukt, bakverk og ost som roquefort",
            "da": "Intense smage med delikat, rund og balanceret karakter. Serveres ved 6-8 °C som aperitif eller til frugt, bagværk og ost som roquefort",
            "fi": "Voimakkaat aromit, herkkä, pyöreä ja tasapainoinen maku. Tarjoillaan 6-8 °C:ssa aperitiivina tai hedelmien, leivosten ja roquefortin kaltaisten juustojen kera",
            "ru": "Насыщенные ароматы, тонкий, округлый и сбалансированный вкус. Подаётся при 6-8 °C как аперитив или с фруктами, выпечкой и сырами типа рокфор",
            "de": "Intensive Aromen mit zartem, rundem und ausgewogenem Geschmack. Bei 6-8 °C als Aperitif oder zu Früchten, Gebäck und Käse wie Roquefort serviert"
          },
          "tags": []
        },
        {
          "name": "Rozella Semi-Sweet Rose Wine",
          "producer": "Doluca",
          "region": "Türkiye · Güney Denizli",
          "year": null,
          "grape": "Kalecik Karası, Cabernet Sauvignon",
          "icon": "🌸",
          "image": "",
          "glassPrice": null,
          "bottlePrice": 1600,
          "description": "Çilek ve ahududu aromaları, yoğun ve dengeli, hafif tatlı",
          "translations": {
            "en": "Strawberry and raspberry aromas, intense and balanced, slightly sweet",
            "sv": "Jordgubbs- och hallonaromer, intensivt och balanserat, lätt sött",
            "no": "Jordbær- og bringebæraromaer, intenst og balansert, lett søtt",
            "da": "Jordbær- og hindbæraromaer, intenst og balanceret, let sødt",
            "fi": "Mansikan ja vadelman aromit, voimakas ja tasapainoinen, hieman makea",
            "ru": "Ароматы клубники и малины, насыщенное и сбалансированное, слегка сладкое",
            "de": "Erdbeer- und Himbeeraromen, intensiv und ausgewogen, leicht süß"
          },
          "tags": []
        }
      ]
    }
  ]
};
