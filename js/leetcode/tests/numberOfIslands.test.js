const { numIslands } = require('../src/numberOfIslands');

test('1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];

  const output = 1;

  expect(numIslands(grid)).toEqual(output);
});

test('2', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];

  const output = 3;

  expect(numIslands(grid)).toEqual(output);
});
