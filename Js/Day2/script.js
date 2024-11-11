//forEach //run a function for every element of the array.
//find //looks for a single (first) element that makes the function return true
//filter //returns an array of all matching elements
//map
//reduce
//Object.assign
//Object.keys
//Object.values
//Object.entries
//object loop for in
//array loop for of
const users = [
  {
      role: "Admin",
      name: "admin",
      likes: 10
  },
  {
      role: "Admin",
      name: "customer",
      likes: 5
  }
]

//function forEach(arr, callBackFun) {
//  for (val of arr) {
//    callBackFun(val);
//  }
//}
//let feachResult = forEach(users, user => {
//  console.log(user);
//});

//function find(arr, callBackFun) {
//  for (val of arr) {
//    if (callBackFun(val)) {
//      return val;
//    }
//  }
//  return undefined;
//}
//let findResult = find(users, user => {
//  return user.role == "Admin";
//})
//console.log(findResult);

function filter(arr, callBackFun) {
  const result = [];
  for (val of arr) {
    if (callBackFun(val)) {
      result.push(val);
    }
  }
  return result;
}
let filterResult = filter(users, user => {
  return user.role == "Admin";
})
console.log(filterResult);

function reduce(arr, callBackFun, intial) {
  for (val of arr) {
    intial = callBackFun(val, intial);
  }
  return intial;
}

let reduceResult = reduce(users, (user, acc) => {
  return acc+=user.likes;
}, 0)
console.log(reduceResult)

//let rfilter = reduce(users, (user, acc) => {
//  if (user.role == "Admin") {
//    acc.push(user.role + user.name);
//  }
//  return acc;
//}, []);
//console.log(rfilter)

//function map(arr, callBackFun) {
//  const result = [];
//  for (val of arr) {
//    result.push(callBackFun(val))
//  }
//  return result;
//}
//let mapresult = map(users, user => {
//  return user.likes * 2;
//})
//console.log(mapresult);


//object.assign
function objassign(target, source) {
  for (const yo in source) {
    target[yo] = source[yo];
  }
  return target
}
let result = objassign(users,{firstName: "Anne", lastName: "Smith" });
console.log(result);

//object.key
function objkey(obj) {
  const result = [];
  for (const key in obj) {
    result.push(key);
  }
  return result;
}
console.log(objkey(users));

//object.value
function objvalue(obj) {
  const result = [];
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
}
console.log(objvalue(users));

//object.entries
function objentries(obj) {
  const result = [];
  for (const key in obj) {
    result.push([key,obj[key]]);
  }
  return result;
}
console.log(objentries(users));