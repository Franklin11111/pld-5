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

// function validateForm() {
//     let nameValue = nameInput.value;
//     let emailValue = email.value;
//     let messageValue = messageInput.value;
//     if (nameValue == "") {
//         errorName.innerHTML = "Name field is empty."
//         alert("Name must be filled out");
//         return false;
//     }
//     else if (nameInput.validity.patterMismatch) {
//         errorName.innerHTML = "Entered name doesn't conform with the required pattern (e.g. John Smith)."
//         alert("Name format is not correct");
//         return false;
//     }
//     else if (emailValue == "") {
//         errorEmail.innerHTML = "Email field is empty."
//         alert("Email must be filled out");
//         return false;
//     }
//     else if (messageValue.length < 10) {
//         errorMessage.innerHTML = "Message field is not long enough to be submitted."
//         alert("Message is too short");
//         return false;
//     }
//     else {
//         alert("Thanks! You data was submitted successfully.")
//         return true;
//     }
// }

nameInput.addEventListener("input", (event) => {
    // if (this.validity.valid) {
    //     errorName.textContent = "";
    //     errorName.className = "error";
    // } else {
    //     showError(event);
    // }
    checkInput(nameInput, event)
})

email.addEventListener("input", (event) => {
    checkInput(email, event)
})

messageInput.addEventListener("input", (event) => {
    checkInput(messageInput, event)
})

form.addEventListener("submit", (event) => {
    if (!nameInput.validity.valid || !email.validity.valid || !messageInput.validity.valid) {
        // showError(event);
        alert("Your data is incomplete.")
        event.preventDefault();
    }
    else {
        alert("Thanks! Your data was submitted successfully.")
    }
})
function showError(event) {
    let el = event.target;

    if (el.validity.valueMissing) {
        document.querySelector(`.error-${el.name}`).textContent = `You need to enter your ${el.name}`
    } if (el.validity.typeMismatch) {
        document.querySelector(`.error-${el.name}`).textContent = `Entered value needs to be a ${el.name}.`
    } if (el.validity.patternMismatch) {
        document.querySelector(`.error-${el.name}`).textContent = `Entered value does not match required pattern of ${el.name}.`
    }
    if (el.validity.tooShort) {
        document.querySelector(`.error-${el.name}`).textContent = `${el.name.charAt(0).toUpperCase() + el.name.slice(1)} length should be at least ${el.minLength} characters long`;
    }
    errorEl.className = "error";
}
function checkInput(input, event) {
    let el = event.target;
    if (input.validity.valid) {
        document.querySelector(`error-${el.name}`).textContent = "";
        document.querySelector(`error-${el.name}`).className = "error";
    } else {
        showError(event);
    }
}