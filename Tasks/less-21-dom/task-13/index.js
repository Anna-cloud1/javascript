export const getSection = (num) => {
  const span = document.querySelectorAll(`span[data-number="${num}"]`);
  return span.closest('.box').dataset.section;
};
