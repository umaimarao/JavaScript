var date = new Date();
console.log(date);


var date = new Date();
var month = date.getMonth();

var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

console.log(months[month]);


var date = new Date();
var day = date.getDay();

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(days[day]);


var date = new Date();
var day = date.getDay();

if (day == 0 || day == 6) {
    console.log("It's Fun day");
}


var date = new Date();
var day = date.getDate();

if (day < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}


var date = new Date();
var minutes = date.getTime() / (1000 * 60);

console.log(minutes);


var date = new Date();
var hours = date.getHours();

if (hours < 12) {
    console.log("It's AM");
} else {
    console.log("It's PM");
}


var laterDate = new Date(2020, 11, 31);
console.log(laterDate);


var ramadan = new Date("June 18, 2015");
var today = new Date();

var difference = today.getTime() - ramadan.getTime();
var days = Math.floor(difference / (1000 * 60 * 60 * 24));

console.log(days);



var date1 = new Date("January 1, 1970");
var date2 = new Date("January 1, 2015");

var difference = date2.getTime() - date1.getTime();
var seconds = difference / 1000;

console.log(seconds);



var date = new Date();
var hours = date.getHours();

date.setHours(hours + 1);

console.log(date);



var date = new Date();

date.setFullYear(date.getFullYear() - 100);

console.log(date);



var age = prompt("Enter your age:");

var year = new Date().getFullYear();
var birthYear = year - age;

console.log(birthYear);



var customerName = prompt("Enter customer name:");
var units = prompt("Enter number of units:");
var charges = prompt("Enter charges per unit:");

var netAmount = units * charges;
var surcharge = netAmount * 0.10;
var grossAmount = netAmount + surcharge;

console.log("Customer Name: " + customerName);
console.log("Current Month: " + new Date().getMonth());
console.log("Number of Units: " + units);
console.log("Charges per Unit: " + charges);
console.log("Net Amount Payable: " + netAmount.toFixed(2));
console.log("Late Payment Surcharge: " + surcharge.toFixed(2));
console.log("Gross Amount Payable: " + grossAmount.toFixed(2));
