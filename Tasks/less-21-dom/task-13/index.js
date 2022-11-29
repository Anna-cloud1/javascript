
export const getSection = (num) =>
  document.querySelectorAll(`span[data-number="${num}"]`).closest('.box')
    .dataset.section;

