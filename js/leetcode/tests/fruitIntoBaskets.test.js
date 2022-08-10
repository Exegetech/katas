const { totalFruit } = require('../src/fruitIntoBaskets');

test.skip('totalFruit', () => {
  const fruits = [1, 2, 1];
  const output = 3;

  expect(totalFruit(fruits)).toEqual(output);
});

test.skip('totalFruit', () => {
  const fruits = [0, 1, 2, 2];
  const output = 3;

  expect(totalFruit(fruits)).toEqual(output);
});

test.skip('totalFruit', () => {
  const fruits = [1, 2, 3, 2, 2];
  const output = 4;

  expect(totalFruit(fruits)).toEqual(output);
});

test.skip('totalFruit', () => {
  const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
  const output = 5;

  expect(totalFruit(fruits)).toEqual(output);
});
