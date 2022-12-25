const baseUrl = 'https://63a8af9c100b7737b983b748.mockapi.io/tasks/task';

const mapTasks = tasks => {
    tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }))
}

export const getTasksList = () => {
  return fetch(baseUrl)
  .then((response) => response.json());

};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch((`${baseUrl}/${taskId}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};