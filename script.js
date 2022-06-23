// getting the DOM elements
const prevExpression = document.querySelector(".prev-expression");
const currentExpression = document.querySelector(".current-expression");
const clearBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const operationBtns = document.querySelectorAll(".operation");
const numberBtns = document.querySelectorAll(".number");
const equalBtn = document.querySelector(".equal");

// calculator class
class Calculator {
  constructor(prevExpression, currentExpression) {
    this.prevExpression = prevExpression;
    this.currentExpression = currentExpression;
    this.clear();
  }

  // calculator functions
  clear() {
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.substring(
      0,
      this.currentOperand.length - 1
    );
  }
  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    this.operation = operation;
    this.prevOperand = `${this.currentOperand} ${operation}`;
    this.currentOperand = "";
    operation.toString();
  }
  compute() {
    this.result = "";
    switch (this.operation) {
      case "+":
        this.result =
          parseFloat(this.prevOperand) + parseFloat(this.currentOperand);
        break;
      case "-":
        this.result =
          parseFloat(this.prevOperand) - parseFloat(this.currentOperand);
        break;
      case "*":
        this.result =
          parseFloat(this.prevOperand) * parseFloat(this.currentOperand);
        break;
      case "/":
        this.result =
          parseFloat(this.prevOperand) / parseFloat(this.currentOperand);
        break;
      default:
        alert("Son kiriting!");
    }
    this.currentOperand = this.result;
    this.prevOperand = "";
  }
  updateDisplay() {
    this.currentExpression.innerText = this.currentOperand;
    this.prevExpression.innerText = this.prevOperand;
  }
}

const calculator = new Calculator(prevExpression, currentExpression);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtns.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.chooseOperation(operation.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
  calculator.currentOperand = "";
});

clearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
