const singleUseBtn = document.querySelector('.single-use-btn');

const getClicked = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', getClicked);
};

singleUseBtn.addEventListener('click', getClicked);
