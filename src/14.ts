import * as math from 'mathjs';

const add = (a, b) => {
  return math.add(a, b);
};

const subtract = (a, b) => {
  return math.subtract(a, b);
};

const multiply = (a, b) => {
  return math.multiply(a, b);
};

const divide = (a, b) => {
  return math.divide(a, b);
};

export { add, subtract, multiply, divide };