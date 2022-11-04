class Calculator {
    constructor(outputPreviousText, outputCurrentText) {
        this.outputPreviousText = outputPreviousText;
        this.outputCurrentText = outputCurrentText;
        this.clearEverything();
    }

    clearEverything() {
        this.outputPrevious = '';
        this.outputCurrent = '';
        this.operator = undefined;
    }
    clear() {

    }

    appendNumber(number) {
        this.outputCurrent = number;
    }

    chooseOperator(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.outputCurrentText.innerText = this.outputCurrent;
    }
}



const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const clearEverythingButton = document.querySelector('[data-clear-everything]');
const outputPreviousText = document.querySelector('[output-previous]');
const outputCurrentText = document.querySelector('[output-current]');

const calculator = new Calculator(outputPreviousText, outputCurrentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})



