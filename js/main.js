(function () {
  'use strict';

  var navCheck = document.getElementById('nav-check');
  var navBackdrop = document.getElementById('nav-backdrop');
  var navLinks = document.querySelectorAll('.nav__link');

  /* Aktif sayfa linki */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === '') path = 'index.html';

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === 'index.html' && href === './')) {
      link.classList.add('active');
    }
  });

  function closeMenu() {
    if (navCheck) navCheck.checked = false;
    document.body.classList.remove('menu-open');
  }

  function openMenu() {
    document.body.classList.add('menu-open');
  }

  if (navCheck) {
    navCheck.addEventListener('change', function () {
      if (navCheck.checked) {
        openMenu();
      } else {
        document.body.classList.remove('menu-open');
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();
