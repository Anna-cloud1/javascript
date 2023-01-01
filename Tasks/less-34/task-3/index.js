// 1 найти все нужные дом эл
// 2 сделать кнопку доступной для нажатия при всех заполненных полях
// 3 отпр данные на сервер c помощью фетч и получить с него данные с помощью алерта
// 4 очистить поля ввода

const url = `https://63a8af9c100b7737b983b748.mockapi.io/tasks/users`;

const loginFormFields = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');

const ifFieldsValid = () => {
  const validFields = loginFormFields.reportValidity();
  if (!validFields) {
    return;
  }
  submitButton.removeAttribute('disabled');
};

loginFormFields.addEventListener('input', ifFieldsValid);

const serverResponse = (event) => {
  event.preventDefault();
  const userData = Object.fromEntries(new FormData(loginFormFields));
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
};

submitButton.addEventListener('submit', serverResponse);
