const checkbox = document.querySelector('.task-status');

const getCheckStatus = (event) => {
  console.log(event.target.checked);
};

checkbox.addEventListener('change', getCheckStatus);
