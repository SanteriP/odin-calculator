let operand1 = "";
let operand2 = "";
operator = "";
total = "";

const screenNumbers = document.querySelector(".screen-numbers");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let keyDown = new KeyboardEvent(`keydown`, {key: button.textContent});
        window.dispatchEvent(keyDown);
    });
})



addEventListener('keydown', (event) => {
    console.log(event.key);
    if(total !== "") {
        total = "";
        console.log("Total reset");
        screenNumbers.textContent = "";
    }

    if(event.key === "Backspace" && operand2 === "" && operator === "") {
        operand1 = operand1.slice(0,-1);
        screenNumbers.textContent = screenNumbers.textContent.slice(0,-1);
    }

    if(event.key === "Backspace" && operand2 !== "") {
        operand2 = operand2.slice(0,-1);
        if (operand1.length > 0) {
            screenNumbers.textContent = screenNumbers.textContent.slice(0,-1);
        }
    }



    if((event.key >= 0 || event.key <= 9) && operator === "") {
        operand1 += event.key;
        console.log(`operand1: ${operand1}`);
        screenNumbers.textContent += event.key
    }
    else if ((event.key >= 0 || event.key <= 9) && operator != "") {
        operand2 += event.key;
        console.log(`operand2: ${operand2}`)
        screenNumbers.textContent += event.key;
    };

    if((event.key === "+"
    || event.key === "-"
    || event.key === "*"
    || event.key === "/")
    && operand1 !== ""
    && operand2 === "") {
        event.preventDefault();
        operator = event.key;
        console.log(operator);
        screenNumbers.textContent += event.key
    };

    if((event.key === "+"
    || event.key === "-"
    || event.key === "*"
    || event.key === "/")
    && operand2 !== "") {
        event.preventDefault();
        operand1 = operate(operator,+operand1,+operand2);
        operator = event.key;
        operand2 = "";
        console.log(operator);
        console.log(`operand1 after operation: ${operand1}`)
        screenNumbers.textContent = operand1 + event.key;
    };

    if((event.key === "Enter" || event.key === "=")
    && (operand1 !== "")
    && (operand2 !== "")) {
        total = operate(operator,+operand1,+operand2);
        console.log(total);
        operand1 = "";
        operand2 = "";
        operator = "";
        screenNumbers.textContent = total;
    };
});

function operate(operator,operand1,operand2) {
    if (operator === "+") {
        return operand1 + operand2;
    };
    if (operator === "-") {
        return operand1 - operand2;
    };
    if (operator === "*") {
        return operand1 * operand2;
    };
    if (operator === "/") {
        return (operand1 / operand2).toFixed(3);
    };
}