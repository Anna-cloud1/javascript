export const getSection = (num) => {
  const span = document
    .querySelectorAll(`span[data-number="${num}"]`)
    .closest('.box');
  return span.dataset.section;
};
