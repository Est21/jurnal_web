// Tema, kaydırma ve görünüm animasyonu. Ağ isteği yok; tercih yalnızca localStorage'da.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('jurnal.theme'); } catch (e) {}
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme');
      if (!cur) cur = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('jurnal.theme', next); } catch (e) {}
    });
  }

  var bar = document.querySelector('.bar');
  if (bar) {
    var onScroll = function () { bar.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  // Ekran görüntüsü henüz yoksa yer tutucu kalsın
  document.querySelectorAll('.shot img').forEach(function (img) {
    var miss = function () { img.classList.add('missing'); };
    if (img.complete && img.naturalWidth === 0) miss();
    img.addEventListener('error', miss);
  });

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
