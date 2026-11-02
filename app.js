
document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("signupResult").innerHTML =
        "<h3>Signup Successful!</h3>" +
        "Name: " + name + "<br>" +
        "Email: " + email;

    this.reset();
};



function readMore() {

    let text = document.getElementById("moreText");
    let button = document.getElementById("readBtn");

    if (text.style.display == "none") {
        text.style.display = "inline";
        button.innerHTML = "Read Less";
    }
    else {
        text.style.display = "none";
        button.innerHTML = "Read More";
    }
}



let students = [];
let editIndex = -1;


document.getElementById("studentForm").onsubmit = function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let studentClass = document.getElementById("studentClass").value;
    let roll = document.getElementById("studentRoll").value;

    students.push({
        name: name,
        studentClass: studentClass,
        roll: roll
    });

    showStudents();

    this.reset();
};



function showStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        let row = table.insertRow();

        row.insertCell(0).textContent = students[i].name;
        row.insertCell(1).textContent = students[i].studentClass;
        row.insertCell(2).textContent = students[i].roll;

        let action = row.insertCell(3);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";

        deleteBtn.onclick = function() {
            students.splice(i, 1);
            showStudents();
        };

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";

        editBtn.onclick = function() {
            editStudent(i);
        };

        action.appendChild(deleteBtn);
        action.appendChild(editBtn);
    }
}



function editStudent(index) {

    editIndex = index;

    document.getElementById("editName").value =
        students[index].name;

    document.getElementById("editClass").value =
        students[index].studentClass;

    document.getElementById("editRoll").value =
        students[index].roll;

    document.getElementById("editForm").style.display = "block";
}




document.getElementById("editForm").onsubmit = function(event) {

    event.preventDefault();

    students[editIndex].name =
        document.getElementById("editName").value;

    students[editIndex].studentClass =
        document.getElementById("editClass").value;

    students[editIndex].roll =
        document.getElementById("editRoll").value;

    showStudents();

    document.getElementById("editForm").style.display = "none";

    this.reset();
};
