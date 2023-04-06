let numbers = [];
let operators = [];
let result = 0;
let memory = 0;

function getNumbers() {
  const numZero = document.getElementById("0");
  const numOne = document.getElementById("1");
  const numTwo = document.getElementById("2");
  const numThree = document.getElementById("3");
  const numFour = document.getElementById("4");
  const numFive = document.getElementById("5");
  const numSix = document.getElementById("6");
  const numSeven = document.getElementById("7");
  const numEight = document.getElementById("8");
  const numNine = document.getElementById("9");

  numZero.addEventListener("click", insertToUserInput);
  numOne.addEventListener("click", insertToUserInput);
  numTwo.addEventListener("click", insertToUserInput);
  numThree.addEventListener("click", insertToUserInput);
  numFour.addEventListener("click", insertToUserInput);
  numFive.addEventListener("click", insertToUserInput);
  numSix.addEventListener("click", insertToUserInput);
  numSeven.addEventListener("click", insertToUserInput);
  numEight.addEventListener("click", insertToUserInput);
  numNine.addEventListener("click", insertToUserInput);
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
  equals.addEventListener("click", createEquation);
  clear.addEventListener("click", clearInput);
  memoryClear.addEventListener("click", memoryStorage);
  memorySave.addEventListener("click", memoryStorage);
  memoryRecall.addEventListener("click", memoryStorage);
}

function clearInput() {
  userInput.value = "";
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
  console.log(memory);
  console.log(this.id);
}

function insertToUserInput() {
  let userInput = document.getElementById("userInput");
  userInput.value = userInput.value + +this.id;
}

function addEquationOperator() {
  numbers.push(+userInput.value);
  operators.push(this.id);
  userInput.value = "";
}

function createEquation() {
  numbers.push(+userInput.value);
  let i = 0;
  while (i < operators.length) {
    console.log(numbers.join(operators[i]));
    i++;
  }
  userInput.value = "";
  console.log(numbers);
  console.log(operators);
}

getNumbers();
getOperators();
