const button = Array.from(document.querySelectorAll('.btn'));
console.log(button);

const handleClick = (event) => {
  console.log(event.target.textContent);
};

button.map((el) => el.addEventListener('click', handleClick));
