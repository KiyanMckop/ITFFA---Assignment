// Import necessary functions from Firebase module
import { signInWithEmailPassword, addUser } from "../src/index.js";

// Function to handle sign up
document.getElementById("signUpButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign up with email and password
    try {
        signInWithEmailPassword(email, password);
        addUser(); 
    } catch (error) {
        console.log(error.message);
    }
});
