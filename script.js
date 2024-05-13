"use strict";

let firstNum = "";
let currentOperator = "";
let secondNum = "";

// stores values in first and second num variables depending on click event 
function buttonClick(event) {
  const clickedNumber = event.target.textContent;
  if (!currentOperator) {
    firstNum += clickedNumber;
    updateDisplay(firstNum);
  } else {
    secondNum += clickedNumber;
    updateDisplay(secondNum);
  }
}

// listen for button clicks 
const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

// display values 
function updateDisplay(value) {
  document.querySelector(".screen").textContent = value;
}

function operatorButtonClick(event) {
  currentOperator = event.target.textContent;
}

// Add event listeners to operator buttons
document.querySelectorAll(".operators").forEach((button) => {
  button.addEventListener("click", operatorButtonClick);
});

// carry out operations
function operate() {
  const num1 = parseFloat(firstNum);
  const num2 = parseFloat(secondNum);
  let result;
  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = "Invalid operator";
  }

  updateDisplay(result);
}

// Add event listener to equals button
document.getElementById("equals").addEventListener("click", operate);

function clearCalculator() {
  firstNum = "";
  secondNum = "";
  currentOperator = "";
  updateDisplay("0");
}

// Add event listener to clear button
document.getElementById("clear").addEventListener("click", clearCalculator);