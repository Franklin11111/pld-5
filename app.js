const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const form = document.querySelector("form");
const email = document.getElementById("email");
const nameInput = document.getElementById("name");

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle("display-nav")
})


email.addEventListener("input", (event) => {
    event.preventDefault();
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
    } else {
        email.setCustomValidity("");
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!email.validity.typeMismatch || email.validity.valueMissing) {
        alert("data is correct");
    }
})
