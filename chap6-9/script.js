var a = 10;
document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("-----------------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br><br>");



var a = 2, b = 1;
var result = --a - --b + ++b + b--;


document.write("a is 1<br>");
document.write("b is 0<br>");
document.write("result is " + result + "<br><br><br>");



var userName = prompt("Enter your name:");
if (userName) {
    alert("Hello " + userName + "! Welcome.");
}



var num = prompt("Enter a number for table:", 5);
if (num === "" || num === null) {
    num = 5;
}
num = Number(num);

document.write("<h2>Table of " + num + "</h2>");
document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br><br><br>");


var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarksPerSub = 100;

var marks1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));

var grandTotalMarks = totalMarksPerSub * 3;
var grandObtainedMarks = marks1 + marks2 + marks3;
var totalPercentage = (grandObtainedMarks / grandTotalMarks) * 100;

document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSub) * 100) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSub) * 100) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSub) * 100) + "%</td></tr>");
document.write("<tr><th></th><th>" + grandTotalMarks + "</th><th>" + grandObtainedMarks + "</th><th>" + totalPercentage.toFixed(0) + "%</th></tr>");
document.write("</table>");