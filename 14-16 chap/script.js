
var studentNames1 = []
var studentNames2 = new Array();


var stringsArray = ["HTML", "CSS", "JavaScript"];


var numbersArray = [10, 20, 30, 40];


var booleanArray = [true, false, true];


var mixedArray = ["Ali", 25, true];

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications:</h1>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br><br>");


var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / totalMarks) * 100 + "%<br>");
document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks) * 100 + "%<br>");
document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks) * 100 + "%<br><br>");


var colors = ["Red", "Green", "Blue"];
document.write("<b>Initial Colors:</b> " + colors + "<br>");


var addStart = prompt("Enter color to add at the beginning:");
colors.unshift(addStart);
document.write("<b>After adding to start:</b> " + colors + "<br>");


var addEnd = prompt("Enter color to add at the end:");
colors.push(addEnd);
document.write("<b>After adding to end:</b> " + colors + "<br>");


colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors:</b> " + colors + "<br>");


colors.shift();
document.write("<b>After deleting first color:</b> " + colors + "<br>");


colors.pop();
document.write("<b>After deleting last color:</b> " + colors + "<br>");


var indexToAdd = Number(prompt("At which index do you want to add color?"));
var colorToAdd = prompt("Enter color name:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<b>After adding at index " + indexToAdd + ":</b> " + colors + "<br>");


var indexToDel = Number(prompt("At which index do you want to delete color(s)?"));
var countToDel = Number(prompt("How many colors do you want to delete?"));
colors.splice(indexToDel, countToDel);
document.write("<b>After deleting from index " + indexToDel + ":</b> " + colors + "<br><br>");
var studentScores = [320, 230, 480, 120];
document.write("Scores of Students : " + studentScores + "<br>");
studentScores.sort();
document.write("Ordered Scores of Students : " + studentScores + "<br><br>");


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write("Cities list: " + cities + "<br>");
document.write("Selected cities list: " + selectedCities + "<br><br>");


var arr = ["This ", " is ", " my ", " cat"];
document.write("Array: " + arr + "<br>");
var singleString = arr.join("");
document.write("String: " + singleString + "<br><br>");


var devicesFIFO = [];
devicesFIFO.push("keyboard");
devicesFIFO.push("mouse");
devicesFIFO.push("printer");
devicesFIFO.push("monitor");

document.write("Devices: " + devicesFIFO + "<br>");
document.write("Out: " + devicesFIFO.shift() + "<br>");
document.write("Out: " + devicesFIFO.shift() + "<br>");
document.write("Out: " + devicesFIFO.shift() + "<br>");
document.write("Out: " + devicesFIFO.shift() + "<br><br>");


var devicesLIFO = [];
devicesLIFO.push("keyboard");
devicesLIFO.push("mouse");
devicesLIFO.push("printer");
devicesLIFO.push("monitor");

document.write("Devices: " + devicesLIFO + "<br>");
document.write("Out: " + devicesLIFO.pop() + "<br>");
document.write("Out: " + devicesLIFO.pop() + "<br>");
document.write("Out: " + devicesLIFO.pop() + "<br>");
document.write("Out: " + devicesLIFO.pop() + "<br><br>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(
    "<select>" +
    "<option>" + manufacturers[0] + "</option>" +
    "<option>" + manufacturers[1] + "</option>" +
    "<option>" + manufacturers[2] + "</option>" +
    "<option>" + manufacturers[3] + "</option>" +
    "<option>" + manufacturers[4] + "</option>" +
    "<option>" + manufacturers[5] + "</option>" +
    "</select>"
);