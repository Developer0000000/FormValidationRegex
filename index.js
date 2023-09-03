const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let submit = document.getElementById('submit');
let success = document.getElementById('success');
let failure = document.getElementById('failure');
success.classList.add('d-none')
failure.classList.add('d-none')

let validUser = false;
let validEmail = false;
let validPhone = false;


userName.addEventListener('blur', () => {

    let nameValue = userName.value
    let regex = /^[a-zA-Z][\w+]{2,10}$/;
    // let fullName = nameValue.match(regex);
    let fullName = regex.test(nameValue);

    if (fullName) {
        validUser = true;
        console.log('Your name is valid');
        userName.classList.add('is-valid')
        userName.classList.remove('is-invalid')
    } else {
        console.log('Your name is in-valid');
        userName.classList.add('is-invalid')
    }

})


email.addEventListener('blur', () => {


    let emailValue = email.value;

    // let regex = /^\D[\w+\.%+-]{0,}\@([a-z]){0,}\.([a-z]){0,}$/;
    let regex = /^[\w+\.%+-]{0,}\@([a-zA-Z\._-]){0,}\.([a-zA-Z]){2,6}$/;
    // let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    // regex=     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // let fullName = nameValue.match(regex);
    let userEmail = regex.test(emailValue);

    if (userEmail) {
        validEmail = true;
        console.log('Your name is valid');
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    } else {
        console.log('Your name is in-valid');
        email.classList.add('is-invalid')
    }

})


phone.addEventListener('blur', () => {



    let phoneValue = phone.value
    let regex = /^[\d+]{1,11}$/;

    let phoneNumber = regex.test(phoneValue);

    if (phoneNumber) {
        validPhone = true;
        console.log('Your name is valid');
        phone.classList.add('is-valid')
        phone.classList.remove('is-invalid')
    } else {
        console.log('Your name is in-valid');
        phone.classList.add('is-invalid')
    }

});



submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (validEmail && validPhone && validUser) {
        console.log('Phone, email and user are valid. Submitting the form')
        success.classList.remove('d-none')
        success.classList.add('d-block')
    }
    else {
        failure.classList.remove('d-none')
        failure.classList.add('d-block')
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again')
    }


})