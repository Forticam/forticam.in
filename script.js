// Forticam – small progressive enhancements (the page works without JS)
(function () {
  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // "Your space" tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.spaces__tab'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); select(next); next.focus(); }
    });
  });

  // Gallery lightbox
  var box = document.getElementById('lightbox');
  if (box && typeof box.showModal === 'function') {
    var boxImg = box.querySelector('img');
    var boxCap = box.querySelector('p');
    document.querySelectorAll('.photo').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        boxImg.src = btn.getAttribute('data-full');
        boxImg.alt = img.alt;
        boxCap.textContent = btn.querySelector('.photo__cap').textContent;
        box.showModal();
      });
    });
    box.querySelector('.lightbox__close').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  }

  // Prepare a WhatsApp consultation message from the site-visit form.
  var form = document.getElementById('contact-form');
  if (form) {
    var status = form.querySelector('.form__status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var message = [
        'Hi Forticam, I would like to request a site visit.',
        '',
        'Name: ' + data.get('name'),
        'Phone: ' + data.get('phone'),
        'Email: ' + (data.get('email') || 'Not provided'),
        'Property: ' + data.get('property'),
        'Location: ' + data.get('location'),
        'Interested in: ' + data.get('service'),
        'Message: ' + (data.get('message') || 'Not provided')
      ].join('\n');
      var whatsappUrl = 'https://wa.me/919217295528?text=' + encodeURIComponent(message);
      var whatsappWindow = window.open(whatsappUrl, '_blank');

      if (whatsappWindow) {
        whatsappWindow.opener = null;
        status.textContent = 'WhatsApp opened with your consultation details. Review the message and tap Send to submit your request.';
      } else {
        window.location.href = whatsappUrl;
      }
      status.setAttribute('data-state', 'ok');
    });
  }
})();


// Polish: reveal-on-scroll, live "years" counter, offline/fast-load cache
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  document.querySelectorAll('[data-years-since]').forEach(function (el) {
    var since = parseInt(el.getAttribute('data-years-since'), 10);
    if (since) el.textContent = String(new Date().getFullYear() - since);
  });

  var targets = document.querySelectorAll('.section-head, .card, .product, .step, .photo, .office, .faq details, .why__item, .stat, .cta__inner');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
