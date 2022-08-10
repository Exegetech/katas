const { floodFill } = require('../src/floodFill');

test('1', () => {
  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  const sr = 1;
  const sc = 1;
  const newColor = 2;
  const output = [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ];

  expect(floodFill(image, sr, sc, newColor)).toEqual(output);
});

test('2', () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const sr = 0;
  const sc = 0;
  const newColor = 2;
  const output = [
    [2, 2, 2],
    [2, 2, 2],
  ];

  expect(floodFill(image, sr, sc, newColor)).toEqual(output);
});

test('3', () => {
  const image = [
    [0, 0, 0],
    [0, 1, 1],
  ];
  const sr = 1;
  const sc = 1;
  const newColor = 1;
  const output = [
    [0, 0, 0],
    [0, 1, 1],
  ];

  expect(floodFill(image, sr, sc, newColor)).toEqual(output);
});
