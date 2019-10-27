"use strict";

function renderExpression() {
    let number = '';
    let numArr = [];
    const display = document.getElementById('display');
    addEventListener('click', event => {
        const button = event.target;
        if (button.tagName === 'BUTTON') {
            if (display.innerHTML == 0) {
                display.innerHTML = '';
            }
            const buttonHTML = button.innerHTML;
            display.innerHTML += buttonHTML;

            number += buttonHTML;
        }
    });
}

const mathOperation = {
    add(x, y) {
        return x + y;
    },

    subtract(x, y) {
        return x - y;
    },

    multiply(x, y) {
        return x - y;
    },

    divide(x, y) {
        return y !== 0 ? x / y : false;
    },

    squareRoot(x) {
        return Math.sqrt(x);
    },

    squared(x) {
        return Math.pow(x, 2);
    }
};

const auxiliaryOperation = {
    display: document.getElementById('display'),

    clear() {
        this.display.innerHTML = '';
    },

    backspace() {

    }
};

window.onload = () => {
    renderExpression();
};

