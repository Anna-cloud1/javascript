import { reverseArray, withdraw, getAdults } from './index';

it('should get reverse array', () => {
  const resultClassic = reverseArray([11, 34, 66]);
  expect(resultClassic).toEqual([66, 34, 11]);

  const resultNull = reverseArray(11, 34, 66);
  expect(resultNull).toEqual(null);

  const resultMinus = reverseArray([-23, -5, -87, -4]);
  expect(resultMinus).toEqual([-4, -87, -5, -23]);

  const resultString = reverseArray('11, 34, 66');
  expect(resultString).toEqual(null);
});

it('should get minus a certain number', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);

  const withoutName = withdraw(['Ann', 'User'], [1400, 87, -6], 'John', 50);
  expect(withoutName).toEqual(-1);

  const numIsSting = withdraw(['Ann', 'User'], ['100', 87, -6], 'Anna', 50);
  expect(numIsSting).toEqual(-1);
});

it('should filtered object', () => {
  const allSmall = getAdults({ 'John Doe': 15, Tom: 17, Bob: 12 });
  expect(allSmall).toEqual({});

  const nanAge = getAdults({ 'John Doe': 25, Tom: 17, Bob: NaN });
  expect(nanAge).toEqual({'John Doe': 25});
  
  const stringAge = getAdults({ 'John Doe': 25, Tom: 17, Bob: '18' });
  expect(stringAge).toEqual({'John Doe': 25, 'Bob': '18'});
});
