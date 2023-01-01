const baseUrl = `https://63a8af9c100b7737b983b748.mockapi.io/tasks/users?format=json`;

function getUsersList() {
  return fetch(baseUrl).then((response) => response.json());
}

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
}

function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  });
}

function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

// examples

let users = [
  {
    '1': {
      id: "1",
      email: "anya@email.com",
      firstName: "Anna",
      lastName: "Chufarova",
      age: 21,
    },
    '2': {
      id: "2",
      email: "sasha@email.com",
      firstName: "Sasha",
      lastName: "Kozukhar",
      age: 25,
    },
  },
];

// getUsersList(users).then((users) => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

getUserById(users = '2').then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

// const newUserData = {
//   email: "cool@email.com",
//   firstName: "Iron",
//   lastName: "Man",
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log("User created");
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });
