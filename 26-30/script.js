var num = prompt("Enter a positive integer:");
num = Number(num);

console.log("Number: " + num);
console.log("Round off value: " + Math.round(num));
console.log("Floor value: " + Math.floor(num));
console.log("Ceil value: " + Math.ceil(num));



var num2 = prompt("Enter a negative floating point number:");
num2 = Number(num2);

console.log("Number: " + num2);
console.log("Round off value: " + Math.round(num2));
console.log("Floor value: " + Math.floor(num2));
console.log("Ceil value: " + Math.ceil(num2));



var number = prompt("Enter a number:");
number = Number(number);

console.log("Absolute value: " + Math.abs(number));



var dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice value: " + dice);



var coin = Math.floor(Math.random() * 2);

if (coin == 0) {
    console.log("Heads");
} else {
    console.log("Tails");
}



var randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random number between 1 and 100: " + randomNumber);



var weight = prompt("Enter your weight:");
weight = parseFloat(weight);

console.log("Your weight is: " + weight);



var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = prompt("Enter a number between 1 and 10:");
userNumber = Number(userNumber);

if (userNumber == secretNumber) {
    console.log("Congratulations! You guessed the secret number.");
} else {
    console.log("Sorry! The secret number was " + secretNumber);
}

