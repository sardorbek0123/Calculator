let isResult = false;

document.getElementById("display").defaultValue = 0;

function number(value) {
  let display = document.getElementById("display").value;

  const displayValue = document.getElementById("display");

  if (isResult) {
    display = "0";
    isResult = false;
  }

  let actions = ["*", "/", "-", "+", "%"];

  if (display == "0") {
    display = value;
  } else if (
    actions.includes(display[display.length - 1]) &&
    actions.includes(value)
  ) {
    display = display.slice(0, display.length - 1) + value;
    // console.log(display);
  } else if (value == ".") {
    let last_index = 0;
    for (let i = display.length - 1; i >= 0; i--) {
      if (actions.includes(display[i])) {
        last_index = i;
        break;
      }
    }

    if (!display.slice(last_index, display.length).includes(".")) {
      display += value;
    }
  } else {
    display += value;
  }

  displayValue.value = display;
}


function calc() {
  const displayValue = document.getElementById("display");

  let result;

  const input = displayValue.value;
  const operatorIndex = input.indexOf("%");

  if (operatorIndex !== -1) {
    const num1 = parseFloat(input.substring(0, operatorIndex));
    const num2 = parseFloat(input.substring(operatorIndex + 1));
    result = (num1 / 100) * num2;
  } else {
    result = eval(input);
  }

  displayValue.value = result;
  isResult = true;
}

function allClear() {
  const displayValue = document.getElementById("display");
  displayValue.value = 0;
  isResult = false;
}

function convertValue() {
  const displayValue = document.getElementById("display");
  displayValue.value = -displayValue.value;
}
