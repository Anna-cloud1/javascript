// algo
// 1 находим боди
// 2 создаем дом эл кнопку с помощью createElement и добавляем текст
// 3 вставляем его в боди с помощью append

export const createButton = (buttonText) => {
  const button = document.createElement('button');
  button.textContent = buttonText;
  document.querySelector('body').append(button);
};
