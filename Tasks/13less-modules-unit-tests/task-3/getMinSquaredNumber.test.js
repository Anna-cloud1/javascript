import { getMinSquaredNumber } from './getMinSquaredNumber';


it('should get min squared number', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});


it('should get min squared number', () => {
  const result = getMinSquaredNumber('some text');
  expect(result).toEqual(null);
});


it('should get min squared number', () => {
  const result = getMinSquaredNumber([23, 5, 77, 3]);
  expect(result).toEqual(9);
});
