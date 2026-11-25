/*
 * OPTIK HEMAT SIDOARJO — sumber data terpusat.
 * Harga & spesifikasi diambil dari listing resmi klien (screenshot marketplace).
 * Ubah di sini saja bila ada perubahan.
 */
window.OH = {
  business: {
    name: "OPTIK HEMAT",
    city: "Sidoarjo",
    tagline: "Kacamata Berkualitas, Harga Bersahabat",
    wa: "6289602006000",
    waDisplay: "0896-0200-6000",
    email: "optikhematsidoarjo@gmail.com",
    instagram: "https://www.instagram.com/optikhematsidoarjo",
    instagramHandle: "@optikhematsidoarjo",
    maps: "https://maps.app.goo.gl/GU3YtkRrFwLyYpwU9",
    mapsEmbed: "https://www.google.com/maps?q=" + encodeURIComponent("Heavenland Park Cluster Aragorn, Jalan Lingkar Timur No.14, Sawah, Kebonsari, Kecamatan Candi, Sidoarjo, Jawa Timur 61271") + "&output=embed",
    address: "Heavenland Park Cluster Aragorn, Jalan Lingkar Timur No.14, Sawah, Kebonsari, Kecamatan Candi, Kabupaten Sidoarjo, Jawa Timur 61271, Indonesia",
    hours: "Setiap hari, 08.00–20.00 WIB",
    rating: "5,0",
    reviewCount: 114
  },

  /* Kategori harga (filter katalog & promo) */
  tiers: [
    { key: "99", label: "Rp99.000" },
    { key: "149", label: "Rp149.000" },
    { key: "199", label: "Rp199.000" },
    { key: "249", label: "Rp249.000" },
    { key: "299", label: "Rp299.000" },
    { key: "clip", label: "One Clip" }
  ],

  /* Produk / paket. img = jumlah foto di folder assets/products/<slug>/ */
  products: [
    {
      slug: "paket-99", tier: "99", price: 99000, img: 18,
      name: "Paket Hemat Kacamata",
      short: "Paket hemat dengan frame dan lensa antiradiasi.",
      spec: ["Frame & lensa antiradiasi supersin", "Maksimal minus -4", "Cylinder -2"],
      desc: "Paket kacamata hemat berisi frame dan lensa antiradiasi supersin. Cocok untuk pemakaian harian dengan harga yang bersahabat.",
      featured: true
    },
    {
      slug: "paket-149", tier: "149", price: 149000, img: 20,
      name: "Paket Hemat Kacamata",
      short: "Frame pilihan dengan lensa antiradiasi supersin.",
      spec: ["Frame & lensa antiradiasi supersin", "Maksimal minus -4", "Cylinder -2"],
      desc: "Paket kacamata dengan pilihan frame yang beragam dan lensa antiradiasi supersin. Pilih model yang sesuai gaya Anda.",
      featured: true
    },
    {
      slug: "paket-199", tier: "199", price: 199000, img: 7,
      name: "Paket Hemat Kacamata",
      short: "Paket kacamata dengan lensa antiradiasi supersin.",
      spec: ["Frame & lensa antiradiasi supersin", "Maksimal minus -4", "Cylinder -2"],
      desc: "Paket kacamata dengan frame dan lensa antiradiasi supersin, sesuai informasi pada listing resmi kami.",
      featured: true
    },
    {
      slug: "paket-249", tier: "249", price: 249000, img: 18,
      name: "Paket Hemat Kacamata",
      short: "Paket kacamata dengan pilihan frame lebih lengkap.",
      spec: ["Frame & lensa antiradiasi supersin", "Maksimal minus -4", "Cylinder -2"],
      desc: "Paket kacamata dengan frame dan lensa antiradiasi supersin. Banyak pilihan model dan warna frame.",
      featured: true
    },
    {
      slug: "paket-299", tier: "299", price: 299000, img: 11,
      name: "Paket Hemat Kacamata",
      short: "Paket kacamata hemat dengan pilihan frame beragam.",
      spec: ["Maksimal minus -4", "Cylinder -2"],
      desc: "Paket kacamata hemat dengan pilihan frame beragam. Konfirmasi detail lensa lewat WhatsApp sebelum memesan.",
      featured: true
    },
    {
      slug: "kacamata-clip-on", tier: "clip", price: 299000, img: 6,
      name: "Kacamata One Clip",
      short: "Kacamata clip on dengan dua lensa, kuning dan hitam.",
      spec: ["Clip on dengan 2 lensa: kuning & hitam", "Frame dapat dipasang pada kacamata"],
      desc: "Kacamata clip on yang dilengkapi dua lensa, kuning dan hitam. Praktis untuk dipakai di dalam maupun di luar ruangan.",
      featured: false
    }
  ],

  /* Layanan (dari materi promosi dan ulasan pelanggan) */
  services: [
    { title: "Penjualan Frame & Kacamata", text: "Pilihan frame dengan beragam model, dari klasik hingga trendi.", img: "paket-149/01.webp" },
    { title: "Lensa Antiradiasi", text: "Lensa antiradiasi supersin, tercantum pada paket kami. Detail lensa dikonfirmasi sebelum memesan.", img: "paket-249/01.webp" },
    { title: "Setel & Bersihkan Gratis", text: "Pelanggan dapat menyetel dan membersihkan kacamata secara gratis di toko.", img: "paket-99/01.webp" },
    { title: "Pemeriksaan Mata", text: "Layanan pemeriksaan mata tercantum pada informasi toko kami. Jadwal dan ketersediaannya dikonfirmasi lewat WhatsApp.", img: "paket-199/01.webp" },
    { title: "Kacamata Clip On", text: "Clip on dengan dua lensa, kuning dan hitam, untuk kebutuhan pakai harian yang fleksibel.", img: "kacamata-clip-on/01.webp" },
    { title: "Konsultasi Pilihan Frame", text: "Tim kami membantu memilih frame dan lensa yang sesuai dengan kebutuhan Anda.", img: "paket-249/05.webp" }
  ],

  /* Ulasan — kutipan disalin dari screenshot ulasan Google (tanpa nama pelanggan).
     Informasi kesehatan pribadi dalam ulasan sengaja tidak ditampilkan. */
  reviews: [
    { text: "Rekomen bgt beli kacamata disini, pelayanan sgt ramah, jelasinnya juga pelan2 dan detail bgt, telaten, dan sabar nungguin kita milih kacamata.", by: "Pelanggan Google" },
    { text: "Rekom orangnya ramah, harg terjangkau, periksa mata dikasih penjelasan yg detail.", by: "Pelanggan Google" },
    { text: "Alhamdulillah untuk pelayanannya baik dan sangat memuaskan intinya bagus rekomended.", by: "Pelanggan Google" },
    { text: "Harganya bener2 hemat, aku pakai lensa yang sudah lengkap dengan fitur photochromic, blueray, anti silau, anti gores... bisa setel dan bersihkan kacamata gratis disini.", by: "Pelanggan Google" },
    { text: "Barusan bikin kacamata di optik hemat, dan aku sangat merekomendasikan tempat ini.", by: "Pelanggan Google" }
  ]
};
