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