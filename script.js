// Create global variables
const form = document.querySelector("form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const bdate = document.querySelector("#bdate");
const language = document.querySelector("#language-select");
const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm-pass");
const usernameError = document.querySelector("#email .error");

username.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (username.validity.valid) {
        username.textContent = "";
        username.className = "error";
    }
    else {
        showError();
    }
});

form.addEventListener("submit", (event) => {

    if (!username.validity.valid) {
        showError();
        event.preventDefault();
    }
});