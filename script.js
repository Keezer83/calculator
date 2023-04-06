const calculation = {
  currentUserNumber: "",
  currentOperator: "",
  currentEquation: "",
};
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

  plus.addEventListener("click", addEquationOperation);
  subtract.addEventListener("click", addEquationOperation);
  multiply.addEventListener("click", addEquationOperation);
  divide.addEventListener("click", addEquationOperation);
}

function insertToUserInput() {
  let userInput = document.getElementById("userInput");
  userInput.value = userInput.value + +this.id;
  console.log(userInput.value);
}

function addEquationOperation() {
  calculation.currentUserNumber = userInput.value;
  calculation.currentOperator = this.id;
  calculation.currentEquation =
    +calculation.currentUserNumber + " " + calculation.currentOperator;
  userInput.value = "";
  console.log(calculation.currentEquation);
  console.log(this.id);
}

getNumbers();
getOperators();
