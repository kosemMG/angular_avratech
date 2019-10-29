"use strict";

const math = {
    add(x, y) {
        console.log(`math.add ${x} ${y}`);
        return x + y;
    },

    subtract(x, y) {
        console.log(`math.subtract ${x} ${y}`);
        return x - y;
    },

    multiply(x, y) {
        console.log(`math.multiply ${x} ${y}`);
        return x * y;
    },

    divide(x, y) {
        console.log(`math.divide ${x} ${y}`);
        return y !== 0 ? x / y : 'Division by 0!';
    },

    squareRoot(x) {
        console.log(`math.squareRoot ${x}`);
        return Math.sqrt(x);
    },

    squared(x) {
        console.log(`math.squared ${x}`);
        return Math.pow(x, 2);
    },

    opposite(x) {
        console.log(`math.opposite ${x}`);
        return x * (-1);
    },

    calculate(numArr) {
        console.log(`math.calculate start numArr: ${numArr}`);
        let total = 0;
        while (numArr[1] !== '=') {
            const firstOperand = numArr[0];
            const sign = numArr[1];
            const secondOperand = numArr[2];
            console.log(`firstOperand = ${firstOperand} sign = ${sign} secondOperand = ${secondOperand}`);

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
                case 'x2':
                    total = this.squared(firstOperand);
                // case 'square-root':
                //     return;
            }
            console.log(`total = ${total}`);
            numArr.splice(0, 3, total);
            console.log(`new numArr: ${numArr}`);
        }
        console.log('math.calculate end');
        return numArr[0];
    }
};

const auxiliaryOperation = {
    display: document.getElementById('display'),
    archive: document.getElementById('archive'),

    clear() {
        console.log('auxiliaryOperation.clear');
        this.display.innerText = '0';
    },

    backspace() {
        console.log('auxiliaryOperation.backspace');
        this.display.innerText = this.display.innerText.slice(0, -1);
    },

    renderResult(result) {
        console.log('auxiliaryOperation.renderResult');
        this.display.innerText = result;
    },

    renderOpposite(opposite) {
        console.log('auxiliaryOperation.opposite');
        this.display.innerText = opposite;
        // TODO finish opposite number render
    },

    renderOperator(operator) {
        console.log(`auxiliaryOperation.renderOperator ${operator}`);
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
    },

    toArchive(copy, result) {
        console.log(`auxiliaryOperation.clear start copy = ${copy} result = ${result}`);
        copy = copy.replace(/,/g, '') + result;
        copy = copy.replace(/x20/g, `<sup>2</sup>`);
        this.archive.innerHTML += `${copy}<hr>`;
        console.log(`auxiliaryOperation.clear end`);
    }
};

window.onload = () => {
    console.log('listening to user\'s click...');
    const display = document.getElementById('display');
    let numArray = [];
    let numString = '';
    addEventListener('click', event => {
        // debugger;
        const button = event.target;
        if (button.tagName === 'BUTTON') {
            console.log('button was clicked');
            const action = button.dataset.action;
            console.log(`chosen action: ${action}`);
            const buttonContent = button.innerText;
            console.log(`clicked button content: ${buttonContent}`);
            if ((display.innerHTML === '0') || numArray[1] === '=') {
                numArray = [];
                display.innerHTML = '';
            }
            if (!action) {
                display.innerHTML += buttonContent;
                numString += buttonContent;
            } else if (action !== 'backspace' /*&& action !== 'opposite'*/) {
                display.innerHTML += auxiliaryOperation.renderOperator(action);
                if (numString !== '') {
                    numArray.push(+numString);
                }
                numString = '';
                if (isNaN(numArray[numArray.length - 1])) {
                    numArray[numArray.length - 1] = buttonContent;
                    display.innerText = display.innerText.slice(0, -2) + buttonContent;
                } else {
                    if (action === 'opposite' && !isNaN(numArray[numArray.length - 1])) {
                        numArray[numArray.length - 1] = math.opposite(numArray[numArray.length - 1]);
                        // display.innerText =
                    } else {
                        numArray.push(buttonContent);
                    }
                }
                console.log(`numArray: ${numArray}`);
            }
            switch (action) {
                case 'clear':
                    auxiliaryOperation.clear();
                    break;
                case 'backspace':
                    auxiliaryOperation.backspace();
                    numString = numString.slice(0, -1);
                    break;
                // case 'opposite':
                //     console.log('numArray', numArray);
                //     console.log('numString', numString);
                //     numString = math.opposite(+numString);
                //     auxiliaryOperation.renderOpposite(numString);
                //     break;
                case 'calculate':
                    const copy = numArray.toString();
                    const total = math.calculate(numArray);
                    auxiliaryOperation.renderResult(total);
                    auxiliaryOperation.toArchive(copy, total);
                    break;
            }
        }
    });

};

