const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let expression = "";
function updateDisplay() {
    display.textContent = expression || "0";
}
function clearAll() {
    expression = "";
    updateDisplay();
}

function calculate(expr) {
    let numbers = [];
    let operators = [];
    let num = "";
    for (let i = 0; i < expr.length; i++) {
        let char = expr[i];
        if ("+-*/".includes(char)) {
            if (num === "") return 0;
            numbers.push(parseFloat(num));
            operators.push(char);
            num = "";
        } else {
            num += char;
        }
    }
    numbers.push(parseFloat(num));
    // handle * and /
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*" || operators[i] === "/") {
            let result =
                operators[i] === "*"
                    ? numbers[i] * numbers[i + 1]
                    : numbers[i] / numbers[i + 1];

            numbers.splice(i, 2, result);
            operators.splice(i, 1);
            i--;
        }
    }
    // handle + and -
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") result += numbers[i + 1];
        else if (operators[i] === "-") result -= numbers[i + 1];
    }
    return result;
}
// button events
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;
        // CLEAR
        if (value === "C") {
            clearAll();
            return;
        }
        // BACKSPACE
         
        // EQUAL
        if (value === "=") {
            try {
                expression = calculate(expression).toString();
                updateDisplay();
            } catch {
                display.textContent = "Error";
                expression = "";
            }
            return;
        }
        // normal input
        expression += value;
        updateDisplay();
    });
});