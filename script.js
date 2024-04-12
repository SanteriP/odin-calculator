let operand1 = "";
let operand2 = "";
operator = "";
total = "";

addEventListener('keydown', (event) => {
    if((event.key >= 0 || event.key <= 9) && operator === "") {
        operand1 += event.key;
        console.log(`operand1: ${operand1}`);
    }
    else if ((event.key >= 0 || event.key <= 9) && operator != "") {
        operand2 += event.key;
        console.log(`operand2: ${operand2}`)
    };

    if((event.key === "+"
    || event.key === "-"
    || event.key === "*"
    || event.key === "/")
    && operand2 === "") {
        operator = event.key;
        console.log(operator);
    };

    if((event.key === "+"
    || event.key === "-"
    || event.key === "*"
    || event.key === "/")
    && operand2 !== "") {
        operand1 = operate(operator,+operand1,+operand2);
        operator = event.key;
        operand2 = "";
        console.log(operator);
        console.log(`operand1 after operation: ${operand1}`)
    };

    if(event.key === "Enter"
    && (operand1 !== "")
    && (operand2 !== "")) {
        result = operate(operator,+operand1,+operand2);
        console.log(result);
        operand1 = "";
        operand2 = "";
        operator = "";

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
        return operand1 / operand2;
    };
}