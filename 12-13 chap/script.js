var ch = prompt("Enter a character or number:");
var charCode = ch.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert("Input is a number");
} else if (charCode >= 65 && charCode <= 90) {
    alert("Input is an uppercase letter");
} else if (charCode >= 97 && charCode <= 122) {
    alert("Input is a lowercase letter");
} else {
    alert("Input is another character");
}



var num1 = Number(prompt("Enter first integer:"));
var num2 = Number(prompt("Enter second integer:"));

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("Both numbers are equal");
}

var checkNum = Number(prompt("Enter a number:"));

if (checkNum > 0) {
    alert("The number is positive");
} else if (checkNum < 0) {
    alert("The number is negative");
} else {
    alert("The number is zero");
}



var char = prompt("Enter a single character:").toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert(true);
} else {
    alert(false);
}



var correctPassword = "myPassword123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}



var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);



var time = Number(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));

if (time >= 0000 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}