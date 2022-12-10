// 1 создаем айди в объекте 
// 2 достаем инпут и кнпопку
// 3 создаем ф-цию  которая добавляет таск в массив 
// 4 очищаем список  внутри ф-ции
// 5 вызываем ф-цию рендер и обновляем таскс
// 6 

const tasks = [
  { text: 'Buy milk', done: false, id: 101 },
  { text: 'Pick up Tom from airport', done: false, id: 102 },
  { text: 'Visit party', done: false, id: 103 },
  { text: 'Visit doctor', done: true, id: 104 },
  { text: 'Buy meat', done: true, id: 105 },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

const taskInputElem = document.querySelector('.task-input');
const createButtonElem = document.querySelector('.create-task-btn');


const newTask = () => {
  const text = taskInputElem.value;
  if (text === '') {
    return;
  }
  const createTaskElem = {
    text,
    done: false,
    id: Math.random().toString(),
  };
  tasks.push(createTaskElem);
  taskInputElem.value = '';
  listElem.textContent = '';
  renderTasks(tasks);
};

const getChecked = (event) => {
  const id = event.target.dataset.id;
  const taskCheck = tasks.find((num) => num.id === id);
  if (taskCheck.done === true) {
    taskCheck.done = false;
  } else {
    taskCheck.done = true;
  }

  listElem.textContent = '';
  renderTasks(tasks);
};

createButtonElem.addEventListener('click', newTask);
listElem.addEventListener('change', getChecked);
