"use strict";

const math = {
    add(x, y) {
        console.log('math.add()', x, y);
        return x + y;
    },

    subtract(x, y) {
        console.log('math.subtract()', x, y);
        return x - y;
    },

    multiply(x, y) {
        console.log('math.multiply()', x, y);
        return x * y;
    },

    divide(x, y) {
        console.log('math.divide()', x, y);
        return y !== 0 ? x / y : 'Division by 0!';
    },

    squareRoot(x) {
        console.log('math.squareRoot()', x);
        return Math.sqrt(x);
    },

    squared(x) {
        console.log('math.squared()', x);
        return Math.pow(x, 2);
    },

    opposite(x) {
        console.log('math.opposite()', x);
        return x * (-1);
    },

    calculate(numArr) {
        console.log('math.calculate() start numArr:', numArr);
        // let total = 0;
        // [2, '*', 2, 2]
        // while (numArr[1] !== '=') {
            let totalSum = 0;
            for (let i = 0; i < numArr.length; i ++) {
                if (!isNaN(numArr[i])) {
                    totalSum += numArr[i];
                } else {
                    switch (numArr[i]) {
                        case '*':
                            totalSum *= numArr[i + 1];
                            break;
                        case '÷':
                            totalSum /= numArr[i + 1];
                            break;
                    }
                    i++;
                }
            }
            /*const firstOperand = numArr[0];
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
                    break;
                case '√':
                    total = this.squareRoot(firstOperand);
            }
            console.log(`total = ${total}`);
            numArr.splice(0, 3, total);
            if (numArr.length === 1) {
                break;
            }
            console.log(`new numArr: ${numArr}`);
        }*/
        console.log('math.calculate() return', totalSum);
        // return numArr[0];
            return totalSum;
    }
};

const auxiliaryOperation = {
    display: document.getElementById('display'),
    archive: document.getElementById('archive'),

    clear() {
        console.log('auxiliaryOperation.clear()');
        this.display.innerText = '0';
    },

    backspace() {
        console.log('auxiliaryOperation.backspace()');
        this.display.innerText = this.display.innerText.slice(0, -1);
    },

    renderResult(result) {
        console.log('auxiliaryOperation.renderResult()');
        this.display.innerText = result;
    },

    renderOperator(operator) {
        console.log('auxiliaryOperation.renderOperator()', operator);
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

    modifyOpposite(displayString) {
        console.log('modifyOpposite() start:', displayString);
        displayString = displayString.replace('--', '+');
        displayString = displayString.replace('+-', '-');
        console.log('modifyOpposite() return:', displayString);
        return displayString;
    },

    updateDisplay(copy) {
        console.log('updateDisplay() start:', copy);
        let displayString = this.display.innerText;
        displayString = copy.replace(/,/g, '');
        displayString = this.modifyOpposite(displayString);
        console.log('updateDisplay() output:', displayString);
        this.display.innerText = displayString;
    },

    toArchive(copy, result) {
        console.log('auxiliaryOperation.clear() start copy:', copy, 'result:', result);
        copy = copy.replace(/,/g, '') + result;
        copy = copy.replace(/x2/g, `<sup>2</sup>`);
        copy = this.modifyOpposite(copy);
        console.log('auxiliaryOperation.clear output:', copy);
        this.archive.innerHTML += `${copy}<hr>`;
    },

    reformatArray(array) {
        console.log('reformat() start array:', array);
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case '+':
                    console.log('found +');
                    array.splice(i, 1);
                    break;
                case '-':
                    console.log('found -');
                    array.splice(i, 1);
                    array[i] *= -1;
                    break;
            }
        }
        console.log('reformat() return:', array);
        return array;
    },

    modifyArrayByPrecedence(array) {
        console.log('modifyArrayByPrecedence() start array:', array);
        for (const el of array) {
            if (el === '*' || el === '÷') {
                console.log('found:', el);
                const idx = array.indexOf(el);
                const bufArr = [array[idx - 1], el, array[idx + 1]];
                array.splice(idx - 1, 3);
                array = bufArr.concat(array)
            }
        }
        console.log('modifyArrayByPrecedence() return array:', array);
        return array;
    }
};

window.onload = () => {
    console.log('listening to the user\'s click...');
    const display = document.getElementById('display');
    let numArray = [];
    let numString = '';
    addEventListener('click', event => {
        // debugger;
        const button = event.target;
        if (button.tagName === 'BUTTON') {      // checks if a button was pressed
            console.log('button was clicked');
            const action = button.dataset.action;
            console.log(`chosen action: ${action}`);
            const buttonContent = button.innerText;
            console.log(`clicked button content: ${buttonContent}`);
            if (display.innerHTML === '0' ||
                numArray[1] === '=' ||
                numArray.length === 1 &&
                action !== 'opposite')
            {
                numArray = [];
                display.innerHTML = '';
            }
            if (!action) {  // if the number button was pressed
                display.innerHTML += buttonContent;
                numString += buttonContent;
            } else if (action !== 'backspace') {    // if the operator button was pressed
                display.innerHTML += auxiliaryOperation.renderOperator(action);
                if (numString !== '') {
                    numArray.push(+numString);
                }
                numString = '';
                const lastNumArrayChar = numArray[numArray.length - 1];
                if (isNaN(lastNumArrayChar) && lastNumArrayChar !== 'x2' && lastNumArrayChar !== '√') { // fixes two consecutive operators issue
                    numArray[numArray.length - 1] = buttonContent;
                    display.innerText = display.innerText.slice(0, -2) + buttonContent;
                } else {
                    if (action === 'opposite' && !isNaN(lastNumArrayChar)) {
                        numArray[numArray.length - 1] = math.opposite(numArray[numArray.length - 1]);
                        const copy = numArray.toString();
                        auxiliaryOperation.updateDisplay(copy);
                    } else {
                        numArray.push(buttonContent);
                    }
                }
                console.log('numArray:', numArray);
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
                    const copy = numArray.toString();
                    const total = math.calculate(auxiliaryOperation.modifyArrayByPrecedence(auxiliaryOperation.reformatArray(numArray)));
                    auxiliaryOperation.renderResult(total);
                    auxiliaryOperation.toArchive(copy, total);
                    break;
            }
        }
    });

};

