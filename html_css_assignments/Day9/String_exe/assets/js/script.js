
function exe1() {
  let user_name = String(document.getElementById("user_name").value);
  let age = String(document.getElementById("age").value);
  let result = "";
  function upcase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  if (user_name) {
    
    result += `Your Name is ${upcase(user_name)}`;
  }
  if (age) {
    result += `You are  ${age} years old.`;
  }
  document.getElementById("result1").innerHTML = result;
}

function exe2() {
  let input = String(document.getElementById("credit").value);
  let number;
  if (input.length <= 4) {
    number = input.replace(/./g, "*");
  }else{
    number = input.slice(0, -4).replace(/./g, "*") + input.slice(-4);
  }
  document.getElementById("result2").innerHTML = number;
}
