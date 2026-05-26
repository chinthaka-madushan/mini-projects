const buttonBox = document.querySelector('.button-box');
const displaySmall = document.getElementById('display__small');
const displayLarge = document.getElementById('display__large');

buttonBox.addEventListener('click', (clickInfo) => {
    if (!clickInfo.target.classList.contains('btn')) {
        return;
    }
    let value = clickInfo.target.textContent;
    console.log(value);
    displayLarge.textContent = value;

    if (value === 'AC') {
        clearDisplay();
    }
    if (value === '=') {
        try {
            largeValue = calculate(expression);
            smallValue = expression;
            updateDisplay();
        } catch (e) {
            displayLarge.textContent = 'Error';
            largeValue = '0';
        }
    }
});

function updateDisplay() {
    displaySmall.textContent = '';
    displayLarge.textContent = '0';
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
    for(let  i = 0; i<expression.length; i++){
        let char = expression[i];
        if("+-*/".includes(char)){
            if(num === ''){
                if(num === '-'){
                    //todo
                }else{

                }
            }
        }
    }
}