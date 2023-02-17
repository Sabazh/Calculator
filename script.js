let result = document.getElementById('result');
let number1;
let number2;
let savedOperation;

function addSymbol(symbol) {
    result.innerHTML = result.innerHTML + symbol;
}

function setOperation(operation) {
    savedOperation = operation;
    number1 = Number(result.innerHTML);
    result.innerHTML = '';
}

function calculate() {
    number2 = Number(result.innerHTML);
    if (savedOperation === '+') {
        result.innerHTML = number1 + number2;
    }
    if (savedOperation === '-') {
        result.innerHTML = number1 - number2;
    }    
    if (savedOperation === '*') {
        result.innerHTML = number1 * number2;
    }
    if (savedOperation === '/') {
        result.innerHTML = number1 / number2;
    }
}

function xSquare () {
    number1 = Number(result.innerHTML);
    result.innerHTML = number1 * number1;
}

function clearOperation() {
    result.innerHTML = '';
}