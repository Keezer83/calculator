//create initial variables used to store the numbers and operators for the equations
let firstNumber;
let secondNumber;
let operator;
let result;
let memory = 0;
let userInput = document.getElementById("userInput");

//get the number button values
function getNumbers() {
  const numberButtons = document.getElementsByClassName("number-btn");
  for (let i = 0; i < numberButtons.length; i++) {
    const btn = numberButtons[i];
    btn.addEventListener("click", insertToUserInput);
  }
}

//get the operator values for the calculator and the memory buttons
function getOperators() {
  const plus = document.getElementById("+");
  const subtract = document.getElementById("-");
  const multiply = document.getElementById("x");
  const divide = document.getElementById("÷");
  const equals = document.getElementById("=");
  const clear = document.getElementById("c");
  const memoryClear = document.getElementById("mc");
  const memorySave = document.getElementById("ms");
  const memoryRecall = document.getElementById("mr");

  plus.addEventListener("click", addEquationOperator);
  subtract.addEventListener("click", addEquationOperator);
  multiply.addEventListener("click", addEquationOperator);
  divide.addEventListener("click", addEquationOperator);
  equals.addEventListener("click", showAnswer);
  clear.addEventListener("click", clearInput);
  memoryClear.addEventListener("click", memoryStorage);
  memorySave.addEventListener("click", memoryStorage);
  memoryRecall.addEventListener("click", memoryStorage);
}

//clear the input field to be ready for a new operation
function clearInput() {
  userInput.value = "";
  firstNumber = undefined;
  secondNumber = undefined;
}

//memory storage function for the memory buttons
function memoryStorage() {
  if (this.id === "ms") {
    memory = +userInput.value;
    userInput.value = "";
    alert(`${memory} has been saved for later use`);
  } else if (this.id === "mr") {
    userInput.value = +memory;
  } else {
    memory = 0;
  }
}

//create the number inside the input field to be used in your equation
function insertToUserInput() {
  userInput.value = userInput.value + this.value;
}

//prepare equation values in the variables
function addEquationOperator() {
  if (firstNumber === undefined) {
    firstNumber = +userInput.value;
    operator = this.id;
  } else {
    secondNumber = +userInput.value;
    calculate();
    operator = this.id;
    firstNumber = result;
  }
  userInput.value = "";
}

//calculate your equation and get the result while resetting the calculator for a new operation
function calculate() {
  if (operator === "+" && secondNumber != undefined) {
    result = firstNumber + secondNumber;
  } else if (operator === "-" && secondNumber != undefined) {
    result = firstNumber - secondNumber;
  } else if (operator === "x" && secondNumber != undefined) {
    result = firstNumber * secondNumber;
  } else if (operator === "÷" && secondNumber != undefined) {
    result = firstNumber / secondNumber;
  }
}

//return the answer when selecting equals
function showAnswer() {
  secondNumber = +userInput.value;
  calculate();
  userInput.value = result;
  firstNumber = undefined;
  secondNumber = undefined;
}

getNumbers();
getOperators();
