var userInput = prompt("Enter any text");
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + userInput.toUpperCase());

var userInput = prompt("Enter any text");
var result = userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write("User input: " + userInput + "<br>");
document.write("Title case: " + result);

var num = 35.36;
var result = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + result);

var username = prompt("Enter username");

if (username.indexOf("@") != -1 ||
    username.indexOf(".") != -1 ||
    username.indexOf(",") != -1 ||
    username.indexOf("!") != -1) {
    alert("Please enter a valid username");
} else {
    document.write("Username: " + username);
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var search = userInput.toLowerCase();
var found = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() == search) {
        found = i;
        break;
    }
}

if (found != -1) {
    document.write(userInput + " is available at index " + found + " in our bakery");
} else {
    document.write("We are sorry, " + userInput + " is not available in our bakery");
}

var password = prompt("Enter password");
var hasAlphabet = false;
var hasNumber = false;

for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasAlphabet = true;
    }

    if (code >= 48 && code <= 57) {
        hasNumber = true;
    }
}

if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    document.write("Password can not begin with a number<br>");
    document.write("Please enter a valid password");
} else if (password.length < 6) {
    document.write("Password must be at least 6 characters long<br>");
    document.write("Please enter a valid password");
} else if (hasAlphabet == false || hasNumber == false) {
    document.write("Password must contain alphabets and numbers<br>");
    document.write("Please enter a valid password");
} else {
    document.write("Password is valid");
}

var university = "University of Karachi";
var arr = university.split(" ");

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

var userInput = prompt("Enter any text");
var lastCharacter = userInput.charAt(userInput.length - 1);

document.write("User input: " + userInput + "<br>");
document.write("Last character of input: " + lastCharacter);

var text = "The quick brown fox jumps over the lazy dog";
var result = text.toLowerCase().split("the").length - 1;

document.write("Text: " + text + "<br>");
document.write("There are " + result + " occurrence(s) of word 'the'");