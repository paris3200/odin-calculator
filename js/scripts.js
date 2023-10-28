function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function operate(operator, n1, n2) {
  if (operator === 'add') {
    return add(n1, n2);
  }
  if (operator === 'subtract') {
    return subtract(n1, n2);
  }
  if (operator === 'multiply') {
    return multiply(n1, n2);
  }
  if (operator === 'divide') {
    return divide(n1, n2);
  }

  return 'Error: operator unknown';
}

function processDisplay(display) {
  let operator;
  let n1;
  let n2;
  let result;
  if (display.includes('+')) {
    operator = 'add';
    const index = display.indexOf('+');
    n1 = parseFloat(display.slice(0, index));
    n2 = parseFloat(display.slice(index + 1));
    result = operate(operator, n1, n2);
  }

  if (display.includes('-')) {
    operator = 'subtract';
    const index = display.indexOf('-');
    n1 = parseFloat(display.slice(0, index));
    n2 = parseFloat(display.slice(index + 1));
    result = operate(operator, n1, n2);
  }

  if (display.includes('x')) {
    operator = 'multiply';
    const index = display.indexOf('x');
    n1 = parseFloat(display.slice(0, index));
    n2 = parseFloat(display.slice(index + 1));
    result = operate(operator, n1, n2);
  }

  if (display.includes('/')) {
    operator = 'divide';
    const index = display.indexOf('/');
    n1 = parseFloat(display.slice(0, index));
    n2 = parseFloat(display.slice(index + 1));
    result = operate(operator, n1, n2);
  }
  return result;
}

const display = document.querySelector('#display');

let displayValue = '0';
display.textContent = displayValue;

function processButton(input) {
  if (displayValue === '0' && input !== 'Clear' && input !== 'Delete') {
    displayValue = input;
  } else if (input === 'Clear') {
    displayValue = '0';
  } else if (input === 'Delete') {
    if (displayValue.length === 1) {
      displayValue = '0';
    } else {
      displayValue = displayValue.slice(0, displayValue.length - 1);
    }
  } else {
    displayValue += input;
  }
  display.textContent = displayValue;
}

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', () => {
  processButton('Clear');
});

const btnDelete = document.querySelector('#btn-delete');
btnDelete.addEventListener('click', () => {
  processButton('Delete');
});

const btnEqual = document.querySelector('#btn-equal');
btnEqual.addEventListener('click', () => {
  displayValue = processDisplay(displayValue);
  display.textContent = displayValue;
});

const buttons = document.querySelectorAll('#btn');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    processButton(e.target.textContent);
  });
});
