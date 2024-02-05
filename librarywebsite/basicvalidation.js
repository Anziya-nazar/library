function validateSignupForm() {
    console.log("btn clicked");

    
    err1.innerText = "";
    errpwd.innerText = "";

   
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phoneNumber = document.getElementById('phoneNumber').value; 

   
    if (email.trim() === "" || password === "" || phoneNumber === "") {
        alert("Fields should not be empty");
        return false;
    }


    // Email validation
    var emailRegex = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9.-]+)\.([a-z]{2,3})$/;
    if (!emailRegex.test(email)) {
        err1.innerText = "Email is Invalid";
        return false;
    } else {
        err1.innerText = "Email is Valid";
    }

    var phoneRegex = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}\.\d{3}\.\d{4}|\d{3}\s\d{3}\s\d{4})$/;
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneNumber').style.border = "2px solid red";
        err2.innerText = "Invalid phone number";
        return false;

    } else {
        err2.innerText = ""; 
    }
    alert("Signup successful!");
    return true;
}
function validateLoginForm() {
    console.log("validateLoginForm called");

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);

    // Check for empty fields
    if (username.trim() === "" || password === "") {
        console.log("Fields are empty");
        alert("Fields should not be empty");
        return false;
    }

    // Password length validation
    if (password.length < 8) {
        console.log("Password is too short");
        document.getElementById('password').style.border = "2px solid red";
        errpwd.innerText = "Password is too short";
        return false;
    }

    // Email validation
    var emailRegex = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9.-]+)\.([a-z]{2,3})$/;
    if (!emailRegex.test(email)) {
        console.log("Email is Invalid");
        err1.innerText = "Email is Invalid";
        return false;
    } else {
        console.log("Email is Valid");
        err1.innerText = "Email is Valid";
    }

    console.log("Login successful!");
    alert("Login successful!");
    return true;
}


    function checkPasswordStrength() {
        var password = document.getElementById('password').value;
        var strengthIndicator = document.getElementById('passwordStrength');
    
        
        var strength = 0;
        if (password.length >= 8) {
            strength += 1;
        }
        if (password.match(/[a-z]+/)) {
            strength += 1;
        }
        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }
        if (password.match(/[0-9]+/)) {
            strength += 1;
        }
    
       
        if (strength === 4) {
            strengthIndicator.innerText = 'Strong';
            document.getElementById('password').style.border = '2px solid green';
        } else if (strength >= 2) {
            strengthIndicator.innerText = 'Medium';
            document.getElementById('password').style.border = '2px solid orange';
        } else {
            strengthIndicator.innerText = 'Poor';
            document.getElementById('password').style.border = '2px solid red';
        }
        return true;
    }

    
    



