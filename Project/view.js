let Students;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Students = JSON.parse(localStorage.Students);
}else{
    Students = []; 
}


// Wait for the document to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {

    function DisplayTable(){
    let table = '';
    for(let i = 0 ; i < Students.length ; i++){
        table += `
        <tr>
            <td>${Students[i].firstName}</td>
            <td>${Students[i].lastName}</td>
            <td>${Students[i].id}</td>
            <td>${Students[i].level}</td>
            <td>${Students[i].gpa}</td>
            <td>${Students[i].gender}</td>
            <td>${Students[i].dob}</td>
            <td>${Students[i].phone}</td>
            <td>${Students[i].status}</td>
            <td>${Students[i].department}</td>
            <td><button class="slBtn" id="delete" onclick="ChangeSTD(${i})">Change</button></td>
        </tr>
        `
    }
    document.getElementById('TBody').innerHTML = table;
}

DisplayTable();


    // Select the drop-down element
    var selectStatue = document.querySelector('#selectStatue');

    // Attach an event listener to the drop-down element
    selectStatue.addEventListener('change', function () {

        // Select all the rows in the table body
        var rows = document.querySelectorAll('tbody tr');

        // If "All Students" is selected, show all rows
        if (selectStatue.value === 'All Students') {
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.display = '';
            }
        }
        // If "Active" is selected, show only rows with "active" status
        else if (selectStatue.value === 'Active') {
            for (let i = 0; i < rows.length; i++) {
                var status = rows[i].querySelector('td:nth-child(9)').textContent;
                if (status.toLowerCase() === 'active') {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
        // If "Inactive" is selected, show only rows with "inactive" status
        else if (selectStatue.value === 'InActive') {
            for (let i = 0; i < rows.length; i++) {
                var status = rows[i].querySelector('td:nth-child(9)').textContent;
                if (status.toLowerCase() === 'inactive') {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
    });
});


function ChangeSTD(i){
    if (window.confirm("Are you sure you want to change the status of that student?")) {
        let newStatus ;
        if (Students[i].status === "active") {
            newStatus = "inactive";
        }else{
            newStatus = "active";
        }
        let aStudent ={
            id: Students[i].id,
            firstName : Students[i].firstName,
            lastName : Students[i].lastName,
            phone : Students[i].phone,
            email : Students[i].email,
            level : Students[i].level,
            gpa : Students[i].gpa,
            dob : Students[i].dob,
            gender : Students[i].gender,
            department : Students[i].department,
            status : newStatus,
        } 
        Students[i] = aStudent;
        localStorage.setItem("Students",JSON.stringify(Students));
        alert("Status Updated Successfully");
        location.reload();
    }
}

