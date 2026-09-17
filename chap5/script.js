var num1 = 3;
var num2 = 5;
var total = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + total + "<br><br>")
document.write("Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + (num1 / num2) + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2) + "<br><br>");

var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br><br>");


var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR<br><br>");


var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
document.write(tableNum + "x1=" + (tableNum * 1) + "<br>");
document.write(tableNum + "x2=" + (tableNum * 2) + "<br>");
document.write(tableNum + "x3=" + (tableNum * 3) + "<br>");
document.write(tableNum + "x4=" + (tableNum * 4) + "<br>");
document.write(tableNum + "x5=" + (tableNum * 5) + "<br>");
document.write(tableNum + "x6=" + (tableNum * 6) + "<br>");
document.write(tableNum + "x7=" + (tableNum * 7) + "<br>");
document.write(tableNum + "x8=" + (tableNum * 8) + "<br>");
document.write(tableNum + "x9=" + (tableNum * 9) + "<br>");
document.write(tableNum + "x10=" + (tableNum * 10) + "<br><br>");


var celsius = 25;
var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromC + "°F<br>");
var fahrenheit = 70;
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "°C<br><br>");


var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;
var cartTotal = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + cartTotal + "<br><br>");


var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");


var totalPKR = (10 * 104.80) + (25 * 28);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");


var singleExpNum = 10;
var resultExp = ((singleExpNum + 5) * 10) / 2;


var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age + "<br><br>");


var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");


var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);