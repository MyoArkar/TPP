document.addEventListener('DOMContentLoaded', function () {
  let menu = document.getElementById('menu-bar');
  let aside = document.getElementsByTagName('aside')[0];
  let container = document.getElementById('main-container');

  menu.addEventListener('click', function () {
    aside.classList.toggle('active');
    container.classList.toggle('active');
  });

  let form = document.getElementById('form');
  let formGroup = document.getElementsByClassName('form-group');
  
  //Array.from(formGroup).forEach(function (input) {
  //  console.log(input);
  //});
  //Array.from(formGroup).map(function (input) {
  //  console.log(input);
  //});
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      //document.querySelectorAll(".err").forEach(function(msg){
      //  msg.textContent = "";
      //});
      for (let input of formGroup) {
        if (input.lastElementChild.classList.contains('err')) {
          input.lastElementChild.remove();
        }
        //console.log(input.lastElementChild.classList.contains('err'));
      }
      Array.from(formGroup).forEach(function (input) {
        //console.log(input.firstElementChild.value);
        let inputValue = input.firstElementChild.value.trim();
        let nameValue = input.firstElementChild.getAttribute('name');
  
        if (inputValue == '') {
          let errmsg = document.createElement('p');
          errmsg.textContent = `Require ${nameValue}`;
          errmsg.classList.add('err');
          input.appendChild(errmsg);
        }
      });
  
    });
  }
  
//  fetchAPI();
//  function fetchAPI() {
//    fetch('https://dummyjson.com/products/category/smartphones', {
//      method: 'GET'
//    })
//      .then(response => {
//        console.log(response);
//        if (!response.ok) {
//          throw new Error("network error");
//        }
//        return response.json();
//      });
  //  }

  
});