const input = document.querySelector('.text-input');

const inputValue = () => {
   const text = input.value;
  console.log(text);
};


input.addEventListener('change', inputValue)