const form = document.querySelector('form');
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const confirmPassword = form.querySelector('#confirm-password');
const submitButton = document.querySelector('button');

submitButton.addEventListener('submit', (e) => {
  e.preventDefault();
});

email.addEventListener('input', () => {
  email.setCustomValidity('');
  validateEmail();
});

password.addEventListener('input', () => {
  password.setCustomValidity('');
  validatePassword();
});

confirmPassword.addEventListener('input', () => {
  confirmPassword.setCustomValidity('');
  validateConfirmPassword();
});

const validateConfirmPassword = () => {
  if (password.value.localeCompare(confirmPassword.value) != 0) {
    confirmPassword.setCustomValidity('Not matching! How dare you!');
    confirmPassword.reportValidity();
  }
};

const validatePassword = () => {
  if (
    !checkIfLengthGreaterThan(8, password) ||
    !checkIfAtLeastOneSpecialChar(password) ||
    !hasLowerCase(password) ||
    !hasUpperCase(password) ||
    !notContainWhiteSpace(password)
  ) {
    password.reportValidity();
  }
};

const validateEmail = () => {
  if (!checkIfLengthGreaterThan(5, email) || !checkIfValidEmail(email)) {
    email.reportValidity();
  }
};

const checkIfLengthGreaterThan = (number, inputElement) => {
  if (inputElement.value.length < number) {
    inputElement.setCustomValidity('Too short man!');
    return false;
  }
  return true;
};

const checkIfAtLeastOneSpecialChar = (inputElement) => {
  const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!specialChars.test(inputElement.value)) {
    inputElement.setCustomValidity("Where's my special character?");
    return false;
  }
  return true;
};

const checkIfValidEmail = (inputElement) => {
  if (!/@/.test(inputElement.value)) {
    inputElement.setCustomValidity("Where's my @? Not cool!");
    return false;
  } else if ('@' == inputElement.value[inputElement.value.length - 1]) {
    inputElement.setCustomValidity(
      "You know that's not a valid email address."
    );
    return false;
  }
  return true;
};

const hasLowerCase = (inputElement) => {
  if (!/[a-z]/.test(inputElement.value)) {
    inputElement.setCustomValidity("Where's my lower case letter?");
    return false;
  }
  return true;
};

const hasUpperCase = (inputElement) => {
  if (!/[A-Z]/.test(inputElement.value)) {
    inputElement.setCustomValidity(
      "Where's my upper case letter? Not cool man!"
    );
    return false;
  }
  return true;
};

const notContainWhiteSpace = (inputElement) => {
  if (/ /.test(inputElement.value)) {
    inputElement.setCustomValidity(
      'No white space! Why are you being so difficult!?'
    );
    return false;
  }
  return true;
};
