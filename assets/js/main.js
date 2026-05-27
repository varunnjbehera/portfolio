(function () {
  'use strict';

  var chips = document.querySelectorAll('.tag-filter__chip');
  var cards = document.querySelectorAll('.project-card');
  var empty = document.getElementById('projects-empty');

  if (!chips.length || !cards.length) return;

  function filterCards(activeTag) {
    var visible = 0;
    cards.forEach(function (card) {
      if (activeTag === 'all') {
        card.hidden = false;
        visible++;
      } else {
        var tools = (card.dataset.tools || '').split(' ');
        var match = tools.indexOf(activeTag) !== -1;
        card.hidden = !match;
        if (match) visible++;
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
