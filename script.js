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

  // Contact form: submit to Netlify Forms without leaving the page
  var form = document.getElementById('contact-form');
  if (form && window.fetch) {
    var status = form.querySelector('.form__status');
    var button = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      button.disabled = true;
      status.removeAttribute('data-state');
      status.textContent = 'Sending…';
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          form.reset();
          status.setAttribute('data-state', 'ok');
          status.textContent = 'Thank you! We have your request and will call you soon to arrange a site visit.';
        })
        .catch(function () {
          status.setAttribute('data-state', 'error');
          status.textContent = 'Sorry, that did not go through. Please call or WhatsApp us on 9217295528.';
        })
        .finally(function () { button.disabled = false; });
    });
  }
})();
