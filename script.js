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