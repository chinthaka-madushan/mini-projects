const buttonBox = document.querySelector('.button-box');
const displaySmall = document.getElementById('display__small');
const displayLarge = document.getElementById('display__large');
let largeValue = '0';
let smallValue = '';
let expression = '';

buttonBox.addEventListener('click', (clickInfo) => {
    if (!clickInfo.target.classList.contains('btn')) {
        return;
    }
    let value = clickInfo.target.textContent;
    switch (value) {
        case 'AC': clearDisplay(); break;
        case 'DEL': deleteFunction(); break;
        case '=':
            try {
                calculate(expression);
                updateDisplay();
            } catch (e) {
                displayLarge.textContent = 'Error';
                largeValue = '0';
            }
            break;
        default:
            if ("/X-+".includes(value) && "/X-+".includes(expression[expression.length - 1])) {
                expression = expression.slice(0, -1);
            }
            expression += value;
            largeValue = expression;
            updateDisplay();
    }
});

function updateDisplay() {
    displaySmall.textContent = smallValue;
    displayLarge.textContent = largeValue;
}

function clearDisplay() {
    smallValue = '';
    largeValue = '0';
    expression = '';
    updateDisplay();
}

function deleteFunction(){
    expression = expression.slice(0, -1);
    largeValue = expression;
    smallValue = '';
    updateDisplay();
}

function calculate(expr) {
    let numbers = [];
    let operators = [];
    let num = '';
    for (let i = 0; i < expr.length; i++) {
        let char = expr[i];
        if ("+-X/".includes(char) && num !== '' && i != expr.length - 1) {
            operators.push(char);
            numbers.push(parseFloat(num));
            num = '';
        } else if ((char === '-' && i == 0) || !"+-X/".includes(char)) {
            num += char;
        }
    }
    numbers.push(parseFloat(num));

    smallValue = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        smallValue += operators[i];
        smallValue += numbers[i + 1];
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === 'X' || operators[i] === '/') {
            if (operators[i] === 'X') {
                numbers[i] = numbers[i] * numbers[i + 1];
            } else {
                numbers[i] = numbers[i] / numbers[i + 1];
            }
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            numbers[i] = numbers[i] + numbers[i + 1];
        } else {
            numbers[i] = numbers[i] - numbers[i + 1];
        }
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        i--;
    }

    expression = numbers[0].toString();
    largeValue = expression;
}
