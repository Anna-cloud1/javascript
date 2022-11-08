export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
}

export const withdraw = (clients, balances, client, amount) => {
  const i = clients.indexOf(client);
  const balance = balances[i];
  if (balance > amount) {
    const rest = balance - amount;
    balances[i] = rest;
    return rest;
  }
  return -1;
};

export const getAdults = (obj) => {
  const newObj = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};
