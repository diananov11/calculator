let resultScreen = document.getElementById("calculator-screen");
resultScreen.value = "0";
let resultAddition = "";

// button AC
function resetValue() {
  resultScreen.value = "0";
  resultAddition = "";
}

// Button 0-9
function setButton(index) {
  if (resultScreen.value.length < 8) {
    if (resultScreen.value === "0") {
      resultScreen.value = index;
      resultAddition += index;
    } else if (
      resultAddition.includes("+") ||
      resultAddition.includes("*") ||
      resultAddition.includes("-") ||
      resultAddition.includes("/")
    ) {
      resultAddition += index;
      let splitNumber = resultAddition.split(/[+\-*/]/g);
      let newNumber = splitNumber[splitNumber.length - 1];
      resultScreen.value = newNumber;
    } else {
      resultScreen.value += index;
      resultAddition += index;
    }
  }
}

// button +, -, *, /
function setOperation(index) {
  resultScreen.value = eval(resultAddition);
  resultAddition = resultScreen.value;
  resultAddition += index;
}

// button .
function displayDot(symbol) {
  if (!resultScreen.value.includes(".")) {
    resultScreen.value += symbol;
    resultAddition += symbol;
  }
}

//button =
function displayNumber() {
  resultScreen.value = eval(resultAddition);
  resultAddition = resultScreen.value;
}

//button kuadrat, round, delete
function setAction(action) {
  let resultNumber = eval(resultScreen.value);
  if (action === "Kuadrat") {
    resultScreen.value = Math.sqrt(resultNumber);
  } else if (action === "Rnd") {
    resultScreen.value = Math.round(resultNumber);
  } else if (action === "del" && resultScreen.value === "0") {
    resultScreen.value = "0";
  } else if (action === "del") {
    resultScreen.value = resultScreen.value.slice(0, -1);
  }
}

//button change theme
function changeThemes(event) {
  let calculatorContainer = document.getElementById("calculator-container");
  let body = document.querySelector("body");
  event.preventDefault();
  calculatorContainer.classList.toggle("change-theme-calculator");
  body.classList.toggle("new-theme-body");
}
