// Create global variables
const form = document.querySelector("form");

const username = document.querySelector("#name");
const email = document.querySelector("#email");
const bdate = document.querySelector("#bdate");
const language = document.querySelector("#language-select");
const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm-pass");

//const fieldNames = ["#name", "#email", "#bdate", "#language-select", "#pass", "#confirm-pass"];
const field = [username, email, bdate, language, pass, confirmPass];

//const usernameError = document.querySelector("#name + span.error");

form.addEventListener("submit", (event) => {

    const validatedFields = 0;

    for (i = 0; i < 6; i++) {

        checkValidity(field[i]);
        if (checkValidity === True) {
            validatedFields =+ 1;
        };

    if (validatedFields != 6) {
        event.preventDefault;
    }
}});

function checkValidity(field) {

    if (!field.validity.valid) {
        showError(field);
        return false;
    }
    else {
        return true;
    }
}

function showError(field) {

    const fieldError = document.querySelector(`#${field} + span.error`);

    if (field.validity.valueMissing) {
        fieldError.textContent = "You must fill this field.";
    } else if (field.validity.tooShort) {
        fieldError.textContent = `This value should be at least ${field.minLength} characters.`;
    }
}

//REAL-TIME VALIDATION
// username.addEventListener("input", (event) => {
//     // Each time the user types something, we check if the
//     // form fields are valid.

//     if (username.validity.valid) {
//         usernameError.textContent = "";
//     } else {
//         showError();
//     }
// });
