import { calc } from './calculator';

it('should get result for numbers', () => {
  const resultPlus = calc('2 + 5');
  expect(resultPlus).toEqual('2 + 5 = 7');

  const resultMinus = calc('12 - 7');
  expect(resultMinus).toEqual('12 - 7 = 5');

  const resultMultiply = calc('4 * 10');
  expect(resultMultiply).toEqual('4 * 10 = 40');

  const resultDivide = calc('30 / 5');
  expect(resultDivide).toEqual('30 / 5 = 6');

   const resultNotString = calc(30 + 5);
   expect(resultNotString).toEqual(null);
});
