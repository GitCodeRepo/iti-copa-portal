// Array to hold records
let records = JSON.parse(localStorage.getItem("records")) || [];

let editIndex = -1;

// Display Records

function displayRecords() {

    let table = document.getElementById("recordTable");

    table.innerHTML = "";

    records.forEach((record, index) => {

        table.innerHTML += `
        <tr>
            <td>${record.name}</td>
            <td>${record.role}</td>
            <td>${record.email}</td>

            <td>

            <button onclick="editRecord(${index})">
            Edit
            </button>

            <button onclick="deleteRecord(${index})">
            Delete
            </button>

            </td>

        </tr>
        `;
    });

}

// Save Form Data

document.getElementById("recordForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let role =
    document.getElementById("role").value;

    let email =
    document.getElementById("email").value;

    let data = {name, role, email};

    if(editIndex === -1){

        records.push(data);

    } else {

        records[editIndex] = data;

        editIndex = -1;
    }

    localStorage.setItem(
        "records",
        JSON.stringify(records)
    );

    displayRecords();

    this.reset();
});

// Edit Record

function editRecord(index){

    document.getElementById("name").value =
    records[index].name;

    document.getElementById("role").value =
    records[index].role;

    document.getElementById("email").value =
    records[index].email;

    editIndex = index;
}

// Delete Record

function deleteRecord(index){

    if(confirm("Delete Record?")){

        records.splice(index,1);

        localStorage.setItem(
            "records",
            JSON.stringify(records)
        );

        displayRecords();
    }
}

// Initial Load
displayRecords();
