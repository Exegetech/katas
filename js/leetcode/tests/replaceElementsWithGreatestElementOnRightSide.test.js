const {
  replaceElements,
} = require('../src/replaceElementsWithGreatestElementOnRightSide');

test('1', () => {
  const arr = [17, 18, 5, 4, 6, 1];
  const output = [18, 6, 6, 6, 1, -1];

  expect(replaceElements(arr)).toEqual(output);
});

test('2', () => {
  const arr = [400];
  const output = [-1];

  expect(replaceElements(arr)).toEqual(output);
});
