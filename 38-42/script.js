
function power(a, b) {
    return Math.pow(a, b);
}

function question1() {
    let a = Number(document.getElementById("a1").value);
    let b = Number(document.getElementById("b1").value);

    document.getElementById("result1").innerHTML = power(a, b);
}

function question2() {
    let year = Number(document.getElementById("year").value);

    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        document.getElementById("result2").innerHTML = "Leap Year";
    } else {
        document.getElementById("result2").innerHTML = "Not a Leap Year";
    }
}


function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    let s = semiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function question3() {
    let a = Number(document.getElementById("sideA").value);
    let b = Number(document.getElementById("sideB").value);
    let c = Number(document.getElementById("sideC").value);

    if (a + b > c && a + c > b && b + c > a) {
        document.getElementById("result3").innerHTML =
            "Area = " + triangleArea(a, b, c);
    } else {
        document.getElementById("result3").innerHTML =
            "Invalid Triangle";
    }
}

function average(a, b, c) {
    return (a + b + c) / 3;
}

function percentage(a, b, c) {
    return ((a + b + c) / 300) * 100;
}

function mainFunction() {
    let a = Number(document.getElementById("marks1").value);
    let b = Number(document.getElementById("marks2").value);
    let c = Number(document.getElementById("marks3").value);

    let avg = average(a, b, c);
    let per = percentage(a, b, c);

    document.getElementById("result4").innerHTML =
        "Average = " + avg + "<br>Percentage = " + per + "%";
}


function myIndexOf(text, character) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] == character) {
            return i;
        }
    }
    return -1;
}

function question5() {
    let text = document.getElementById("text5").value;
    let character = document.getElementById("char5").value;

    document.getElementById("result5").innerHTML =
        "Index = " + myIndexOf(text, character);
}


function question6() {
    let sentence = document.getElementById("text6").value;
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i].toLowerCase();

        if (ch != "a" && ch != "e" && ch != "i" &&
            ch != "o" && ch != "u") {
            result += sentence[i];
        }
    }

    document.getElementById("result6").innerHTML = result;
}


function question7() {
    let sentence = document.getElementById("text7").value.toLowerCase();
    let count = 0;

    for (let i = 0; i < sentence.length - 1; i++) {
        let pair = sentence[i] + sentence[i + 1];

        switch (pair) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
                break;
        }
    }

    document.getElementById("result7").innerHTML =
        "Total Occurrences = " + count;
}


function meters(km) {
    return km * 1000;
}

function feet(km) {
    return km * 3280.84;
}

function inches(km) {
    return km * 39370.1;
}

function centimeters(km) {
    return km * 100000;
}

function question8() {
    let km = Number(document.getElementById("distance").value);

    document.getElementById("result8").innerHTML =
        "Meters = " + meters(km) +
        "<br>Feet = " + feet(km) +
        "<br>Inches = " + inches(km) +
        "<br>Centimeters = " + centimeters(km);
}


function question9() {
    let hours = Number(document.getElementById("hours").value);
    let overtime = 0;

    if (hours > 40) {
        overtime = (hours - 40) * 12;
    }

    document.getElementById("result9").innerHTML =
        "Overtime Pay = Rs. " + overtime;
}


function question10() {
    let amount = Number(document.getElementById("amount").value);

    if (amount < 0 || amount % 10 != 0) {
        document.getElementById("result10").innerHTML =
            "Enter a valid amount";
        return;
    }

    let hundred = Math.floor(amount / 100);
    amount = amount % 100;

    let fifty = Math.floor(amount / 50);
    amount = amount % 50;

    let ten = Math.floor(amount / 10);

    document.getElementById("result10").innerHTML =
        "100 Notes = " + hundred +
        "<br>50 Notes = " + fifty +
        "<br>10 Notes = " + ten;
}
