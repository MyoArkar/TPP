let fruitArr = ['apple', 'orange', 'pineapple'];

fruitArr.forEach(function (fruit, index)
{
  console.log (`${++index}. ${fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase()}`);
});