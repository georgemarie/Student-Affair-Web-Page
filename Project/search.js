document.addEventListener('DOMContentLoaded', function () {
    let Students;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Students = JSON.parse(localStorage.Students);
}else{
    Students = []; 
}
// {/* <td>${Students[i].lastName}</td> */}
function DisplayTable(){
    let table = '';
    for(let i = 0 ; i < Students.length ; i++){
        table += `
        <tr>
            <td>${Students[i].firstName} ${Students[i].lastName}</td>
            <td>${Students[i].id}</td>
            <td>${Students[i].level}</td>
            <td>${Students[i].gpa}</td>
            <td>${Students[i].gender}</td>
            <td>${Students[i].dob}</td>
            <td>${Students[i].phone}</td>
            <td>${Students[i].status}</td>
            <td>${Students[i].department}</td>
            <td><button class="slBtn" id="Update" onclick="UpdateSTU(${i})">Update</button></td> 
        </tr>
        `
    }
    document.getElementById('TBody').innerHTML = table;
}

DisplayTable();

// get references to HTML elements
const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#Search");
const searchSelect = document.querySelector("select");
const table = document.querySelector("table");
const rows = table.querySelectorAll("tr");

// add submit event listener to the search form
searchForm.addEventListener("submit", function (event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // retrieve the search value and type
    const searchValue = searchInput.value;
    const searchType = searchSelect.value;
    // console.log(searchValue);
    // console.log(searchType);


    // iterate over each row in the table
    for (let i = 1; i < rows.length; i++) {
        // retrieve the values for the current row
        const level = rows[i].cells[2].textContent;
        const gpa = rows[i].cells[3].textContent;
        const department = rows[i].cells[8].textContent.toUpperCase();
        const id = rows[i].querySelectorAll("td")[1].textContent;
        const status = rows[i].cells[7].textContent;
        const name = rows[i].cells[0].textContent;

        if (status === "active") {
            // check if the current row matches the search criteria
            if (searchType === "ID" && id === searchValue) {
                rows[i].style.display = "";
            }else if (searchType === "Name" && name.includes(searchValue)) {
                rows[i].style.display = "";
            } else if (searchType === "Level" && level.includes(searchValue)) {
                rows[i].style.display = "";
            } else if (searchType === "GPA" && gpa.includes(parseFloat(searchValue).toFixed(2))) {
                rows[i].style.display = "";
            } else if (searchType === "Departement" && department.includes(searchValue.toUpperCase())) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
                console.log(rows[i]);
            }   
        } else {
            rows[i].style.display = "none";
        }
        console.log(i); 
    }
    });

});

function UpdateSTU(i){
    if (window.confirm("Are you sure you want to Update this student information?")) {
        localStorage.setItem("Index",JSON.stringify(i));
        location.href = "Departement-Assignment-Page.html";
    }
}


