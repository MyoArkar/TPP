document.addEventListener('DOMContentLoaded', function () {
  let menu = document.getElementById('menu-bar');
  let aside = document.getElementsByTagName('aside')[0];
  let container = document.getElementById('main-container');

  menu.addEventListener('click', function () {
    aside.classList.toggle('active');
    container.classList.toggle('active');
  });
});