

function sumRange(n, sum = 0) {
  if (n <= 0) {
    return sum;
  }
  return sumRange(n - 1, sum + n);
}

console.log(sumRange(3));

function power(x, n) {
  if (n <= 0) {
    return 1
  }
  return x * power(x, n - 1);
}

console.log(power(2,4))

function factorial(n) {
  if (n <= 0) {
    return 1
  }
  return n * factorial(n - 1);

}

console.log(factorial(5));


function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.shift * productOfArray(arr);

}

console.log(productOfArray([1,3,5]));

function contains(obj,value) {
  if (obj. === 0) {
    return
  }
}