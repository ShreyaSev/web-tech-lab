function getDOMelements(){
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phno = document.getElementById("phno");
    let password_confirmation = document.getElementById("confirmpassword");
    let successMessage = document.getElementById("successMessage");
    // let successMessage = document['successMessage'];
    console.log(successMessage);
    return username, email, password, phno, password_confirmation,successMessage;
}

function checkLength(s){
    return s.length;
}


// this function checks if a given string matches the conditions provided for a category
// categories - password, username, email, phone number
function checkString({word = "test" , category = "password"} = {}){
    if (category=="username"){
        var pattern = /[^0-9a-zA-Z]/; //if a non alphanumeric character is found, return False
        
    }

    else if (category=="email"){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    }

    else if (category == "password"){
        var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/;
    }

    else if (category=="phone"){
        var pattern = /^[+][9][1]\ [0-9]+$/;
    }

    else {
        alert('invalid category');
        return null;
    }
    if (pattern.test(word)){
        return true;
    }
    else {
        return false;
    }
}
//if length is between 3 and 20 and it contains only alphanumeric characters, return true else return false
function validateUsername(uname){
    let l = checkLength(uname)
    if (l>3 && l<=20){
        return !checkString({word : uname, category:"username"});
    }
    else {
        return false;
    }
}

function validatePassword(password){
    let l = checkLength(password);
    if (l>=8){
        return checkString({word : password, category:"password"});
    }
    else {
        return false;
    }
}

function validatePhone(phone){
    let l = checkLength(phone);
    if (l==14){
        return checkString({word:phone,category:"phone"});
    }
    else {
        return false;
    }
}

function validateEmail(email){
    return checkString({word : email, category:"email"});
}

function validatePasswordConfirmation(password, confirmpassword){
    if (password===confirmpassword){
        return true;
    }
    else{
        return false;
    }
}

function validateForm(){
    username, email, password, phno, confirmpassword,successMessage = getDOMelements();
    if (!validatePasswordConfirmation(password.value, confirmpassword.value) || !validatePassword(password.value) || !validatePhone(phno.value) || !validateEmail(email.value)|| !validateUsername(username.value) ){
        if (!validateUsername(username.value)){
            alert("Invalid username. Username should be between 3-20 characters long and contain only letters and numbers. ");
            username.focus();
            password.value="";
            confirmpassword.value="";
            return false;
        }
        else if(!validateEmail(email.value)){
            alert("Invalid email. Re-enter email id!");
            email.focus();
            password.value = "";
            confirmpassword.value = "";
            return false;
        }

        else if (!validatePhone(phno.value)){
            alert("Invalid phone number. It has to be of the format \'+91 9876543210\'");
            phno.focus();
            password.value = "";
            confirmpassword.value = ""
            return false;
        }
        
        else if (!validatePassword(password.value)){
            alert("Password has to be at least 8 characters and should contain  at least one lowercase alphabet, one uppercase alphabet, one special character and one number.");
            password.focus();
            password.value = "";
            confirmpassword.value = "";
            return false;
        }
        
        else if (!validatePasswordConfirmation(password.value, confirmpassword.value)){
            alert("Password does not match. Re-enter!");
            password.focus();
            password.value = "";
            confirmpassword.value = "";
            return false;
        }
    }
    else {
        successMessage.style.display = "block";
        console.log("success");
        return false;
    }
}

