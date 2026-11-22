// Forticam – small progressive enhancements (the page works without JS)
(function () {
  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Add a focused local-team feature using an existing Forticam installation photo.
  // Replace this source with an approved original team photo when available.
  var contactSection = document.getElementById('contact');
  if (contactSection && !document.getElementById('team')) {
    var team = document.createElement('section');
    team.id = 'team';
    team.className = 'team section section--white';
    team.setAttribute('aria-labelledby', 'team-title');
    team.innerHTML = '<div class="container team__layout">' +
      '<figure class="team__photo"><img src="images/setup-handover.jpg" alt="Forticam technicians preparing a security system during installation" loading="lazy" decoding="async" width="464" height="240"><figcaption>Local installation team · Faridabad &amp; Gurgaon</figcaption></figure>' +
      '<div class="team__copy"><div class="eyebrow">People behind the protection</div><h2 id="team-title">A local team, from site visit to handover</h2><p class="lead">Meet with Forticam to plan camera positions, installation and setup around your property. Our team helps you understand the system and shows you how to use it before handover.</p><ul class="team__points"><li>On-site planning for your space</li><li>Installation and app setup</li><li>Clear handover and support contact</li></ul><a class="btn btn--accent" href="#contact">Talk to our team</a></div>' +
      '</div>';
    contactSection.parentNode.insertBefore(team, contactSection);
    var teamStyles = document.createElement('link');
    teamStyles.rel = 'stylesheet';
    teamStyles.href = 'team.css';
    document.head.appendChild(teamStyles);
  }

  // "Your space" tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.spaces__tab'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
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
        var caption = btn.querySelector('.photo__cap');
        if (!img || !caption) return;
        boxImg.src = btn.getAttribute('data-full');
        boxImg.alt = img.alt;
        boxCap.textContent = caption.textContent;
        box.showModal();
      });
    });
    var closeButton = box.querySelector('.lightbox__close');
    if (closeButton) closeButton.addEventListener('click', function () { box.close(); });
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
        if (status) {
          status.textContent = 'WhatsApp opened with your consultation details. Review the message and tap Send to submit your request.';
          status.setAttribute('data-state', 'ok');
        }
      } else {
        window.location.href = whatsappUrl;
      }
    });
  }
})();
