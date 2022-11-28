// 1 находим классы список и спешл
// для каждого метода создаем переменные которые добавляют эл на страничку 
// добавляем цифру
// юзаем подходящий метод 


export const finishList = () => {
  const listElem = document.querySelector('.list');
  const special = document.querySelector('.special');

  const listFirstElem = document.createElement('li');
  listFirstElem.textContent = '1';
  listElem.prepend(listFirstElem);

  const listFourElem = document.createElement('li');
  listFourElem.textContent = '4';
  special.before(listFourElem);

  const listSixElem = document.createElement('li');
  listSixElem.textContent = '6';
  special.after(listSixElem);

  const listEightElem = document.createElement('li');
  listEightElem.textContent = '8';
  listElem.append(listEightElem);
};

finishList();
