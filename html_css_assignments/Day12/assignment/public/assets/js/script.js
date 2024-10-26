document.addEventListener('DOMContentLoaded', function () {
  let menuBar = document.getElementById('menu-bar');
  let menu = document.getElementById('menu');
  
  menuBar.addEventListener('click', function () {
    menu.classList.toggle('left-0');
    menu.classList.toggle('-left-[100vw]');
  });
});