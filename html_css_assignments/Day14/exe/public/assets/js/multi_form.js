document.addEventListener('DOMContentLoaded', function () {
  
  let form = document.getElementById('form');
  let formGroup = document.getElementsByClassName('form-group');
  let resetBtn = document.getElementById('reset');


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
      //console.log(input.firstElementChild.nextElementSibling.value);
      let inputValue = input.firstElementChild.nextElementSibling.value.trim();
      let nameValue = input.firstElementChild.nextElementSibling.getAttribute('name');

      if (inputValue == '') {
        let errmsg = document.createElement('p');
        errmsg.textContent = `Require ${nameValue}`;
        errmsg.classList.add('err');
        input.appendChild(errmsg);
      }
    });

  });

  resetBtn.addEventListener('click', function () {
    for (let input of formGroup) {
      if (input.lastElementChild.classList.contains('err')) {
        input.lastElementChild.remove();
      }
     
    }
    form.reset();
  });


});