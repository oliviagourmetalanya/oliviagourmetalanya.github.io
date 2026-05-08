/* ============================================
   Restoran ayarları — buradan kolayca düzenleyin
   ============================================ */

window.CONFIG = {
  // Restoran adı (alt başlık olarak da kullanılır)
  name: "Olivia",
  tagline: "Gourmet Restaurant",

  // Wi-Fi bilgisi (boş bırakırsanız Wi-Fi kartı gizlenir)
  wifi: {
    ssid: "Olivia_Guest",
    password: "olivia2025"
  },

  // Para birimi sembolü (sadece TL)
  currency: "₺",
  // Sembol fiyatın önünde mi (true) arkasında mı (false) gözüksün
  currencyBefore: false,

  // Sosyal medya — kullanılmayanları silebilir veya yeni satır ekleyebilirsiniz
  // Desteklenen tipler: instagram, facebook, twitter, tiktok, youtube,
  //                     tripadvisor, googlemaps, whatsapp, phone, email, website
  social: [
    { type: "instagram",   url: "https://instagram.com/oliviagourmet" },
    { type: "facebook",    url: "https://facebook.com/oliviagourmet" },
    { type: "tripadvisor", url: "https://www.tripadvisor.com/" },
    { type: "googlemaps",  url: "https://maps.google.com/" },
    { type: "whatsapp",    url: "https://wa.me/905551234567" },
    { type: "phone",       url: "tel:+905551234567" }
  ],

  // Varsayılan dil — kullanıcı cihaz dili desteklenmiyorsa bu dile düşer
  defaultLang: "en",

  // Yazıldığında menüdeki orijinal dil
  sourceLang: "tr"
};
