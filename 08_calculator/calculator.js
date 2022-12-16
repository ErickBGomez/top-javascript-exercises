const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((accumulator, num) => accumulator + num, 0);
};

const multiply = function(numArray) {
  return (numArray.length
        ? numArray.reduce((accumulator, num) => accumulator * num)
        : 0); // If array is empty, return 0
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) return 1;
  
  let result = num;

  for (let i = num-1; i >= 1; i--) {
    result *= i;
  }

  return result;
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
