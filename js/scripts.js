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
  } if (operator === 'subtract') {
    return subtract(n1, n2);
  } if (operator === 'multiply') {
    return multiply(n1, n2);
  } if (operator === 'divide') {
    return divide(n1, n2);
  }

  return 'Error: operator unknown';
}

const display = document.querySelector('#display');

let displayValue = '0';
display.textContent = displayValue;

function updateDisplay(input) {
  if (displayValue === '0' && input !== 'Clear') {
    displayValue = input;
  } else if (input === 'Clear') {
    displayValue = '0';
  } else {
    displayValue += input;
  }
  display.textContent = displayValue;
}

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', () => {
  updateDisplay('Clear');
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    updateDisplay(e.target.textContent);
  });
});
