import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

it('should get squared numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([2, 44, 7, 8, 5, 1]);
  expect(result).toEqual([7, 5, 1]);
});


it('should get sum of numbers', () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});
