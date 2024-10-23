const cart = [
  { item: "apple", price: 1.5, quantity: 2 },
  { item: "banana", price: 1.2, quantity: 5 },
  { item: "orange", price: 1.8, quantity: 3}
];
let sum = 0;

cart.forEach(function (list) {
  sum += list.price * list.quantity;
});
console.log(sum);