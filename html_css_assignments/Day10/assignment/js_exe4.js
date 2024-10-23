let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = number.filter(function(element) {
  return element % 2 == 0;
  });
console.log(even);

let multiply = even.map(function (element) {
  return element * 2;
});
console.log(multiply);

let sum = multiply.reduce(function (a,b) {
  return a + b;
})
console.log(sum);