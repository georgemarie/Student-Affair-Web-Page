let Students;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Students = JSON.parse(localStorage.Students);
}else{
    Students = []; 
}

function IsthatidExist(id){
    for(let i = 0 ; i < Students.length ; i++){
        if (id === Students[i].id) {
            return true;
        }
    }
    return false;
}

function validateNumbersOnly(str) {
    // Loop through every character in the string and check if it is a digit
    for (let i = 0; i < str.length; i++) {
      if (str[i] < '0' || str[i] > '9') { // If the character is not a digit, return false
        return false;
        }
    }
    // If all characters in the string are digits, return true
    return true;
}

function validateChars(str) {
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (!((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))) {
            return false;
        }
    }
    return true;
}

function validateEgyptianNumber(number) {
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

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const DepartementFeild = document.getElementById('Departement');
    DepartementFeild.style.display = "none";
    const inputFieldID = document.getElementById('ID');
    const errorMessageID = document.getElementById('VID');
    inputFieldID.addEventListener('blur', () => {
        const inputValue = inputFieldID.value;
        if (!validateNumbersOnly(inputValue)) {
            errorMessageID.textContent = 'Please enter numbers only!';
        }else if(IsthatidExist(inputValue)){
            errorMessageID.textContent = 'Sorry this id is used!';
        }else {
            errorMessageID.textContent = '';
        }
    });
    const inputFieldFirstName = document.getElementById('fname');
    const errorMessageFN = document.getElementById('VFN');
    inputFieldFirstName.addEventListener('blur', () => {
        const inputValue = inputFieldFirstName.value;
        if (!validateChars(inputValue)) {
            errorMessageFN.textContent = 'Please enter chars only!';
        } else {
            errorMessageFN.textContent = '';
        }
    });
    const inputFieldlastName = document.getElementById('lname');
    const errorMessageln = document.getElementById('VLN');
    inputFieldlastName.addEventListener('blur', () => {
        const inputValue = inputFieldFirstName.value;
        if (!validateChars(inputValue)) {
            errorMessageln.textContent = 'Please enter chars only!';
        } else {
            errorMessageln.textContent = '';
        }
    });
    const inputFieldPH = document.getElementById('phone');
    const errorMessagePHN = document.getElementById('PHN');
    inputFieldPH.addEventListener('blur', () => {
        const inputValue = inputFieldPH.value;
        if (!validateEgyptianNumber(inputValue)) {
            errorMessagePHN.textContent = 'Please enter a valid Egyption Number!';
        } else {
            errorMessagePHN.textContent = '';
        }
    });
    const L1 = document.getElementById("L");
    const L2 = document.getElementById("LL");
    const L3 = document.getElementById("LLL");
    const L4 = document.getElementById("LLLL");
    L1.addEventListener("change", () => {
        DepartementFeild.style.display = "none";
    });
    L2.addEventListener("change", () => {
        DepartementFeild.style.display = "none";
    });
    L3.addEventListener("change", () => {
        DepartementFeild.style.display = "";
    });
    L4.addEventListener("change", () => {
        DepartementFeild.style.display = "";
    });
    const inputFieldGPA = document.getElementById('GPA');
    const errorMessageGPA = document.getElementById('VGPA');
    inputFieldGPA.addEventListener('blur', () => {
        const inputValue = inputFieldGPA.value;
        if (!validateGPA(inputValue)) {
            errorMessageGPA.textContent = 'Please enter a valid GPA! Note: valid gpa between 0 to 4';
        } else {
            errorMessageGPA.textContent = '';
        }
    });
    const inputFieldEmail = document.getElementById('email');
    const errorMessageEml = document.getElementById('VEML');
    inputFieldEmail.addEventListener('blur', () => {
        const inputValue = inputFieldEmail.value;
        if (!validateEmail(inputValue)) {
            errorMessageEml.textContent = 'Please enter a valid Email!';
        } else {
            errorMessageEml.textContent = '';
        }
    });
    const inputFieldDOB = document.getElementById('date');
    const errorMessageDOB = document.getElementById('VDOB');
    inputFieldDOB.addEventListener('blur', () => {
        const inputValue = inputFieldDOB.value;
        if (!validateDateOfBirth(inputValue)) {
            errorMessageDOB.textContent = 'Please enter a valid Age! Note: your age must be grater than 17 and less than 80';
        } else {
            errorMessageDOB.textContent = '';
        }
    });

    // Get the Add button element
    const addButton = document.querySelector('#btnAdd');
    // Add click event listener to the Add button
    addButton.addEventListener('click', function () {
        // Get the input field values
        const id = document.querySelector('#ID').value;
        const firstName = document.querySelector('#fname').value;
        const lastName = document.querySelector('#lname').value;
        const phone = document.querySelector('#phone').value;
        const email = document.querySelector('#email').value;
        const level = document.querySelector('input[name="Level"]:checked').value;
        const gpa = document.querySelector('#GPA').value;
        const dob = document.querySelector('#date').value;
        const gender = document.querySelector('input[name="Gender"]:checked').value;
        const department = document.querySelector('input[name="Departement"]:checked');
        if (department) { // Check if myInput is defined
            var departmentValue = department.value;
        }else{
            departmentValue = "NULL";
        }
        console.log(department);
        const status = document.querySelector('input[name="Status"]:checked').value;
        // Validate the input fields
        if (id === '' || firstName === '' || lastName === '' || phone === '' || email === '' || level === '' || gpa === '' || dob === '' || gender === '' || status === '') {
            alert('Please fill in all fields.');
            return;
        }
        if (validateEmail(email) && validateGPA(gpa) && validateEgyptianNumber(phone) && validateDateOfBirth(dob)
        && validateChars(lastName) && validateChars(firstName) && validateNumbersOnly(id) && !IsthatidExist(id)) {
            //create object an assign the values to it.
            let Student ={
                id: id,
                firstName : firstName,
                lastName : lastName,
                phone : phone,
                email : email,
                level : level,
                gpa : gpa,
                dob : dob,
                gender : gender,
                department : departmentValue,
                status : status,
            }
            Students.push(Student);
            localStorage.setItem("Students",JSON.stringify(Students));
            alert("Student added");
            location.reload();
        }else{
            alert("Invalid Feilds");
        }
    });
});
