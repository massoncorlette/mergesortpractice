

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

//fibsRec(n)
//  resultArray
//  currentNum = 0
//  
//  if(n =0) return array
//   
//  currentNum += fibsRec(n)
//  return result.push(fibsRec(n -1))


// array.shift ??
function fibsRec(fibSize) {

    if (fibSize <= 0) return [];
    if (fibSize === 1) return [0];
    if (fibSize === 2) return [0, 1];
  
    const result = fibsRec(fibSize - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
  
    return result;

}
console.log(fibsRec(2));

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


// recursion example of doing through a complex array 
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
//console.log(seven);

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

//console.log(fibs(8));



//console.log(sumRange(4));

//console.log(factorial(5));

//console.log(factorial(5));