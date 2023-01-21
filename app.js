class Calculator {
  constructor(prevOutput, currentOutput) {
    this.prevOutput = prevOutput;
    this.currentOutput = currentOutput;

    this.previous = "";
    this.current = "";
    this.operand = undefined;
  }
  addNumber(number) {
    if (number === ".") {
      if (!this.current.includes(number)) {
        this.current += number;
      }
    } else this.current += Number(number);
    this.updateCurrentField();
  }
  deleteChar() {
    this.current = this.current.toString().slice(0, this.current.length - 1);
    if (this.current === NaN) this.current = "0";
    this.updateCurrentField();
  }

  chooseOperand(operation) {
    if (this.operand === undefined) {
      this.previous = this.current;
      this.current = "";
    }
    this.operand = operation;

    this.updateCurrentField();
    this.updatePrevField();
  }

  calculate() {
    if (this.operand !== undefined) {
      let result;
      const a = Number(this.previous);
      const b = Number(this.current);
      switch (this.operand) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "/":
          result = a / b;
          break;
        case "*":
          result = a * b;
          break;
        default:
          break;
      }
      this.reset();
      this.current = result.toString();
      this.updateCurrentField();
    }
  }

  reset() {
    this.previous = "";
    this.current = "";
    this.operand = undefined;

    this.updateCurrentField();
    this.prevOutput.innerText = this.previous;
  }

  updateCurrentField() {
    this.currentOutput.innerText = this.current;
  }
  updatePrevField() {
    this.prevOutput.innerText = `${Number(this.previous)} ${this.operand}`;
  }
}

const BTN_NUMBERS = document.querySelectorAll(".btn-numb");
const BTN_OPERANDS = document.querySelectorAll(".btn-operand");

const PREV_OUTPUT_LABEL = document.querySelector(".previous-output");
const OUTPUT_LABEL = document.querySelector(".current-output");

const calculator = new Calculator(PREV_OUTPUT_LABEL, OUTPUT_LABEL);

BTN_NUMBERS.forEach((element) => {
  element.addEventListener("click", (btn) => {
    calculator.addNumber(btn.target.value);
  });
});
BTN_OPERANDS.forEach((element) => {
  element.addEventListener("click", (btn) => {
    calculator.chooseOperand(btn.target.value);
  });
});
document.querySelector(".btn-equal").addEventListener("click", () => {
  calculator.calculate();
});

document.querySelector(".btn-reset").addEventListener("click", () => {
  calculator.reset();
});
document.querySelector(".btn-del").addEventListener("click", () => {
  calculator.deleteChar();
});
