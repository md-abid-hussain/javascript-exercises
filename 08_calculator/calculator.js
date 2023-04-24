const add = function(a,b) {
  return a+b;	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum =0;
  arr.forEach(ele=>{
    sum = sum+ele;
  })
  return sum;
};

const multiply = function(arr) {
  let prod =1;
  arr.forEach(ele=>{
    prod = prod*ele;
  })
  return prod;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  if(num <2)	
    return 1;
  return num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
