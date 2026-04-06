const display = document.querySelector("#screen");
const digit = document.querySelectorAll(".digit-number");
const digitArr = Array.from(digit);
const operatorBtn = document.querySelectorAll(".operator");
const operatorArr = Array.from(operatorBtn);
const equalBtn = document.querySelector("#but-equal");
const deleteBtn = document.querySelector("#but-delete");
let firstNum = 0;
let secondNum = 0;
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
    return (rounda/b);
}


const getNums = function(event) {
    let targetId = event.target.textContent;
    let targetIdNum = parseInt(targetId, 10);
    if (operator === null) {
        firstNum = firstNum*10 + targetIdNum;
        display.textContent = firstNum;
    } else {
        secondNum = secondNum*10 + targetIdNum;
        display.textContent = secondNum;
    }
}

const handleOperatorBtn = function(event) {
    if (operator !== null) {
        handleEqualBtn();
    }
    operator = event.target.id;
    // event.target.style.backgroundColor = "pink";
    // display.textContent = event.target.textContent;
    }
    

const handleDeleteBtn = function(event) {
    firstNum = 0;
    secondNum = 0;
    operator = null;
    display.textContent = "";
}

const handleEqualBtn = function (event) {
    console.log("firstNum ", firstNum, "secondNum ", secondNum, "operator ", operator)
    if ((firstNum !== 0) && (secondNum !== 0)) {
        if (operator === "add") {
            display.textContent = add(firstNum, secondNum);
            firstNum = add(firstNum, secondNum);
        }
        if (operator === "subtract") {
            display.textContent = subtract(firstNum, secondNum);
            firstNum = subtract(firstNum, secondNum);
        }
        if (operator === "multiply") {
            display.textContent = multiply(firstNum, secondNum);
            firstNum = multiply(firstNum, secondNum);``
        }
        if (operator === "divide") {
            if (secondNum === 0) {
                display.textContent = "Error divide by 0 ";
            }
            display.textContent = divide(firstNum, secondNum);
            firstNum = divide(firstNum, secondNum);
        }
    }
    secondNum = 0;
}

for (let index=0 ; index < digitArr.length ; index++) {
    digitArr[index].addEventListener('click',getNums)
}

for (let index=0 ; index < operatorArr.length ; index++) {
    operatorArr[index].addEventListener('click',handleOperatorBtn)
}

equalBtn.addEventListener('click',handleEqualBtn);
deleteBtn.addEventListener('click',handleDeleteBtn);

