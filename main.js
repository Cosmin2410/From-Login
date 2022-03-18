// form

const submit = document
  .querySelector('.submit')
  .addEventListener('click', runForm);

const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const emailForm = document.querySelector('.email-input');
const phone = document.querySelector('.phone');

const fnameError = document.querySelector('.form-fname-error');
const lnameError = document.querySelector('.form-lname-error');
const emailError = document.querySelector('.form-email-error');
const phoneError = document.querySelector('.form-phone-error');
const succes = document.querySelector('.form-succes');

function runForm(e) {
  e.preventDefault();

  if (fname.value === '') {
    fnameError.style.display = 'block';
  } else {
    fnameError.style.display = 'none';
  }

  if (lname.value === '') {
    lnameError.style.display = 'block';
  } else {
    lnameError.style.display = 'none';
  }

  if (phone.value === '') {
    phoneError.style.display = 'block';
  } else {
    phoneError.style.display = 'none';
  }

  if (emailForm.value === '' || !emailForm.value.includes('@')) {
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }

  if (
    fname.value !== '' &&
    lname.value !== '' &&
    phone.value !== '' &&
    emailForm.value !== '' &&
    emailForm.value.includes('@')
  ) {
    succes.style.display = 'block';
  } else {
    succes.style.display = 'none';
  }
}

// Login

const emailErr = document.querySelector('.email-error');
const passErrMatch = document.querySelector('.password-error-match');
const minLength = document.querySelector('.password-error-length');
const uppercase = document.querySelector('.password-error-uppercase');
const validPass = document.querySelector('.password-valid');
const signUpTxt = document.querySelector('.sign-in-text');
const nameErr = document.querySelector('.name-error');

const nameInput = document.querySelector('.name');
const emailSignIn = document.querySelector('.email');
const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.password-confirm');

const logInButton = document
  .querySelector('.login-btn')
  .addEventListener('click', logIn);

const signUpButton = document
  .querySelector('.signup-btn')
  .addEventListener('click', signUp);

let counter = 0;

function logIn() {
  counter++;
  nameInput.style.display = 'none';
  passwordConfirm.style.display = 'none';
  nameErr.style.display = 'none';

  if (emailSignIn.value === '' || !emailSignIn.value.includes('@')) {
    emailErr.style.display = 'block';
  } else {
    emailErr.style.display = 'none';
  }

  if (password.value === '') {
    validPass.style.display = 'block';
  } else {
    validPass.style.display = 'none';
  }

  if (
    emailSignIn !== '' &&
    emailSignIn.value.includes('@') &&
    password.value !== ''
  ) {
    signUpTxt.style.display = 'block';
  } else {
    signUpTxt.style.display = 'none';
  }

  if (counter === -1) {
    validPass.style.display = 'none';
    emailErr.style.display = 'none';
  }
}

function signUp() {
  counter = -2;
  let checkUppercase = 0;

  nameInput.style.display = 'block';
  passwordConfirm.style.display = 'block';
  signUpTxt.style.display = 'none';

  if (nameInput.value === '') {
    nameErr.style.display = 'block';
  } else {
    nameErr.style.display = 'none';
  }

  if (emailSignIn.value === '' || !emailSignIn.value.includes('@')) {
    emailErr.style.display = 'block';
  } else {
    emailErr.style.display = 'none';
  }

  if (password.value !== passwordConfirm.value) {
    passErrMatch.style.display = 'block';
  } else {
    passErrMatch.style.display = 'none';
  }

  if (password.value.length < 8 || passwordConfirm.value.length < 8) {
    minLength.style.display = 'block';
  } else {
    minLength.style.display = 'none';
  }

  for (let i = 0; i <= password.value.length; i++) {
    if (password.value[i] >= 'A' && password.value[i] <= 'Z') {
      checkUppercase++;
    } else {
    }
  }

  if (checkUppercase > 0) {
    uppercase.style.display = 'none';
  } else {
    uppercase.style.display = 'block';
  }

  if (
    nameInput.value !== '' &&
    emailSignIn.value !== '' &&
    emailSignIn.value.includes('@') &&
    password.value === passwordConfirm.value &&
    password.value.length > 8 &&
    passwordConfirm.value.length > 8 &&
    checkUppercase > 0
  ) {
    console.log('a');
  }
}
