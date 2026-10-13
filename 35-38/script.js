function displayDateTime() {
    var now = new Date();
    console.log("Current Date and Time: " + now);
}
displayDateTime();



function greetUser(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName + "! Welcome.");
}
var fName = prompt("Enter your first name:");
var lName = prompt("Enter your last name:");
greetUser(fName, lName);



function addNumbers(num1, num2) {
    return num1 + num2;
}
var n1 = Number(prompt("Enter first number for sum:"));
var n2 = Number(prompt("Enter second number for sum:"));
var sumResult = addNumbers(n1, n2);
console.log("Sum = " + sumResult);


// Q4: Calculator function
function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid operator!";
    }
}
var calcNum1 = Number(prompt("Enter num 1:"));
var calcNum2 = Number(prompt("Enter num 2:"));
var op = prompt("Enter operator (+, -, *, /):");
console.log("Result: " + calculator(calcNum1, calcNum2, op));



function squareNumber(num) {
    return num * num;
}
var sqInput = Number(prompt("Enter a number to square:"));
console.log("Square = " + squareNumber(sqInput));



function titleCase(string) {
    var splittedStr = string.split(" ");
    for (var i = 0; i < splittedStr.length; i++) {
        var firstLetter = splittedStr[i].charAt(0).toUpperCase();
        var remaining = splittedStr[i].slice(1);
        var str = firstLetter + remaining;
        splittedStr[i] = str;
    }
    var titleCaseStr = splittedStr.join(" ");
    console.log(titleCaseStr);
}
var userString = prompt("Enter a string:");
titleCase(userString);