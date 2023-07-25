function getDOMelements(){
    let username = document.forms['userDetails']['username'].value;
    let email = document.forms['userDetails']['email'].value;
    let password = document.forms['userDetails']['password'].value;
    let phno = document.forms['userDetails']['phno'].value;
    let password_confirmation = document.forms['userDetails']['confirmpassword'].value;
    return username, email, password, phno, password_confirmation
}

function checkLength(s){
    return s.length;
}


// this function checks if a given string matches the conditions provided for a category
// categories - password, username, email, phone number
function checkString({word = "test" , category = "password"} = {}){
    console.log(category);
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
        var pattern = /^[+]{1}(?=.*[0-9])+$/;
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
    if (l==13){
        return checkString({word:phone,category:"phone"});
    }
    else {
        return false;
    }
}

function validateEmail(email){
    return checkString({word : email, category:"email"});
}

function validateForm(){
    username, email, password, phno, password_confirmation = getDOMelements();
}