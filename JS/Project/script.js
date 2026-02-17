let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function saveStudent() {

    let id = document.getElementById("sid").value;
    let name = document.getElementById("sname").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;
    let editIndex = document.getElementById("editIndex").value;

    if(id === "" || name === "" || course === "" || email === "") {
        alert("Fill all fields");
        return;
    }

    let student = { id, name, course, email };

    if(editIndex === "") {
        students.push(student);
    } else {
        students[editIndex] = student;
    }

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
    clearForm();
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Course</th>
    <th>Email</th>
    <th>Action</th>
    </tr>
    `;

    students.forEach((stu, index) => {
        table.innerHTML += `
        <tr>
        <td>${stu.id}</td>
        <td>${stu.name}</td>
        <td>${stu.course}</td>
        <td>${stu.email}</td>
        <td>
        <button onclick="editStudent(${index})">Edit</button>
        <button onclick="deleteStudent(${index})">Delete</button>
        </td>
        </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function editStudent(index) {

    let stu = students[index];

    document.getElementById("sid").value = stu.id;
    document.getElementById("sname").value = stu.name;
    document.getElementById("course").value = stu.course;
    document.getElementById("email").value = stu.email;

    document.getElementById("editIndex").value = index;
}

function searchStudent() {

    let search = document.getElementById("search").value.toLowerCase();

    let filtered = students.filter(stu =>
        stu.name.toLowerCase().includes(search) ||
        stu.id.toLowerCase().includes(search)
    );

    displayFiltered(filtered);
}

function displayFiltered(list) {

    let table = document.getElementById("studentTable");

    table.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Course</th>
    <th>Email</th>
    <th>Action</th>
    </tr>
    `;

    list.forEach((stu, index) => {
        table.innerHTML += `
        <tr>
        <td>${stu.id}</td>
        <td>${stu.name}</td>
        <td>${stu.course}</td>
        <td>${stu.email}</td>
        <td>-</td>
        </tr>
        `;
    });
}

function clearForm() {
    document.getElementById("sid").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
    document.getElementById("editIndex").value = "";
}
