//min 8
//at least one lower
//at least one upper
//at least one digit
//at least one symbol !@#$%

function isValidPassword(password) {

  let symbols = "!@#$%";
  let lower = false;
  let upper = false;
  let digit = false;
  let symbol = false;

  if (password.length < 8) {
    console.log('invalid');
  } else {
    
    for (let char of password) {
      
      if (parseInt(char) >= 0 && parseInt(char) <= 9) {
        digit = true;
      } else if (symbols.includes(char)) {
        symbol = true;
      } else {

        if (char === char.toUpperCase()) {
          upper = true;
        }
        else if (char === char.toLowerCase()) {
          lower = true;
        }
      }
    }
    if (lower && upper && digit && symbol) {
      console.log("valid");
    } else {
      console.log("invalid");
    }
  }
}

let value = prompt("enter pasword");

if (value != null) {
  isValidPassword(value);
}