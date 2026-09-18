
var emptyArr = [[], [], []];


var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];


document.write("<h3>Numeric Counting (1 to 10):</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}


var tableNum = +prompt("Enter a number to show its multiplication table:");
var tableLength = +prompt("Enter length of multiplication table:");

document.write("<h3>Multiplication Table of " + tableNum + "</h3>");
document.write("Length " + tableLength + "<br><br>");

for (var i = 1; i <= tableLength; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h3>Fruits List:</h3>");
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<br>");
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}


document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<h3>Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");
for (var i = 1; i < 20; i = i + 2) {
    document.write(i + ", ");
}

document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i = i + 2) {
    document.write(i + "k, ");
}

// Question 7: Search item in bakery array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

var isFound = false;
var foundIndex = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        isFound = true;
        foundIndex = i;
        break;
    }
}

if (isFound === true) {
    alert(userInput + " is available at index " + foundIndex + " in our bakery");
} else {
    alert("We are sorry. " + userInput + " is not available in our bakery");
}

// Question 8: Identify largest number in array
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

document.write("<h3>Array items: " + numbers.join(", ") + "</h3>");
document.write("The largest number is " + largest + "<br>");

// Question 9: Identify smallest number in array
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

document.write("The smallest number is " + smallest + "<br>");

// Question 10: Multiples of 5 ranging 1 to 100
document.write("<h3>Multiples of 5 (1 to 100):</h3>");
for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + ", ");
}