/* ===========================
   NAVBAR.JS — Interaksi Navbar
   - Toggle hamburger menu
   - Active link saat scroll (Intersection Observer)
   - Scroll shadow effect
   =========================== */

(function () {
  'use strict';

  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburgerBtn');
  const navMenu     = document.getElementById('navMenu');
  const navLinks    = document.querySelectorAll('.navbar__link');

  // ---- Hamburger Toggle ----
  function toggleMenu(forceClose = false) {
    const isOpen = !forceClose && !navMenu.classList.contains('is-open');
    navMenu.classList.toggle('is-open', isOpen);
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());

  // Close when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        toggleMenu(true);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      toggleMenu(true);
    }
  });

  // Close when clicking outside on mobile
  document.addEventListener('click', e => {
    if (
      navMenu.classList.contains('is-open') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      toggleMenu(true);
    }
  });

  // ---- Scroll Shadow on Navbar ----
  const scrollObserver = new IntersectionObserver(
    ([entry]) => {
      navbar.classList.toggle('scrolled', !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: '-' + getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height').trim() + ' 0px 0px 0px' }
  );

  // Observe a sentinel element just below the navbar
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:' + (navbar.offsetHeight + 1) + 'px;height:1px;width:1px;pointer-events:none';
  document.body.prepend(sentinel);
  scrollObserver.observe(sentinel);

  // ---- Active Link on Scroll (Intersection Observer) ----
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const isActive = link.dataset.section === id;
            link.classList.toggle('active', isActive);
          });
        }
      });
    },
    {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
  );

  sections.forEach(section => sectionObserver.observe(section));

})();
