const taskStatus = document.querySelector('.task-status');

const ifCheckedCheckbox = () => {
  if (taskStatus.checked === true) {
    console.log('true');
  }
  if (taskStatus.checked === false) {
    console.log('false');
  }
};

taskStatus.addEventListener('change', ifCheckedCheckbox);

