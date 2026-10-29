// Question 1 Function
function linkAlert() {
    alert("Aapne link par click kiya hai!");
}

// Question 2 Function
function phoneAlert() {
    alert("Thanks for purchasing a phone from us");
}

// Question 3 Function
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.remove();
}

// Question 4 Functions
function changePic() {
    document.getElementById("myImage").src = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200";
}

function resetPic() {
    document.getElementById("myImage").src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200";
}

// Question 5 Functions
var count = 0;

function increaseCounter() {
    count++;
    document.getElementById("counterValue").innerHTML = count;
}

function decreaseCounter() {
    count--;
    document.getElementById("counterValue").innerHTML = count;
}