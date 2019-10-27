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

const operation = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a - b;
    },

    divide(a, b) {
        return b !== 0 ? a + b : false;
    }
};

window.onload = () => {
    renderExpression();
};

