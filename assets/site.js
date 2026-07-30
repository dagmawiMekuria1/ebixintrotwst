/**
 * ebixIntro - Global JavaScript
 */

(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* ------------------------------------------------
   * Mobile Navigation Toggle
   * ------------------------------------------------ */
  function initMobileNav() {
    var toggle = document.querySelector('.nav__toggle');
    var navList = document.querySelector('.nav__links');
    if (!toggle || !navList) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('is-open');
    });

    // Close nav when a link is clicked (mobile UX)
    navList.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('is-open');
      });
    });
  }

  /* ------------------------------------------------
   * Highlight Active Nav Link
   * ------------------------------------------------ */
  function highlightActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('nav__link--active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ------------------------------------------------
   * Scroll Reveal (Intersection Observer)
   * ------------------------------------------------ */
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length || !('IntersectionObserver' in window)) {
      // Fallback: just show everything
      reveals.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------
   * Navbar background on scroll
   * ------------------------------------------------ */
  function initNavScroll() {
    var nav = document.querySelector('.navbar');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 40) {
        nav.classList.add('navbar--scrolled');
      } else {
        nav.classList.remove('navbar--scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------
   * Smooth Scroll for anchor links
   * ------------------------------------------------ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ------------------------------------------------
   * Glossary Search / Filter
   * ------------------------------------------------ */
  function filterGlossary() {
    var input = document.getElementById('glossary-search-input');
    if (!input) return;

    input.addEventListener('input', function () {
      var query = input.value.trim().toLowerCase();
      var terms = document.querySelectorAll('.glossary-term');
      var noResults = document.querySelector('.glossary-no-results');
      var anyVisible = false;

      terms.forEach(function (term) {
        var termAttr = (term.getAttribute('data-term') || '').toLowerCase();
        var termText = term.textContent.toLowerCase();
        var matches = !query || termAttr.indexOf(query) !== -1 || termText.indexOf(query) !== -1;
        term.classList.toggle('glossary-term--hidden', !matches);
        if (matches) anyVisible = true;
      });

      // Hide letter headers that have no visible terms beneath them
      document.querySelectorAll('.glossary-letter').forEach(function (header) {
        var next = header.nextElementSibling;
        var hasVisible = false;
        while (next && !next.classList.contains('glossary-letter')) {
          if (next.classList.contains('glossary-term') && !next.classList.contains('glossary-term--hidden')) {
            hasVisible = true;
          }
          // Also check inside dl elements or wrapper divs
          if (next.querySelectorAll) {
            var visibleInside = next.querySelectorAll('.glossary-term:not(.glossary-term--hidden)');
            if (visibleInside.length) {
              hasVisible = true;
            }
          }
          next = next.nextElementSibling;
        }
        header.style.display = hasVisible ? '' : 'none';
      });

      if (noResults) {
        noResults.classList.toggle('is-visible', !anyVisible && !!query);
      }
    });
  }

  /* ------------------------------------------------
   * Initialise
   * ------------------------------------------------ */
  ready(function () {
    initMobileNav();
    highlightActiveNav();
    initScrollReveal();
    initNavScroll();
    initSmoothScroll();
    filterGlossary();
  });
})();