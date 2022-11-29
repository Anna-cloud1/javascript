export const squaredNumbers = () => {
  const arr = Array.from(document.querySelectorAll('.number'));
  arr.map((el) => (el.dataset.squaredNumber = el.dataset * el.dataset));
};
