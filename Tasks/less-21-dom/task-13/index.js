const getSection = (num) =>
  document.querySelector(`span[data-number="${num}"]`).closest('.box').dataset
    .section;

console.log(getSection(1));
