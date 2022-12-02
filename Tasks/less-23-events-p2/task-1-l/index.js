/* eslint-disable prettier/prettier */
const emailErrorElem = document.querySelector('#email');
const passwordErrorElem = document.querySelector('#password');

const isRequired = (value) => (value.includes('@') ? undefined : 'Required');

const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};

const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};

emailErrorElem.addEventListener('input', onEmailChange);
passwordErrorElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
