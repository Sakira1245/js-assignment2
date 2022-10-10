// Select all input elements for varification
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const zipcode = document.getElementById("zipcode");

// function for form varification
function formValidation() {
    // checking length of name
    if (userName.value.length < 2 || userName.value.length > 20) {
        alert("Name length should be more than 2 and less than 21 charaters");
        userName.focus();
        return false;
    }
    // checking email format
    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        email.focus();
        return false;
    }
    // checking phone number
    if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long number and first digit can't be 0!");
        phoneNumber.focus();
        return false;
    }
    // checking zip code
    if (!zipcode.value.match(/^[0-9]{6}$/)) {
        alert("Zip code must be 6 characters long number!");
        zipcode.focus();
        return false;
    }
    return true;
}