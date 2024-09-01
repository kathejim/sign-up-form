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

    let validatedFields = 0;
    const fieldLength = field.length;

    for (i = 0; i < fieldLength; i++) {
       
        //Check validity of each field.
        if (checkValidity(field[i]) === true) {
            validatedFields += 1;
        };
    }

    //Check if all fields are valid.
    if (validatedFields != fieldLength) {
        event.preventDefault();
    }
});


function checkValidity(field) {

    showError(field);

    if (!field.validity.valid) {
        return false;
    } else {
        return true;
    }
};

// Show a message error.
function showError(field) {

    //Transform the constant username into a string "username".
    let fieldString = field.id;
    
    //Creating a variable fieldError for each fieldString.
    let fieldError = document.querySelector(`#${fieldString} + span.error`);
    console.log(fieldError);

    if (field.validity.valueMissing) {
        fieldError.textContent = "You must fill this field.";
    } else if (field.validity.tooShort) {
        fieldError.textContent = `This value should be at least ${field.minLength} characters.`;
    } else {
        fieldError.textContent = "";
    }
};

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
