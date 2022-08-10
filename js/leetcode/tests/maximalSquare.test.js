const { maximalSquare, maximalSquare2 } = require('../src/maximalSquare');

test('maximalSquare', () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ];

  const output = 4;

  expect(maximalSquare(matrix)).toEqual(output);
});

test('maximalSquare', () => {
  const matrix = [
    ['0', '1'],
    ['1', '0'],
  ];

  const output = 1;

  expect(maximalSquare(matrix)).toEqual(output);
});

test('maximalSquare', () => {
  const matrix = [['0']];
  const output = 0;

  expect(maximalSquare(matrix)).toEqual(output);
});

test('maximalSquare', () => {
  const matrix = [['1', '0']];
  const output = 1;

  expect(maximalSquare(matrix)).toEqual(output);
});

test('maximalSquare2', () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ];

  const output = 4;

  expect(maximalSquare2(matrix)).toEqual(output);
});

test('maximalSquare2', () => {
  const matrix = [
    ['0', '1'],
    ['1', '0'],
  ];

  const output = 1;

  expect(maximalSquare2(matrix)).toEqual(output);
});

test('maximalSquare2', () => {
  const matrix = [['0']];
  const output = 0;

  expect(maximalSquare2(matrix)).toEqual(output);
});

test('maximalSquare2', () => {
  const matrix = [['1', '0']];
  const output = 1;

  expect(maximalSquare2(matrix)).toEqual(output);
});
