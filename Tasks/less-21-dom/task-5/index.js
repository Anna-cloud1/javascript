// algo
// 1 ищем класс
// 2  устанавливаем заданный текст

export const setTitle = (text) =>
  document.querySelector('.title').textContent = text;

console.log(setTitle(`I'm done!`));
