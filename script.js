'use strict'
// Script for navigation bar
const hamburger = document.getElementById('bar')
const nav = document.getElementById('navbar');
const closeHamburger = document.getElementById('close');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.add('active')
  });
};

if (closeHamburger) {
  closeHamburger.addEventListener('click', () => {
    nav.classList.remove('active')
  });
};
