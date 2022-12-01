const buttons = Array.from(document.querySelectorAll('.pagination__page'));

const getDataFromButtons = (event) => {
  console.log(event.target.textContent);
};

buttons.map((el) => el.addEventListener('click', getDataFromButtons));
