
var count = 0;

var box = document.getElementById("counter");
var heading = document.getElementsByTagName("h1")[0];
var number = document.getElementById("number");
var buttons = document.getElementsByTagName("button");


document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "#e8eaff";
document.body.style.fontFamily = "Arial";


box.style.backgroundColor = "white";
box.style.width = "300px";
box.style.padding = "30px";
box.style.textAlign = "center";
box.style.borderRadius = "20px";
box.style.boxShadow = "0 5px 20px #b5b5d6";


heading.style.color = "#5146c8";
heading.style.fontSize = "28px";


number.style.fontSize = "65px";
number.style.fontWeight = "bold";
number.style.color = "#5146c8";
number.style.margin = "25px";

buttons[0].style.backgroundColor = "#5146c8";
buttons[1].style.backgroundColor = "#eeeeee";
buttons[1].style.color = "#333333";
buttons[2].style.backgroundColor = "#5146c8";

for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.width = "85px";
    buttons[i].style.height = "45px";
    buttons[i].style.border = "none";
    buttons[i].style.borderRadius = "10px";
    buttons[i].style.fontSize = "18px";
    buttons[i].style.cursor = "pointer";
}


function increase() {
    count = count + 1;
    number.innerText = count;
}

function decrease() {
    count = count - 1;
    number.innerText = count;
}

function reset() {
    count = 0;
    number.innerText = count;
}
