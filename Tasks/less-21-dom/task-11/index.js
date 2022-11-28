export const manageClasses = () => {
  const addClass = document.querySelector('.one');
  addClass.className += ' selected';

  const removeClass = document.querySelector('.two');
  removeClass.classList.remove('selected');

  const toggleClass = document.querySelector('.three');
  toggleClass.classList.toggle('three_done');

  const anotherClassIf = document.querySelector('.some-class');
  anotherClassIf.className += ' another-class';
};

console.log(manageClasses());
