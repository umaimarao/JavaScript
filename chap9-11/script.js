var city = prompt("Enter city name:");
if (city === "Karachi" || city === "karachi") {
    alert("Welcome to city of lights");
}


var gender = prompt("Enter your gender (male/female):");
if (gender === "male" || gender === "Male") {
    alert("Good Morning Sir.");
} else if (gender === "female" || gender === "Female") {
    alert("Good Morning Ma'am.");
}


var color = prompt("Enter color of road traffic signal:");
if (color === "Red" || color === "red") {
    alert("Must Stop");
} else if (color === "Yellow" || color === "yellow") {
    alert("Ready to move");
} else if (color === "Green" || color === "green") {
    alert("Move now");
}


var fuel = prompt("Enter remaining fuel in car (in litres):");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var totalCost = 20000;
var laborCost = 2000;
var totalCost = laborCost + totalCost;
if (totalCost === laborCost + totalCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}


var sub1 = +prompt("Enter marks for subject 1:");
var sub2 = +prompt("Enter marks for subject 2:");
var sub3 = +prompt("Enter marks for subject 3:");
var totalMarks = +prompt("Enter total marks:");

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");

if (percentage >= 80) {
    document.write("Grade: A-one<br>");
    document.write("Remarks: Excellent<br>");
} else if (percentage >= 70) {
    document.write("Grade: A<br>");
    document.write("Remarks: Good<br>");
} else if (percentage >= 60) {
    document.write("Grade: B<br>");
    document.write("Remarks: You need to improve<br>");
} else {
    document.write("Grade: Fail<br>");
    document.write("Remarks: Sorry<br>");
}


var secretNumber = 7;
var userGuess = +prompt("Guess the secret number (1 to 10):");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}


var num = +prompt("Enter a number to check divisibility by 3:");
if (num % 3 === 0) {
    alert("The number is divisible by 3");
}


var numCheck = +prompt("Enter a number to check Even or Odd:");
if (numCheck % 2 === 0) {
    alert("It is an Even number");
} else {
    alert("It is an Odd number");
}


var temp = +prompt("Enter temperature:");
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today's Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
}


var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

if (operation === "+") {
    alert("Result: " + (num1 + num2));
} else if (operation === "-") {
    alert("Result: " + (num1 - num2));
} else if (operation === "*") {
    alert("Result: " + (num1 * num2));
} else if (operation === "/") {
    alert("Result: " + (num1 / num2));
} else if (operation === "%") {
    alert("Result: " + (num1 % num2));
}