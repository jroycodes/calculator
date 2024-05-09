"use strict";

// CALCULATOR FUNCTIONS

// Addition
function addition(num1, num2) {
  return num1 + num2;
}

// Subtraction
function subtraction(num1, num2) {
  return num1 - num2;
}

// Multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Division
function divide(num1, num2) {
  return num1 / num2;
}

// Operation variables
let firstNum;
let operator;
let secondNum;

//  function operate that takes an operator and 2 numbers and calls upper functions

function operate(operator, firstNum, secondNum) {
  if (operator === "+") {
    return addition(firstNum, secondNum);
  } else if (operator === "-") {
    return subtraction(firstNum, secondNum);
  } else if (operator === "*") {
    return multiply(firstNum, secondNum);
  } else if (operator === "/") {
    divide(firstNum, secondNum);
  } else return "Invalid operator";
}
console.log(operate("+", 12, 13));
