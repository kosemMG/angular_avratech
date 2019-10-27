"use strict";

f/*unction renderExpression() {
    let number = '';
    let numArr = [];
    const display = document.getElementById('display');
    addEventListener('click', event => {
        const button = event.target;
        if (button.tagName === 'BUTTON') {
            const action = button.dataset.action;
            if (display.innerHTML === '0') {
                display.innerHTML = '';
            }
            const buttonHTML = button.innerHTML;
            if (Number.isInteger(+buttonHTML)) {
                display.innerHTML += buttonHTML;
            } else {
                display.innerHTML += renderOperator(action);
            }

        }
    });
}*/

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

function calculate(arr) {

}

const math = {
    add: {
        precedence: 1,
        operation: function (x, y) {
            return x + y;
        }
    },

    subtract: {
        precedence: 1,
        operation: function (x, y) {
            return x - y;
        }
    },

    multiply: {
        precedence: 2,
        operation: function (x, y) {
            return x * y;
        }
    },

    divide: {
        precedence: 2,
        operation: function (x, y) {
            return x * y;
        },
        isInvalidInput: function (x, y) {
            return y === 0 ? 'Division by 0!' : false;
        }

    },

    squareRoot: {
        precedence: 3,
        operation: function (x) {
            return Math.sqrt(x);
        }
    },

    squared: {
        precedence: 3,
        operation: function (x) {
            return Math.pow(x, 2);
        }
    }
};

const auxiliaryOperation = {
    display: document.getElementById('display'),

    clear() {
        this.display.innerHTML = '';
    },

    backspace() {
        this.display.innerText = this.display.innerText.slice(0, -1);
    }
};

window.onload = () => {
    // renderExpression();
    const display = document.getElementById('display');
    addEventListener('click', event => {
        const button = event.target;
        if (button.tagName === 'BUTTON') {
            const action = button.dataset.action;
            if (display.innerHTML === '0') {
                display.innerHTML = '';
            }
            const buttonHTML = button.innerHTML;
            if (Number.isInteger(+buttonHTML)) {
                display.innerHTML += buttonHTML;
            } else {
                display.innerHTML += renderOperator(action);
            }
            switch (action) {


            }
        }

    });

};

