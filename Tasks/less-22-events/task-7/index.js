const textInput = document.querySelector('.text-input');

const consoleLogValue = (event) => {
  console.log(event.target.value);
};

textInput.addEventListener('change', consoleLogValue)