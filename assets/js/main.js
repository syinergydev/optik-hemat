/* ==========================================================
   OPTIK HEMAT — logika bersama
   ========================================================== */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var D = window.OH;
  var BIZ = D.business;
  var ICON = "https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/";
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HAS_GSAP = typeof window.gsap !== "undefined";
  var FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var DESKTOP = window.matchMedia("(min-width: 981px)").matches;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function waUrl(msg) { return "https://wa.me/" + BIZ.wa + "?text=" + encodeURIComponent(msg); }
  function rp(n) { return "Rp" + n.toLocaleString("id-ID"); }
  function imgPath(p, i) { return "assets/products/" + p.slug + "/" + String(i + 1).padStart(2, "0") + ".webp"; }
  function findProduct(slug) { return D.products.filter(function (p) { return p.slug === slug; })[0]; }
  function tierName(key) { return D.tiers.filter(function (t) { return t.key === key; })[0] || { label: key }; }

  /* ---------- Sosial & chrome ---------- */
  var SOCIALS = [
    { label: "WhatsApp", icon: "whatsapp", href: function () { return waUrl("Halo Optik Hemat, saya ingin bertanya mengenai kacamata."); } },
    { label: "Instagram", icon: "instagram", href: function () { return BIZ.instagram; } },
    { label: "Email", icon: "gmail", href: function () { return "mailto:" + BIZ.email; } },
    { label: "Google Maps", icon: "googlemaps", href: function () { return BIZ.maps; } }
  ];
  function socialRow(cls) {
    return '<div class="social-row ' + (cls || "") + '">' + SOCIALS.map(function (s) {
      var ext = s.icon === "gmail" ? "" : ' target="_blank" rel="noopener"';
      return '<a class="social-link magnetic" href="' + esc(s.href()) + '"' + ext + ' aria-label="' + esc(s.label) + ' Optik Hemat" title="' + esc(s.label) + '">' +
        '<img src="' + ICON + s.icon + '.svg" alt="" width="20" height="20"></a>';
    }).join("") + "</div>";
  }

  var NAV = [
    { href: "index.html", label: "Beranda", page: "home" },
    { href: "tentang.html", label: "Tentang Kami", page: "about" },
    { href: "katalog.html", label: "Katalog", page: "catalog" },
    { href: "layanan.html", label: "Layanan", page: "services" },
    { href: "promo.html", label: "Promo", page: "promo" },
    { href: "ulasan.html", label: "Ulasan", page: "reviews" },
    { href: "kontak.html", label: "Kontak", page: "contact" }
  ];

  function renderHeader(page) {
    var host = $("#chrome-header"); if (!host) return;
    var links = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (n.page === page ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a></li>";
    }).join("");
    host.outerHTML =
      '<header class="site-header" id="siteHeader">' +
        '<a href="index.html" class="brand" aria-label="Optik Hemat — Beranda"><img src="assets/img/logo-light.png" alt="Optik Hemat" width="150" height="36"></a>' +
        '<nav aria-label="Navigasi utama"><ul class="nav-links">' + links + "</ul></nav>" +
        '<div class="header-social">' + socialRow("header-icons") + "</div>" +
        '<div class="nav-cta">' +
          '<a class="btn btn-sage btn-sm btn-desk magnetic" href="' + esc(waUrl("Halo Optik Hemat, saya ingin konsultasi.")) + '" target="_blank" rel="noopener">Konsultasi</a>' +
          '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Buka menu"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</header>" +
      '<div class="mobile-menu" id="mobileMenu" aria-hidden="true">' +
        NAV.map(function (n) { return '<a class="mm-link" href="' + n.href + '">' + esc(n.label) + "</a>"; }).join("") +
        socialRow() +
      "</div>";
  }

  function renderFooter() {
    var host = $("#chrome-footer"); if (!host) return;
    host.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-brand"><img src="assets/img/logo-light.png" alt="Optik Hemat" width="180" height="56"><p>' + esc(BIZ.tagline) + ". Pilihan kacamata beragam untuk gaya dan kebutuhan Anda.</p></div>" +
            "<div><h4>Halaman</h4><ul>" +
              '<li><a href="index.html">Beranda</a></li><li><a href="tentang.html">Tentang Kami</a></li>' +
              '<li><a href="katalog.html">Katalog</a></li><li><a href="layanan.html">Layanan</a></li>' +
              '<li><a href="promo.html">Promo</a></li><li><a href="ulasan.html">Ulasan</a></li><li><a href="kontak.html">Kontak</a></li></ul></div>' +
            "<div><h4>Kontak</h4><ul>" +
              '<li><a href="' + esc(waUrl("Halo Optik Hemat, saya ingin bertanya.")) + '" target="_blank" rel="noopener">WhatsApp ' + esc(BIZ.waDisplay) + "</a></li>" +
              '<li><a href="mailto:' + esc(BIZ.email) + '">' + esc(BIZ.email) + "</a></li>" +
              '<li><a href="' + BIZ.instagram + '" target="_blank" rel="noopener">Instagram ' + esc(BIZ.instagramHandle) + "</a></li>" +
              "<li>" + esc(BIZ.address) + "</li><li>Jam buka: " + esc(BIZ.hours) + "</li></ul></div>" +
          "</div>" +
          '<div class="mt-lg">' + socialRow() + "</div>" +
          '<div class="footer-bottom"><span>© 2026 Optik Hemat. All Rights Reserved.</span></div>' +
        "</div>" +
      "</footer>" +
      '<a class="wa-float magnetic" href="' + esc(waUrl("Halo Optik Hemat, saya ingin konsultasi.")) + '" target="_blank" rel="noopener" aria-label="Chat WhatsApp Optik Hemat">' +
        '<img src="' + ICON + 'whatsapp.svg" alt="" width="30" height="30"><span class="tip">Chat kami di WhatsApp</span></a>' +
      '<div class="modal" id="quickModal" role="dialog" aria-modal="true"><div class="modal-box" id="qmBox"></div></div>' +
      '<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Galeri foto"></div>';
  }

  function fillLinks() {
    var map = {
      wa: function () { return waUrl("Halo Optik Hemat, saya ingin bertanya."); },
      maps: function () { return BIZ.maps; },
      ig: function () { return BIZ.instagram; },
      email: function () { return "mailto:" + BIZ.email; }
    };
    $$("[data-fill]").forEach(function (el) {
      var k = el.getAttribute("data-fill");
      if (map[k]) el.setAttribute("href", map[k]());
      if (k === "phone") { el.textContent = BIZ.waDisplay; el.setAttribute("href", map.wa()); }
      if (k === "address") el.textContent = BIZ.address;
      if (k === "hours") el.textContent = BIZ.hours;
      if (k === "mapsEmbed") el.setAttribute("src", BIZ.mapsEmbed);
      if (k === "rating") el.textContent = BIZ.rating;
      if (k === "reviews") el.textContent = BIZ.reviewCount;
      if (k === "ig-handle") el.textContent = BIZ.instagramHandle;
    });
  }

  function setupHeader() {
    var header = $("#siteHeader"), btn = $(".menu-btn"), menu = $("#mobileMenu");
    if (!header || !btn || !menu) return;
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    function setMenu(open) {
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      menu.classList.toggle("open", open);
      menu.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("nav-open", open);
      if (open && HAS_GSAP && !REDUCED) {
        gsap.fromTo($$(".mm-link, .mobile-menu .social-row", menu), { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.6, ease: "power3.out", delay: 0.25 });
      }
    }
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    $$(".mm-link", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }

  /* ---------- Transisi halaman ---------- */
  function setupVeil() {
    var veil = document.createElement("div");
    veil.className = "page-veil";
    document.body.appendChild(veil);
    if (!HAS_GSAP || REDUCED) { veil.style.display = "none"; return; }
    gsap.fromTo(veil, { scaleY: 1 }, { scaleY: 0, duration: 0.9, ease: "power4.inOut" });
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a || !a.href || a.target === "_blank" || a.hasAttribute("download")) return;
      if (a.protocol !== "http:" && a.protocol !== "https:") return;
      if (a.origin !== window.location.origin) return;
      if (a.pathname === window.location.pathname && a.search === window.location.search && a.hash) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      gsap.to(veil, { scaleY: 1, duration: 0.5, ease: "power3.inOut", transformOrigin: "bottom",
        onComplete: function () { window.location.href = a.href; } });
    });
    window.addEventListener("pageshow", function (ev) { if (ev.persisted) veil.style.display = "none"; });
  }

  function setupReveal() {
    var els = $$(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || REDUCED) { els.forEach(function (el) { el.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  function setupMagnetic() {
    if (!FINE || REDUCED || !HAS_GSAP) return;
    $$(".magnetic").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - (r.left + r.width / 2)) * 0.2, y: (e.clientY - (r.top + r.height / 2)) * 0.25, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", function () { gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }); });
    });
  }

  /* ---------- Lightbox ---------- */
  var LB = { list: [], i: 0 };
  function lbRender() {
    var lb = $("#lightbox"); if (!lb || !LB.list.length) return;
    var item = LB.list[LB.i];
    lb.innerHTML =
      '<button class="lb-btn lb-close" type="button" aria-label="Tutup galeri">✕</button>' +
      (LB.list.length > 1 ? '<button class="lb-btn lb-prev" type="button" aria-label="Foto sebelumnya">‹</button><button class="lb-btn lb-next" type="button" aria-label="Foto berikutnya">›</button>' : "") +
      '<img src="' + esc(item.src) + '" alt="' + esc(item.alt) + '">' +
      '<div class="lb-cap">' + esc(item.alt) + " — " + (LB.i + 1) + " / " + LB.list.length + "</div>";
    $(".lb-close", lb).onclick = lbClose;
    var pv = $(".lb-prev", lb), nx = $(".lb-next", lb);
    if (pv) pv.onclick = function () { LB.i = (LB.i - 1 + LB.list.length) % LB.list.length; lbRender(); };
    if (nx) nx.onclick = function () { LB.i = (LB.i + 1) % LB.list.length; lbRender(); };
    lb.onclick = function (e) { if (e.target === lb) lbClose(); };
  }
  function lbOpen(list, i) {
    LB.list = list; LB.i = i || 0;
    var lb = $("#lightbox"); if (!lb) return;
    lbRender(); lb.classList.add("open"); document.body.classList.add("nav-open");
  }
  function lbClose() {
    var lb = $("#lightbox"); if (!lb) return;
    lb.classList.remove("open"); document.body.classList.remove("nav-open");
  }
  document.addEventListener("keydown", function (e) {
    var lb = $("#lightbox"); if (!lb || !lb.classList.contains("open")) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowRight" && LB.list.length > 1) { LB.i = (LB.i + 1) % LB.list.length; lbRender(); }
    if (e.key === "ArrowLeft" && LB.list.length > 1) { LB.i = (LB.i - 1 + LB.list.length) % LB.list.length; lbRender(); }
  });

  /* ---------- Kartu produk ---------- */
  function cardHtml(p, opts) {
    opts = opts || {};
    var alt = p.img > 1 ? '<img class="alt" src="' + imgPath(p, 1) + '" alt="" loading="lazy">' : "";
    var quick = opts.quick ? '<button class="quick" type="button" data-quick="' + p.slug + '">Lihat Cepat</button>' : "";
    return '<article class="p-card reveal">' +
      '<span class="tag">' + esc(tierName(p.tier).label) + "</span>" +
      '<a class="media" href="produk.html?p=' + p.slug + '" aria-label="Lihat detail ' + esc(p.name) + '">' +
        '<img class="main" src="' + imgPath(p, 0) + '" alt="' + esc(p.name) + '" loading="lazy">' + alt + "</a>" + quick +
      '<div class="info">' +
        '<h3><a href="produk.html?p=' + p.slug + '">' + esc(p.name) + "</a></h3>" +
        '<p class="meta">' + esc(p.short) + "</p>" +
        '<p class="price">' + rp(p.price) + "</p>" +
        '<div class="actions">' +
          '<a class="btn btn-primary btn-sm" href="produk.html?p=' + p.slug + '">Detail</a>' +
          '<a class="btn btn-ghost btn-sm" href="' + esc(waUrl("Halo Optik Hemat, saya tertarik dengan " + p.name + " (" + rp(p.price) + "). Boleh minta informasi lebih lanjut mengenai pilihan frame dan spesifikasinya?")) + '" target="_blank" rel="noopener">Tanya Produk</a>' +
        "</div></div></article>";
  }

  function openQuick(slug) {
    var p = findProduct(slug); if (!p) return;
    var box = $("#qmBox");
    box.innerHTML = '<button class="modal-close" type="button" aria-label="Tutup">✕</button>' +
      '<div class="m-img"><img src="' + imgPath(p, 0) + '" alt="' + esc(p.name) + '"></div>' +
      '<div class="m-info"><span class="eyebrow">' + esc(p.tier === "clip" ? "One Clip" : "Paket Hemat") + "</span>" +
        "<h3>" + esc(p.name) + "</h3><p>" + esc(p.desc) + "</p>" +
        '<p class="price" style="font-size:26px;font-weight:700;color:var(--forest)">' + rp(p.price) + "</p>" +
        '<div class="btn-row"><a class="btn btn-primary" href="' + esc(waUrl("Halo Optik Hemat, saya tertarik dengan " + p.name + ". Mohon informasinya.")) + '" target="_blank" rel="noopener">Pesan via WhatsApp</a>' +
        '<a class="btn btn-ghost" href="produk.html?p=' + p.slug + '">Lihat detail</a></div></div>';
    $("#quickModal").classList.add("open"); document.body.classList.add("nav-open");
    $(".modal-close", box).onclick = closeQuick;
  }
  function closeQuick() {
    var m = $("#quickModal"); if (!m) return;
    m.classList.remove("open"); document.body.classList.remove("nav-open");
  }

  /* ---------- Katalog ---------- */
  function initCatalog() {
    var grid = $("#productGrid"); if (!grid) return;
    var chips = $("#tierChips"), search = $("#search"), count = $("#resultCount");
    var params = new URLSearchParams(window.location.search);
    var state = { tier: params.get("harga") || "all", q: params.get("q") || "" };
    search.value = state.q;

    chips.innerHTML = '<button class="chip" type="button" data-tier="all">Semua</button>' +
      D.tiers.map(function (t) { return '<button class="chip" type="button" data-tier="' + t.key + '">' + esc(t.label) + "</button>"; }).join("");

    function render() {
      var q = state.q.trim().toLowerCase();
      var list = D.products.filter(function (p) {
        if (state.tier !== "all" && p.tier !== state.tier) return false;
        if (q && (p.name + " " + p.short + " " + p.desc + " " + p.spec.join(" ")).toLowerCase().indexOf(q) === -1) return false;
        return true;
      });
      grid.innerHTML = list.length ? list.map(function (p) { return cardHtml(p, { quick: true }); }).join("")
        : '<div class="empty-state"><p>Produk tidak ditemukan untuk pencarian ini.</p><button class="btn btn-primary btn-sm" type="button" id="resetBtn">Reset filter</button></div>';
      count.textContent = list.length + " produk ditampilkan";
      $$("[data-tier]", chips).forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-tier") === state.tier)); });
      $$("[data-quick]", grid).forEach(function (b) { b.addEventListener("click", function () { openQuick(b.getAttribute("data-quick")); }); });
      var rb = $("#resetBtn"); if (rb) rb.onclick = function () { state = { tier: "all", q: "" }; search.value = ""; render(); };
      setupReveal();
      if (HAS_GSAP && !REDUCED) gsap.fromTo(grid.children, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .05, ease: "power3.out", clearProps: "transform" });
    }
    chips.addEventListener("click", function (e) { var b = e.target.closest(".chip"); if (b) { state.tier = b.getAttribute("data-tier"); render(); } });
    search.addEventListener("input", function () { state.q = search.value; render(); });
    render();
  }

  /* ---------- Detail produk ---------- */
  function initProduct() {
    var host = $("#productApp"); if (!host) return;
    var slug = new URLSearchParams(window.location.search).get("p");
    var p = findProduct(slug);
    if (!p) {
      host.innerHTML = '<div class="container center" style="padding:170px 0 120px"><span class="eyebrow">Produk tidak ditemukan</span><h1 style="margin-top:18px">Produk tidak ada</h1><p class="lead" style="margin:20px auto 30px">Silakan pilih produk dari katalog kami.</p><a class="btn btn-primary" href="katalog.html">Ke Katalog</a></div>';
      return;
    }
    document.title = p.name + " — Optik Hemat Sidoarjo";
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", p.short + " " + p.desc.slice(0, 120));
    var idx = D.products.indexOf(p);
    var photos = []; for (var i = 0; i < p.img; i++) photos.push(i);
    var msgOrder = "Halo Optik Hemat, saya tertarik dengan " + p.name + " (" + rp(p.price) + "). Boleh minta informasi lebih lanjut mengenai pilihan frame dan spesifikasinya?";
    var related = D.products.filter(function (x) { return x.slug !== p.slug; }).slice(0, 3);

    host.innerHTML =
      '<div class="container pd-wrap">' +
        '<div class="pd-gallery">' +
          '<div class="pd-main" id="pdMain" role="button" tabindex="0" aria-label="Perbesar foto"><img id="pdImg" src="' + imgPath(p, 0) + '" alt="' + esc(p.name) + '"></div>' +
          (p.img > 1 ? '<div class="pd-thumbs" id="pdThumbs">' + photos.map(function (k) {
            return '<button type="button" data-i="' + k + '" aria-current="' + (k === 0) + '" aria-label="Foto ' + (k + 1) + '"><img src="' + imgPath(p, k) + '" alt="" loading="lazy"></button>';
          }).join("") + "</div>" : "") +
        "</div>" +
        '<div class="pd-info">' +
          '<span class="eyebrow">' + esc(p.tier === "clip" ? "One Clip" : "Paket Hemat") + "</span>" +
          "<h1>" + esc(p.name) + "</h1>" +
          '<p class="pd-price">' + rp(p.price) + "</p>" +
          '<p class="desc">' + esc(p.desc) + "</p>" +
          '<ul class="spec-list" aria-label="Spesifikasi">' + p.spec.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" +
          '<div class="pd-cta">' +
            '<a class="btn btn-primary" href="' + esc(waUrl(msgOrder)) + '" target="_blank" rel="noopener">Pesan via WhatsApp <span class="arrow">→</span></a>' +
            '<a class="btn btn-ghost" href="' + esc(waUrl("Halo Optik Hemat, saya ingin bertanya mengenai " + p.name + ". Apakah masih tersedia?")) + '" target="_blank" rel="noopener">Tanya Produk</a>' +
            '<a class="btn btn-ghost" href="katalog.html">Kembali ke Katalog</a>' +
          "</div>" +
          '<p class="pd-note">Harga dan ketersediaan dapat berubah. Pastikan kembali melalui WhatsApp sebelum memesan.</p>' +
        "</div>" +
      "</div>" +
      '<section class="section" style="padding-top:40px"><div class="container">' +
        '<div class="section-head reveal"><span class="eyebrow">Pilihan lainnya</span><h2>Mungkin Anda juga suka</h2></div>' +
        '<div class="catalog-grid" id="relatedGrid"></div>' +
        '<div class="center mt-lg"><a class="btn btn-primary" href="katalog.html">Lihat Semua Produk</a></div>' +
      "</div></section>";

    var mainImg = $("#pdImg");
    var thumbs = $("#pdThumbs");
    var cur = 0;
    function show(k) {
      cur = k; mainImg.classList.add("swap");
      setTimeout(function () { mainImg.src = imgPath(p, k); mainImg.classList.remove("swap"); }, 180);
      $$("#pdThumbs button").forEach(function (b, j) { b.setAttribute("aria-current", String(j === k)); });
    }
    if (thumbs) thumbs.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) show(Number(b.getAttribute("data-i"))); });
    function openMain() { lbOpen(photos.map(function (k) { return { src: imgPath(p, k), alt: p.name + " — foto " + (k + 1) }; }), cur); }
    $("#pdMain").addEventListener("click", openMain);
    $("#pdMain").addEventListener("keydown", function (e) { if (e.key === "Enter") openMain(); });

    $("#relatedGrid").innerHTML = related.map(function (x) { return cardHtml(x, {}); }).join("");
    setupReveal();
    if (HAS_GSAP && !REDUCED) {
      gsap.fromTo(".pd-gallery", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
      gsap.fromTo(".pd-info > *", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .8, stagger: .07, ease: "power3.out", delay: .15 });
    }
    void idx;
  }

  /* ---------- Video toko ---------- */
  function initVideo() {
    var v = $("#storeVideo"); if (!v) return;
    var overlay = $("#vOverlay"), bPlay = $("#vPlay"), bMute = $("#vMute"), bRestart = $("#vRestart");
    function toggle() { if (v.paused) v.play(); else v.pause(); }
    function sync() {
      overlay.classList.toggle("hidden", !v.paused);
      bPlay.textContent = v.paused ? "▶ Putar" : "❚❚ Jeda";
      bMute.textContent = v.muted ? "🔇 Suara mati" : "🔊 Suara aktif";
    }
    overlay.addEventListener("click", toggle);
    v.addEventListener("click", toggle);
    v.addEventListener("play", sync); v.addEventListener("pause", sync); v.addEventListener("ended", sync);
    bPlay.addEventListener("click", toggle);
    bMute.addEventListener("click", function () { v.muted = !v.muted; sync(); });
    bRestart.addEventListener("click", function () { v.currentTime = 0; v.play(); });
    sync();
  }

  /* ---------- Ulasan (carousel) ---------- */
  function setupQuotes() {
    var stage = $("#quoteStage"); if (!stage) return;
    var items = D.reviews, idx = 0, timer;
    stage.innerHTML = items.map(function (t, i) {
      return '<figure class="quote' + (i === 0 ? " on" : "") + '"><div class="stars" aria-label="Rating 5 dari 5">' +
        '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.5l-6 3.4 1.3-6.7-5-4.7 6.8-.8z"/></svg>'.repeat(5) +
        "</div><blockquote>“" + esc(t.text) + "”</blockquote><cite>" + esc(t.by) + "</cite></figure>";
    }).join("");
    var count = $("#quoteCount");
    function show(i) {
      idx = (i + items.length) % items.length;
      $$(".quote", stage).forEach(function (q, k) { q.classList.toggle("on", k === idx); });
      if (count) count.textContent = String(idx + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
    }
    function reset() { clearInterval(timer); if (!REDUCED) timer = setInterval(function () { show(idx + 1); }, 7000); }
    $("#qPrev").onclick = function () { show(idx - 1); reset(); };
    $("#qNext").onclick = function () { show(idx + 1); reset(); };
    stage.addEventListener("mouseenter", function () { clearInterval(timer); });
    stage.addEventListener("mouseleave", reset);
    show(0); reset();
  }

  /* ---------- Beranda: motion ---------- */
  function initHome() {
    setupQuotes();
    var track = $(".showcase-track");
    if (!HAS_GSAP || REDUCED) {
      var w0 = $(".showcase-wrap"); if (w0) w0.classList.add("mobile-scroll");
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".hero-banner", { clipPath: "inset(12% 8% 12% 8% round 28px)", opacity: .4 },
      { clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1, duration: 1.4, ease: "power4.inOut", delay: .25 });
    gsap.fromTo(".hero-banner img", { scale: 1.12 }, { scale: 1.02, duration: 2.2, ease: "power3.out" });
    gsap.fromTo(".hero-text > *", { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .9, stagger: .12, ease: "power3.out", delay: .6 });

    gsap.to(".about-split figure:nth-child(1) img", { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".about-split", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.to(".about-split figure:nth-child(2) img", { yPercent: -8, ease: "none", scrollTrigger: { trigger: ".about-split", start: "top bottom", end: "bottom top", scrub: true } });

    if (track && DESKTOP) {
      var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
      gsap.to(track, {
        x: function () { return -dist(); }, ease: "none",
        scrollTrigger: { trigger: ".showcase-pin", start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 }
      });
    } else {
      var w = $(".showcase-wrap"); if (w) w.classList.add("mobile-scroll");
    }

    ScrollTrigger.batch(".bento .tile", {
      start: "top 88%", once: true,
      onEnter: function (els) { gsap.fromTo(els, { opacity: 0, y: 40, scale: .97 }, { opacity: 1, y: 0, scale: 1, duration: .9, stagger: .12, ease: "power3.out" }); }
    });
    ScrollTrigger.batch(".feature", {
      start: "top 90%", once: true,
      onEnter: function (els) { gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .8, stagger: .1, ease: "power3.out" }); }
    });
    gsap.fromTo(".video-frame", { clipPath: "inset(18% 18% 18% 18% round 26px)" },
      { clipPath: "inset(0% 0% 0% 0% round 26px)", duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".video-frame", start: "top 82%", once: true } });
    gsap.from(".cta-band .btn", { opacity: 0, y: 20, stagger: .1, duration: .8, ease: "power3.out", scrollTrigger: { trigger: ".cta-band", start: "top 80%", once: true } });
    setupReveal();
  }

  /* ---------- Boot ---------- */
  function boot() {
    var page = document.body.getAttribute("data-page") || "";
    renderHeader(page);
    renderFooter();
    fillLinks();
    var sh = $("#socialHost"); if (sh) sh.innerHTML = socialRow();
    setupHeader();
    setupVeil();
    setupMagnetic();
    setupReveal();
    initCatalog();
    initProduct();
    initVideo();
    if (page === "home") initHome();
    else if (HAS_GSAP && !REDUCED) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(".page-hero .eyebrow, .page-hero h1, .page-hero .lead", { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 1, stagger: .12, ease: "power3.out", delay: .2 });
    }
  }

  /* Pengaman: jika salah satu bagian error, situs tetap tampil */
  setTimeout(function () { var v = $(".page-veil"); if (v && !HAS_GSAP) v.remove(); }, 4000);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.OHUI = { waUrl: waUrl, lbOpen: lbOpen };
})();
