export const manageClasses = () => {
  const addClass = document.querySelector('.one');
  addClass. classList.add('selected');

  const removeClass = document.querySelector('.two');
  removeClass.classList.remove('selected');

  const toggleClass = document.querySelector('.three');
  toggleClass.classList.toggle('three_done');

  const anotherClassIf = document.querySelector('.some-class');
  anotherClassIf.classList.add('another-class');
};
