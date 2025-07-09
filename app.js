const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const form = document.querySelector("form");
const email = document.getElementById("email");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorMessage = document.querySelector(".error-message");

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle("display-nav")
})

function validateForm() {
    let nameValue = nameInput.value;
    let emailValue = email.value;
    let messageValue = messageInput.value;
    if (nameValue == "") {
        errorName.innerHTML = "Name field is empty."
        alert("Name must be filled out");
        return false;
    }
    else if (emailValue == "") {
        errorEmail.innerHTML = "Email field is empty."
        alert("Email must be filled out");
        return false;
    }
    else if (messageValue.length < 10) {
        errorMessage.innerHTML = "Message field is not long enough to be submitted."
        alert("Message is too short");
        return false;
    }
    else {
        alert("Thanks! You data was submitted successfully.")
        return true;
    }
}
