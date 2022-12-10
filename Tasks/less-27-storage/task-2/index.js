/* eslint-disable prefer-destructuring */
// сначала пишем ф-цию которая будет менять значение счетчика, будем использовать здесь делегирование событий, соответственно  повесим обрабочик

const counterElem = document.querySelector('.counter');
const counterValueEl = document.querySelector('.counter__value');

const onCounterChange = (event) => {
  const isButton = event.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }
  const action = event.target.dataset.action;

  const oldValue = Number(counterValueEl.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueEl.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = (event) => {
  console.log(event);
  counterElem.textContent = event.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueEl.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
