let Students;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Students = JSON.parse(localStorage.Students);
}else{
    Students = []; 
}

window.onload = function () {
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
                <td><button class="slBtn" id="delete" onclick="deleteSTU(${i})">Delete</button></td> 
            </tr>
            `
        }
        document.getElementById('TBody').innerHTML = table;
    }
    DisplayTable();
}

function deleteSTU(i){
    if (window.confirm("Are you sure you want to perform this Deletion?")) {
        Students.splice(i,1);
        localStorage.Students = JSON.stringify(Students);
        location.reload();
    }
}
