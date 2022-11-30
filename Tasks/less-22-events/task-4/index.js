const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');

const getLogText = () => {
console.log(searchInput.value)
};

searchBtn.addEventListener('click', getLogText)