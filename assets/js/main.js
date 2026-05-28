(function () {
  'use strict';

  var chips = document.querySelectorAll('.tag-filter__chip');
  var cards = document.querySelectorAll('.project-card');
  var empty = document.getElementById('projects-empty');
  var countEl = document.getElementById('visibleCount');

  if (chips.length && cards.length) {
    function showCard(card) {
      card.hidden = false;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          card.classList.remove('card-hidden');
        });
      });
    }

    function hideCard(card) {
      card.classList.add('card-hidden');
      setTimeout(function () {
        if (card.classList.contains('card-hidden')) card.hidden = true;
      }, 160);
    }

    function filterCards(activeTag) {
      var visible = 0;
      cards.forEach(function (card) {
        var show = activeTag === 'all' ||
          (card.dataset.tools || '').split(' ').indexOf(activeTag) !== -1;
        if (show) {
          showCard(card);
          visible++;
        } else {
          hideCard(card);
        }
      });
      if (empty) {
        empty.classList.toggle('visible', visible === 0);
      }
      if (countEl) {
        countEl.textContent = visible + ' / ' + cards.length;
      }
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
