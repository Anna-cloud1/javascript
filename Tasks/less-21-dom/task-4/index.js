// 1 создаем ф-цию
// 2 ищем нужный текст эл
// 3 возвращаем его

export const getTitle = () => {
  const element = document.querySelector('.title').textContent;
  return element;
};

console.log(getTitle());

export const getDescription = () => {
  const element = document.querySelector('.about').innerText;
  return element;
};

console.log(getDescription());

export const getPlans = () => {
  const element = document.querySelector('.plans').innerHTML;
  return element;
};
console.log(getPlans());

export const getGoal = () => {
  const element = document.querySelector('.goal').outerHTML;
  return element;
};

console.log(getGoal());
