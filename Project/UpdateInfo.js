let students;
if (localStorage.Students != null){
    students = JSON.parse(localStorage.Students);
}

let indx;
if(localStorage.Index != null){
    indx = JSON.parse(localStorage.Index);
}

function validateChars(str) {
    if(str.length == 0){
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (!((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))) {
            return false;
        }
    }
    return true;
}

function validateEgyptianNumber(number) {
    if(number.length == 0){
        return false;
    }
    const validPrefixes = ['010', '011', '012', '015'];
    let digitsOnly = '';
    for (let i = 0; i < number.length; i++) {
        const charCode = number.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            digitsOnly += number[i];
        }
    }
    // Check that the number starts with a valid prefix
    const prefix = digitsOnly.substring(0, 3);
    if (!validPrefixes.includes(prefix)) {
        return false;
    }
    if (digitsOnly.length !== 11) {
        return false;
    }
    // If all checks pass, return true
    return true;
}

function validateGPA(input) {
    if(input.length == 0){
        return false;
    }
    // Convert the input to a number
    const gpa = Number(input);
    if (isNaN(gpa)) {
        return false;
    }
    if (gpa < 0 || gpa > 4) {
        return false;
    }
    // If all checks pass, return true
    return true;
}  

function validateEmail(email) {
    if(email.length == 0){
        return false;
    }
    if (typeof email !== 'string') {
        return false;
    }
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        return false;
    }
    return true;
}

function validateDateOfBirth(date) {
    if(date.length == 0){
        return false;
    }
    if (typeof date !== 'string') {
        return false;
    }
    const parts = date.split('-');
    if (parts.length !== 3) {
        return false;
    }
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return false;
    }
    const today = new Date();
    let age = today.getFullYear() - year;
    const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
    if (birthdayThisYear > today) {
        age--;
    }
    if (age < 16 || age > 80) {
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const ID = document.querySelector("#ID");
    ID.setAttribute("value", students[indx].id);
    const EditName = document.querySelector('#editName');
    EditName.setAttribute("value",students[indx].firstName);
    const errorMessageFN = document.getElementById('VFN');
    EditName.addEventListener('blur', () => {
        const inputValue = EditName.value;
        if (!validateChars(inputValue)) {
            errorMessageFN.textContent = 'Please enter chars only!';
        } else {
            errorMessageFN.textContent = '';
        }
    });
    const EditLN = document.querySelector('#editLN');
    EditLN.setAttribute("value",students[indx].lastName);
    const errorMessageln = document.getElementById('VLN');
    EditLN.addEventListener('blur', () => {
        const inputValue = EditLN.value;
        if (!validateChars(inputValue)) {
            errorMessageln.textContent = 'Please enter chars only!';
        } else {
            errorMessageln.textContent = '';
        }
    });
    const EditPHN = document.querySelector('#editPHN');
    EditPHN.setAttribute("value",students[indx].phone);
    const errorMessagePHN = document.getElementById('PHN');
    EditPHN.addEventListener('blur', () => {
        const inputValue = EditPHN.value;
        if (!validateEgyptianNumber(inputValue)) {
            errorMessagePHN.textContent = 'Please enter a valid Egyption Number!';
        } else {
            errorMessagePHN.textContent = '';
        }
    });
    const EditEmail = document.querySelector('#editEmail');
    EditEmail.setAttribute("value",students[indx].email);
    const errorMessageEml = document.getElementById('VEML');
    EditEmail.addEventListener('blur', () => {
        const inputValue = EditEmail.value;
        if (!validateEmail(inputValue)) {
            errorMessageEml.textContent = 'Please enter a valid Email!';
        } else {
            errorMessageEml.textContent = '';
        }
    });
    const EditDOB = document.querySelector('#editDOB');
    EditDOB.setAttribute("value",students[indx].dob);
    const errorMessageDOB = document.getElementById('VDOB');
    EditDOB.addEventListener('blur', () => {
        const inputValue = EditDOB.value;
        if (!validateDateOfBirth(inputValue)) {
            errorMessageDOB.textContent = 'Please enter a valid Age! Note: your age must be grater than 17 and less than 80';
        } else {
            errorMessageDOB.textContent = '';
        }
    });
    const EditGPA = document.querySelector('#editGPA');
    EditGPA.setAttribute("value",students[indx].gpa);
    const errorMessageGPA = document.getElementById('VGPA');
    EditGPA.addEventListener('blur', () => {
        const inputValue = EditGPA.value;
        if (!validateGPA(inputValue)) {
            errorMessageGPA.textContent = 'Please enter a valid GPA! Note: valid gpa between 0 to 4';
        } else {
            errorMessageGPA.textContent = '';
        }
    });
    let ch = students[indx].level;
    const ch1 = document.getElementById("a");
    const ch2 = document.getElementById("b");
    const ch3 = document.getElementById("c");
    const ch4 = document.getElementById("d");
    if (ch == "1") {
        ch1.setAttribute("selected","");
    }else if(ch == "2"){
        ch2.setAttribute("selected","");
    }else if(ch == "3"){
        ch3.setAttribute("selected","");
    }else if(ch == "4"){
        ch4.setAttribute("selected" ,"");
    }
    let status = students[indx].status;
    const Editstatusact = document.getElementById("act");
    const Editstatusinact = document.getElementById("inact");
    if (status == "active" ) {
        Editstatusact.setAttribute("checked","");
    }else{
        Editstatusinact.setAttribute("checked","");
    }
    const updateButton = document.querySelector('#updateBtn');
    // Add click event listener to the Add button
    updateButton.addEventListener('click', function () {
        if(validateEmail(EditEmail.value) && validateGPA(EditGPA.value) && validateEgyptianNumber(EditPHN.value) 
        && validateDateOfBirth(EditDOB.value) && validateChars(EditLN.value) && validateChars(EditName.value)){
            let Student ={
                id: students[indx].id,
                firstName : EditName.value,
                lastName : EditLN.value,
                phone : EditPHN.value,
                email : EditEmail.value,
                level : document.querySelector('option[name="Level"]:checked').value,
                gpa : EditGPA.value,
                dob : EditDOB.value,
                gender : students[indx].gender,
                department : students[indx].department,
                status : document.querySelector('input[name="Status"]:checked').value,
            }
            students[indx] = Student;
            localStorage.setItem("Students",JSON.stringify(students));
            alert("Updated Successfully");
        }else{
            alert("Invalid Feilds");
        }
    });
});
