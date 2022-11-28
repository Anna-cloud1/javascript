// algo
// 1 находим боди
// 2 создаем дом эл кнопку с помощью createElement и добавляем текст
// 3 вставляем его в боди с помощью append

export const createButton = (buttonText) => {
  const bodyEl = document.querySelector('body');
  const button = (document.createElement('button').textContent = buttonText);
  bodyEl.append(button);
};

console.log(createButton('Send Email'));
