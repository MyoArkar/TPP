document.addEventListener('DOMContentLoaded', function () {
  let basic = document.getElementById('basic');
  let list1 = document.getElementById('list1');
  let list2 = document.getElementById('list2');
  let list3 = document.getElementById('list3');
  function titleclick(ele) {
    console.log(ele);
  }
  fetch('https://dummyjson.com/recipes?limit=18&select=name,instructions')
    .then(res => {
      //console.log(res)
      return res.json();
    })
    .then(data => {

      //data.recipes.map(function (ele) {
      //  let recipe = document.createElement('div');
      //  product.classList.add('product-item');
      //  product.innerHTML = `
      //        <img src="${ele.thumbnail}" alt="product">
      //        <div class="p-2">
      //          <h2 class="mb-2 text-xl font-bold">${ele.title}</h2>
      //          <p>${ele.description}</p>
      //        </div>
      //        `;
      //  productList.appendChild(product); 
      //})
      
      //Basic List
      for (let i = 0; i < data.recipes.length - 15; i++) {
        //console.log(data.recipes[i].name);
        let basicItem = document.createElement('div');
        basicItem.classList.add('mb-3');
        basicItem.innerHTML = `
          <h3 class="mb text-lg text-blue">${i + 1}. ${data.recipes[i].name}</h3>
          <p class="font-light text-darkwhite">${data.recipes[i].instructions.join(" ").substring(0, 50)}</p>`;
        basic.appendChild(basicItem);
      }

      //List One
      for (let i = 3; i < data.recipes.length - 10; i++) {
        let item = document.createElement('div');
        item.classList.add('mb-3');
        item.innerHTML = `
         <div class="title">
            <h2> ${data.recipes[i].name}</h2>
            <span><i class="fa-solid fa-angle-down sign"></i></span>
          </div>
          <div class="description">
          ${data.recipes[i].instructions.join(" ").substring(0, 100)}
          </div>
        `;
        list1.appendChild(item);
      }

      //List Two
      for (let i = 8; i < data.recipes.length - 5; i++) {
        let item = document.createElement('div');
        item.classList.add('mb-3');
        item.innerHTML = `
         <div class="title">
            <h2> ${data.recipes[i].name}</h2>
            <span><i class="fa-solid fa-angle-down sign"></i></span>
          </div>
          <div class="description">
          ${data.recipes[i].instructions.join(" ").substring(0, 100)}
          </div>
        `;
        list2.appendChild(item);
      }
      
      //List Three
      for (let i = 13; i < data.recipes.length ; i++) {
        let item = document.createElement('div');
        item.classList.add('mb-3');
        item.innerHTML = `
         <div class="title">
            <h2> ${data.recipes[i].name}</h2>
            <span><i class="fa-solid fa-angle-down sign"></i></span>
          </div>
          <div class="description">
          ${data.recipes[i].instructions.join(" ").substring(0, 100)}
          </div>
        `;
        list3.appendChild(item);
      }
      let titles = document.getElementsByClassName("title");
      let descriptions = document.getElementsByClassName("description");
      let signs = document.getElementsByClassName("sign");


      for (let title of titles) {
        title.addEventListener('click', function () {
          title.nextElementSibling.classList.toggle('active');
          title.lastElementChild.firstElementChild.classList.toggle('fa-angle-up');
        });
      }
    })


});