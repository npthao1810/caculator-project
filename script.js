const display = document.querySelector("#screen");
const digit = document.querySelectorAll(".digit-number");
const digitArr = Array.from(digit);
const operatorBtn = document.querySelectorAll(".operator");
const operatorArr = Array.from(operatorBtn);
const equalBtn = document.querySelector("#but-equal");
const deleteBtn = document.querySelector("#but-delete");
let firstNum = null;
let secondNum = null;
let operator = null;

const add = function (a,b) {
    return (a+b);
}
const subtract = function (a,b) {
    return (a-b);
}
const multiply = function (a,b) {
    return (a*b);
}
const divide = function (a,b) {
    return (a/b);
}

const getNums = function(event) {
    let targetId = event.target.textContent;
    // display.textContent = targetId;
    if (firstNum === null) {
        firstNum = parseInt(targetId, 10)
        display.textContent = firstNum
    } else {
        secondNum = parseInt(targetId, 10)
        display.textContent = secondNum
    }
}

const handleOperatorBtn = function(event) {
    operator = event.target.id;
    display.textContent = event.target.textContent;
}

const handleDeleteBtn = function(event) {
    firstNum = null;
    secondNum = null;
    operator = null;
    display.textContent = "";
}

const handleEqualBtn = function (event) {
    if ((firstNum !== null) && (secondNum !== null)) {
        if (operator === "add") {
            display.textContent = add(firstNum, secondNum)
        }
        if (operator === "subtract") {
            display.textContent = subtract(firstNum, secondNum)
        }
        if (operator === "multiply") {
            display.textContent = multiply(firstNum, secondNum)
        }
        if (operator === "divide") {
            display.textContent = divide(firstNum, secondNum)
        }
    }
}

for (let index=0 ; index < digitArr.length ; index++) {
    digitArr[index].addEventListener('click',getNums)
}

for (let index=0 ; index < operatorArr.length ; index++) {
    operatorArr[index].addEventListener('click',handleOperatorBtn)
}

equalBtn.addEventListener('click',handleEqualBtn);
deleteBtn.addEventListener('click',handleDeleteBtn);

