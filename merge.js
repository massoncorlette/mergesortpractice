

function fibs(fibSize) {

  let result = [];
  let currentNum = null;

  // case
  if( fibSize === 1) {
    result.push(0);
    return result;
  }
  result.push(0);
  result.push(1);

  for (let i=0;i<fibSize;i++) {
    currentNum = result[i] + result[i + 1];
    result.push(currentNum);
  }
  return result;
}


// array.shift ??
function fibsRec(fibSize) {

  let result = [];

  if (fibSize === 1) {
    result.push[0];
    return result;
  }
  
}

function sumRange(num) {
  if(num == 1) return 1;

  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 1) {
    return 1
  }
  return num = num * factorial(num - 1);
}

//console.log(fibs(8));

console.log(fibsRec(5));

console.log(sumRange(5));

console.log(factorial(5));