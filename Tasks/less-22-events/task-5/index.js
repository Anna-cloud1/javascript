const singleUseBtn = document.querySelector('.single-use-btn');

const getClicked = () => {
  console.log('clicked');
};

singleUseBtn.addEventListener('click', getClicked, { once: true });
