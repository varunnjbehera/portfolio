(function () {
  'use strict';

  var chips = document.querySelectorAll('.tag-filter__chip');
  var cards = document.querySelectorAll('.project-card');
  var empty = document.getElementById('projects-empty');

  if (!chips.length || !cards.length) return;

  function showCard(card) {
    card.hidden = false;
    requestAnimationFrame(function () {
      card.classList.remove('card-hidden');
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
}());
