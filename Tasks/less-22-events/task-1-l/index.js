const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  const spanElem = document.createElement('span');
  spanElem.style = `color: ${color}; margin-left: 8px;`;
  spanElem.textContent = text;
  eventsListElem.appendChild(spanElem);
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// btn
const clearBoard = () => {
  const list = document.querySelector('.events-list');
  list.innerHTML = '';
};
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clearBoard);

const removeHandlers = () => {
  divElem.removeEventListener('click', logGreenDiv);
  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreenP);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreenSpan);
  spanElem.removeEventListener('click', logGreySpan, true);
};

const removeHandlersBtnElem = document.querySelector('.remove-handlers-btn');
removeHandlersBtnElem.addEventListener('click', removeHandlers);

const attachHandlers = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

attachHandlersBtn.addEventListener('click', attachHandlers);

document.addEventListener('DOMContentLoaded', () => {
  attachHandlers();
});
