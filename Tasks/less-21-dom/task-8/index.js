// algo
// 1 создаем дом эл кнопку с помощью createElement
// 2 вставляем его в боди с помощью append

const createButton = (buttonText) => {
  const bodyEl = document.querySelector('body');
  const button = (document.createElement('button').textContent = buttonText);
  bodyEl.append(button);
};

console.log(createButton('Send Email'));
