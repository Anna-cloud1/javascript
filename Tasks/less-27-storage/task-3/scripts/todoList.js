 import { onCreateTask } from './createTask.js';
 import { onToggleTask } from './updateTask.js';


export const initTodoListHandlers = () => {
const createButtonElem = document.querySelector('.create-task-btn');
  createButtonElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onToggleTask);
};