document.addEventListener('DOMContentLoaded', function () {
  let navi = document.getElementsByClassName('navi')[0].children;
  
  //Department
  Array.from(navi).forEach(function (navi_child) {
    navi_child.addEventListener('click', function () {
      let department = document.getElementById(navi_child.getAttribute('data-field'));
      //console.log(department);
      //console.log(navi_child.getAttribute('data-field'));
      Array.from(navi).forEach(function (navi_child) {
        let department = document.getElementById(navi_child.getAttribute('data-field'));
        navi_child.classList.remove('active');
        department.classList.remove('active');
      });
        navi_child.classList.toggle('active');
        department.classList.toggle('active');
    });
  })
 
  //FAQ
  let faq = document.getElementsByClassName('faq-item');

  Array.from(faq).forEach(function (faq_item) {
    faq_item.addEventListener('click', function () {
      faq_item.classList.toggle('active');
    });
  });

    //Form
    let form = document.getElementById('form');
    let inputGroup = document.getElementsByClassName('input-box');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      for (let input of inputGroup) {
        if (input.lastElementChild.classList.contains('err')) {
          input.lastElementChild.remove();
        }
      }
      Array.from(inputGroup).forEach(function (input) {
        
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
});