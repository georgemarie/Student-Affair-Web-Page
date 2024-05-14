let indx;
if(localStorage.Index != null){
    indx = JSON.parse(localStorage.Index);
}

let Student;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Student = JSON.parse(localStorage.Students);
}



document.addEventListener('DOMContentLoaded', function () {
    const ID = document.querySelector("#ID");
    ID.setAttribute("value", Student[indx].id);
    const name = document.querySelector("#Name");
    name.setAttribute("value", Student[indx].firstName + " " + Student[indx].lastName);
    //an akward error happed
    // const Lselect = document.getElementById("select");
    // for (let index = 1; Lselect.options.length; index++) {
    //     if(Lselect[index].value === Student[indx].department){
    //         Lselect.selectedIndex = index;
    //     }        
    // }
    const depBtn = document.querySelector("#btnDep");
    const Lselect = document.getElementById("select");
    depBtn.addEventListener('click', function(){
        if (Lselect.value == "Departement") {
            alert("Department can not be null");
        }else{
        let aStudent ={
            id: Student[indx].id,
            firstName : Student[indx].firstName,
            lastName : Student[indx].lastName,
            phone : Student[indx].phone,
            email : Student[indx].email,
            level : Student[indx].level,
            gpa : Student[indx].gpa,
            dob : Student[indx].dob,
            gender : Student[indx].gender,
            department : Lselect.value,
            status : Student[indx].status,
        } 
        Student[indx] = aStudent;
            localStorage.setItem("Students",JSON.stringify(Student));
            alert("Department Updated Successfully");
            location.href = "view.html";
    }
    });
});
// // Wait for the document to load before attaching event listeners
// document.addEventListener('DOMContentLoaded', function () {

//     // Get the DEpartement button element
//     const depBtn = document.querySelector("#btnDep");

//     // Select the drop-down element
//     const ID = document.querySelector("#ID");
//     const name = document.querySelector("#fname");
//     const selectDepartemnt = document.querySelector("#select");

//     depBtn.addEventListener('click', function(){
//         const id = ID.value;
//         const fName = name.value;
//         const dep = selectDepartemnt.value;
//         let indx = null;
//         for (let i = 0; i < Students.length; i++) {
//             if (id == Students[i].id && fName == Students[i].firstName) {
//                 indx = i;
//             }
//         }
//         if(indx != null)
//         {
            // let Student ={
            //     id: Students[indx].id,
            //     firstName : Students[indx].firstName,
            //     lastName : Students[indx].lastName,
            //     phone : Students[indx].phone,
            //     email : Students[indx].email,
            //     level : Students[indx].level,
            //     gpa : Students[indx].gpa,
            //     dob : Students[indx].dob,
            //     gender : Students[indx].gender,
            //     department : dep,
            //     status : Students[indx].status,
            // } 
            // Students[indx] = Student;
            //     localStorage.setItem("Students",JSON.stringify(Students));
            //     alert("Department Updated Successfully");
            //     location.href = "view.html";
//         }
//         else{
//             alert("Id or name not founded");
//         }
//     });
// });
