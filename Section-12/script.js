// function isEven(x) {
//   if (x % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isEven(x) {
  return x % 2 === 0;
}

function factorial(x) {
  var result = 1;
  for(var i = 2; i <= x; i++){
    result = result * i;
  }
  return result;
}

function kebabToSnake(str) {
  // var str = "This-is-a-test"
  var newStr = str.replace(/-/g, '_');
  return newStr;
}
