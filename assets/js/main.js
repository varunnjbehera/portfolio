(function () {
  'use strict';

  var chips = document.querySelectorAll('.tag-filter__chip');
  var cards = document.querySelectorAll('.project-card');
  var empty = document.getElementById('projects-empty');
  var countEl = document.getElementById('visibleCount');

  if (chips.length && cards.length) {
    function filterCards(activeTag) {
      var toShow = [];
      var toHide = [];

      cards.forEach(function (card) {
        var show = activeTag === 'all' ||
          (card.dataset.tools || '').split(' ').indexOf(activeTag) !== -1;
        (show ? toShow : toHide).push(card);
      });

      // Phase 1: fade out departing cards
      toHide.forEach(function (card) { card.classList.add('card-hidden'); });

      // Phase 2: after fade completes, remove from layout then fade in arriving cards
      setTimeout(function () {
        toHide.forEach(function (card) { card.hidden = true; });
        toShow.forEach(function (card) {
          card.hidden = false;
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              card.classList.remove('card-hidden');
            });
          });
        });
        if (empty) empty.classList.toggle('visible', toShow.length === 0);
        if (countEl) countEl.textContent = toShow.length + ' / ' + cards.length;
      }, toHide.length ? 160 : 0);
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) {
          c.classList.remove('active');
          c.removeAttribute('aria-pressed');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
        filterCards(chip.dataset.tag);
      });
    });

    filterCards('all');
  }

  // theme toggle
  (function () {
    var root = document.documentElement;
    var stored = localStorage.getItem('vb-theme');
    if (stored === 'dark' || stored === 'light') {
      root.setAttribute('data-theme', stored);
    }
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('vb-theme', next);
    });
  }());
}());
