// algo
// 1 пишем ф-цию с одним аргументом
// 2 с помощью дом находим боди
// 3 с помощью иннерХТМЛ уст ему строку с кнопкой

const setButton = (buttonText) =>
  (document.querySelector('body').innerHTML = `<button>${buttonText}</button>`);

