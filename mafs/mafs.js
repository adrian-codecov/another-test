function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 0;
  }
}

function divide_two(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 0;
  }
}

function divide_three(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 0;
  }
}

module.exports = { add, multiply, divide_two, divide_three };
