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
                largeValue = calculate(expression);
                smallValue = expression;
                updateDisplay();
            } catch (e) {
                displayLarge.textContent = 'Error';
                largeValue = '0';
            }
            break;
        default:
            //todo
    }
});

function updateDisplay() {
    displaySmall.textContent = smallValue;
    displayLarge.textContent = largeValue;
}

function clearDisplay() {
    smallValue = '';
    largeValue = '0';
    updateDisplay();
}

function calculate(expression) {
    let numbers = [];
    let operators = [];
    let num = '';
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if ("+-*/".includes(char)) {
            if (num === '') {
                if (char === '-') {
                    //todo
                } else {
                    //todo
                }
            } else {
                //todo
            }
        } else {
            num += char;
        }
    }
}