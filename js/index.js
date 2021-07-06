'use strict';
// Burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// ParticlesJS
window.onload = function () {
    particlesJS.load("particles-js", "js/particles.json", function () {
    });
};

// Loader
$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1500);
});