
var screen = document.getElementById("screen");

var firstNumber = null;
var currentOperator = "";
var waitingForNumber = true;
var memory = 0;

document.body.style.margin = "0";
document.body.style.minHeight = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "#eeeeee";
document.body.style.fontFamily = "Arial, sans-serif";

var calculator = document.getElementById("calculator");
calculator.style.width = "300px";
calculator.style.padding = "22px";
calculator.style.backgroundColor = "#292929";
calculator.style.border = "5px solid #555";
calculator.style.borderRadius = "18px";
calculator.style.boxShadow = "0 10px 25px #999";
calculator.style.textAlign = "center";

var heading = document.querySelector("h1");
heading.style.color = "white";
heading.style.marginTop = "0";
heading.style.marginBottom = "12px";
heading.style.fontSize = "25px";

var google = document.getElementById("google");
google.style.display = "block";
google.style.fontSize = "22px";
google.style.fontWeight = "bold";
google.style.textDecoration = "none";
google.style.marginBottom = "15px";

screen.style.backgroundColor = "#c8d0c1";
screen.style.color = "#182018";
screen.style.height = "55px";
screen.style.marginBottom = "18px";
screen.style.padding = "8px";
screen.style.boxSizing = "border-box";
screen.style.border = "4px solid #777";
screen.style.borderRadius = "5px";
screen.style.textAlign = "right";
screen.style.fontSize = "30px";
screen.style.overflow = "hidden";

var buttons = document.querySelectorAll("button");

document.getElementById("buttons").style.display = "grid";
document.getElementById("buttons").style.gridTemplateColumns =
    "repeat(5, 1fr)";
document.getElementById("buttons").style.gap = "7px";

for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.height = "43px";
    buttons[i].style.borderRadius = "6px";
    buttons[i].style.border = "1px solid #888";
    buttons[i].style.backgroundColor = "#b8b8b8";
    buttons[i].style.color = "#111";
    buttons[i].style.fontSize = "17px";
    buttons[i].style.fontWeight = "bold";
    buttons[i].style.cursor = "pointer";

    buttons[i].onmouseover = function() {
        this.style.backgroundColor = "#ffffff";
    };

    buttons[i].onmouseout = function() {
        if (this.className === "operation") {
            this.style.backgroundColor = "#444";
            this.style.color = "white";
        } else if (this.className === "memory") {
            this.style.backgroundColor = "#555";
            this.style.color = "white";
        } else if (this.className === "on") {
            this.style.backgroundColor = "#1684e8";
            this.style.color = "white";
        } else if (this.className === "equals") {
            this.style.backgroundColor = "#1684e8";
            this.style.color = "white";
        } else {
            this.style.backgroundColor = "#b8b8b8";
            this.style.color = "#111";
        }
    };

    if (buttons[i].className === "operation") {
        buttons[i].style.backgroundColor = "#444";
        buttons[i].style.color = "white";
    }

    if (buttons[i].className === "memory") {
        buttons[i].style.backgroundColor = "#555";
        buttons[i].style.color = "white";
        buttons[i].style.fontSize = "13px";
    }

    if (buttons[i].className === "on" ||
        buttons[i].className === "equals") {
        buttons[i].style.backgroundColor = "#1684e8";
        buttons[i].style.color = "white";
    }
}

function press(value) {
    if (waitingForNumber) {
        screen.innerText = value === "." ? "0." : value;
        waitingForNumber = false;
    } else {
        if (value === "." && screen.innerText.indexOf(".") !== -1) {
            return;
        }

        if (screen.innerText === "0" && value !== ".") {
            screen.innerText = value;
        } else {
            screen.innerText = screen.innerText + value;
        }
    }
}

// Plus, minus, multiply, divide
function chooseOperator(op) {
    if (currentOperator !== "" && !waitingForNumber) {
        calculate();
    }

    firstNumber = Number(screen.innerText);
    currentOperator = op;
    waitingForNumber = true;
}


function calculate() {
    if (currentOperator === "" || firstNumber === null) {
        return;
    }

    var secondNumber = Number(screen.innerText);
    var answer;

    if (currentOperator === "+") {
        answer = firstNumber + secondNumber;
    } else if (currentOperator === "-") {
        answer = firstNumber - secondNumber;
    } else if (currentOperator === "*") {
        answer = firstNumber * secondNumber;
    } else if (currentOperator === "/") {
        if (secondNumber === 0) {
            screen.innerText = "Cannot divide by 0";
            firstNumber = null;
            currentOperator = "";
            waitingForNumber = true;
            return;
        }
        answer = firstNumber / secondNumber;
    }

    screen.innerText = String(Number(answer.toPrecision(10)));
    firstNumber = null;
    currentOperator = "";
    waitingForNumber = true;
}


function clearAll() {
    screen.innerText = "0";
    firstNumber = null;
    currentOperator = "";
    waitingForNumber = true;
}

function clearEntry() {
    screen.innerText = "0";
    waitingForNumber = true;
}


function deleteNum() {
    if (waitingForNumber) {
        return;
    }

    var value = screen.innerText;

    if (value.length > 1) {
        screen.innerText = value.slice(0, -1);
    } else {
        screen.innerText = "0";
    }
}


function percent() {
    screen.innerText = String(Number(screen.innerText) / 100);
    waitingForNumber = true;
}


function squareRoot() {
    var value = Number(screen.innerText);

    if (value < 0) {
        screen.innerText = "Error";
    } else {
        screen.innerText = String(Math.sqrt(value));
    }

    waitingForNumber = true;
}


function changeSign() {
    if (screen.innerText !== "0") {
        screen.innerText = String(Number(screen.innerText) * -1);
    }
}


function memoryPlus() {
    memory = memory + Number(screen.innerText);
}

function memoryMinus() {
    memory = memory - Number(screen.innerText);
}

function memoryRecall() {
    screen.innerText = String(memory);
    waitingForNumber = true;
}
