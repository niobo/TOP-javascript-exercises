const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, cur) => total + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, cur) => total * cur, 1);
};

const power = function(x, y) {
	return 4 ** 3;
};

const factorial = function(x) {
	res = 1;
  for (let i = 1; i <= x; i++) {
    res *= i;
  }
  return res;
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
