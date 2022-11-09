// algo
// находим мин число
// возвращаем его значение в квадрате

export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const minArr = Math.min(...arr);
  return minArr * minArr;
};
