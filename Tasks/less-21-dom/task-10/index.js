// в этой ф-ции
// coздаем новый эл инпут и добавляем ему тип и имя
// ищем name="password" и меняем ему тип

export const finishForm = () => {
  const loginInput = document.querySelector('.login-form');
  const input = document.createElement('input');
  input.name = 'login';
  input.type = 'text';
  loginInput.prepend(input);

  const changedInput = document.querySelector('[name="password"]');
  changedInput.type = 'password';
};


