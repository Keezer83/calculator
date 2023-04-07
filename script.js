let firstNumber;
let secondNumber;
let operator;
let result;
let memory = 0;
let userInput = document.getElementById("userInput");

function getNumbers() {
  for (let i = 0; i < 10; i++) {
    const num = document.getElementById(String(i));
    num.addEventListener("click", insertToUserInput);
  }
  const decimal = document.getElementById("decimal");
  decimal.addEventListener("click", insertToUserInput);
}

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

function clearInput() {
  userInput.value = "";
  firstNumber = undefined;
  secondNumber = undefined;
}

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

function insertToUserInput() {
  userInput.value = userInput.value + +this.id;
}

function addEquationOperator() {
  if (firstNumber === undefined) {
    firstNumber = +userInput.value;
    operator = this.id;
  } else {
    secondNumber = +userInput.value;
    calculate();
    operator = this.id;
    firstNumber = result;
    console.log("firstNumber updated to " + result);
  }
  userInput.value = "";
}

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
  console.log("calculate function result " + result);
}

function showAnswer() {
  secondNumber = +userInput.value;
  calculate();
  userInput.value = result;
  firstNumber = undefined;
  secondNumber = undefined;
}

getNumbers();
getOperators();
