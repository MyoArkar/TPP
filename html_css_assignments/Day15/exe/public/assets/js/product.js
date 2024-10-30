document.addEventListener('DOMContentLoaded', function(){
  let productList = document.getElementById('product-list');
fetch('https://dummyjson.com/products/category/beauty')
.then(res => {
  //console.log(res)
  return res.json();
})
.then(data => {
  data.products.map(function (ele) {
    let product = document.createElement('div');
    product.classList.add('product-item');
    product.innerHTML = `
          <img src="${ele.thumbnail}" alt="product">
          <div class="p-2">
            <h2 class="mb-2 text-xl font-bold">${ele.title}</h2>
            <p>${ele.description}</p>
          </div>
          `;
    productList.appendChild(product); 
  })
})
});