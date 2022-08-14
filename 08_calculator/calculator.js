const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const initialValue = 0;
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
	
};

const multiply = function(arr) {
  return arr.reduce((a, b) => {return a * b});
};

const power = function(a, b) {
	return a**b;
};

const factorial = function fact(n) {
  if (n===0 || n===1) {
    return 1;
  }
  return n*fact(n-1);
	
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
