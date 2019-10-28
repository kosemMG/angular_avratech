"use strict";

function renderOperator(operator) {
    switch (operator) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return '*';
        case 'divide':
            return '&divide;';
        case 'decimal':
            return '.';
        case 'squared':
            return `<sup>2</sup>`;
        case 'square-root':
            return '&#8730;';
        default:
            return '';
    }
}

const math = {
    add(x, y) {
        return x + y;
    },

    subtract(x, y) {
        return x - y;
    },

    multiply(x, y) {
        return x * y;
    },

    divide(x, y) {
        return y !== 0 ? x / y : 'Division by 0!';
    },

    squareRoot(x) {
        return Math.sqrt(x);
    },

    squared(x) {
        return Math.pow(x, 2);
    },

    calculate(numArr) {
        let total = 0;
        while (numArr[1] !== '=') {
            const firstOperand = numArr[0];
            const sign = numArr[1];
            const secondOperand = numArr[2];

            switch (sign) {
                case '+':
                    total = this.add(firstOperand, secondOperand);
                    break;
                case '-':
                    total = this.subtract(firstOperand, secondOperand);
                    break;
                case '*':
                    total = this.multiply(firstOperand, secondOperand);
                    break;
                case "÷":
                    total = this.divide(firstOperand, secondOperand);
                    break;
                // case 'squared':
                //     return;
                // case 'square-root':
                //     return;
            }
            numArr.splice(0, 3, total);
        }
        return numArr[0];
    }
};

const auxiliaryOperation = {
    display: document.getElementById('display'),

    clear() {
        this.display.innerText = '0';
    },

    backspace() {
        this.display.innerText = this.display.innerText.slice(0, -1);
    },

    renderResult(result) {
        this.display.innerText = result;
    }
};

window.onload = () => {
    const display = document.getElementById('display');
    let numArray = [];
    let numString = '';
    addEventListener('click', event => {
        // debugger;
        const button = event.target;
        if (button.tagName === 'BUTTON') {
            const action = button.dataset.action;
            const buttonContent = button.innerText;
            if ((display.innerHTML === '0') || numArray[1] === '=') {
                numArray = [];
                display.innerHTML = '';
            }
            if (!action) {
                display.innerHTML += buttonContent;
                numString += buttonContent;
            } else if (action !== 'backspace') {
                display.innerHTML += renderOperator(action);
                numArray.push(+numString);
                numString = '';
                numArray.push(buttonContent);
            }
            switch (action) {
                case 'clear':
                    auxiliaryOperation.clear();
                    break;
                case 'backspace':
                    auxiliaryOperation.backspace();
                    numString = numString.slice(0, -1);
                    break;
                case 'calculate':
                    const total = math.calculate(numArray);
                    auxiliaryOperation.renderResult(total);
                    break;
            }
        }
    });

};

