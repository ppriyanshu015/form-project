function validateForm() {

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    const terms = document.getElementById("terms").checked;

    // Get message element
    const message = document.getElementById("message");

    // Clear previous message
    message.textContent = "";

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Mobile validation
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return false;
    }

    // Date of birth
    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }

    // Gender
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    // Course
    if (course === "") {
        alert("Please select a course.");
        return false;
    }

    // Address
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    // City
    if (city === "") {
        alert("Please enter your city.");
        return false;
    }

    // State
    if (state === "") {
        alert("Please enter your state.");
        return false;
    }

    // Pincode
    const pincodePattern = /^[0-9]{6}$/;

    if (!pincodePattern.test(pincode)) {
        alert("Pincode must contain exactly 6 digits.");
        return false;
    }

    // Terms
    if (!terms) {
        alert("Please accept the terms and conditions.");
        return false;
    }

    // Everything is valid
    message.textContent = "Form submitted successfully!";

    /*
        Returning true allows the form's default
        submission to continue.
    */

    return true;
}