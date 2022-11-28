const getItemsList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
  return elementList;
};

getItemsList();

const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  Array.from(elementsArray);
  console.dir(elementsArray);
  return elementsArray;
};

getItemsArray();