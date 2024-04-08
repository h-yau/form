const form = document.querySelector('form');
const email = form.querySelector('#email');
const country = form.querySelector('#country');
const zipCode = form.querySelector('#zip-code');
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

country.addEventListener('change', () => {
  country.setCustomValidity('');

  if (!isEmpty(country) && isCountryValid()) {
    enableZipCode();
  } else {
    disableZipCode();
  }
});

password.addEventListener('input', () => {
  password.setCustomValidity('');
  validatePassword();
});

confirmPassword.addEventListener('input', () => {
  confirmPassword.setCustomValidity('');
  validateConfirmPassword();
});

zipCode.addEventListener('input', () => {
  zipCode.setCustomValidity('');
  validateZipCode(country.value);
});

const disableZipCode = () => {
  zipCode.disabled = true;
};

const enableZipCode = () => {
  zipCode.disabled = false;
};

const isEmpty = (inputElement) => {
  if (
    inputElement.value == null ||
    inputElement.value == undefined ||
    inputElement.value == ''
  ) {
    return true;
  } else {
    return false;
  }
};

const validateZipCode = (country) => {
  const constraints = {
    USA: /^\d{5}(?:-\d{4})?$/,
    UK: /^[0-9a-zA-Z]{5,7}$/,
    DE: /^\d{5}$/,
    JP: /^\d{3}-?\d{4}$/,
  };

  const constraint = constraints[country];

  if (!constraint.test(zipCode.value)) {
    zipCode.setCustomValidity('This is not quite right');
    zipCode.reportValidity();
  }
};

const isCountryValid = () => {
  if (!['USA', 'UK', 'DE', 'JP'].includes(country.value)) {
    country.setCustomValidity('That is not a valid country');
    country.reportValidity();
    return false;
  }
  return true;
};

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
