/* eslint-disable linebreak-style */
const listMenuNav = document.querySelector('.list-menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelectorAll('.menu-item > a');

menuItems.forEach((menu) => {
  menu.addEventListener('click', () => {
    listMenuNav.setAttribute('data-visible', false);
    menuToggle.setAttribute('aria-expanded', false);
  });
});

menuToggle.addEventListener('click', () => {
  const visibility = listMenuNav.getAttribute('data-visible');
  if (visibility === 'false') {
    listMenuNav.setAttribute('data-visible', true);
    menuToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    listMenuNav.setAttribute('data-visible', false);
    menuToggle.setAttribute('aria-expanded', false);
  }
});