const { wallsAndGates } = require('../src/wallsAndGates');

test('1', () => {
  const rooms = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ];

  const output = [
    [3, -1, 0, 1],
    [2, 2, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4],
  ];

  wallsAndGates(rooms);

  expect(rooms).toEqual(output);
});

test('2', () => {
  const rooms = [[-1]];
  const output = [[-1]];

  wallsAndGates(rooms);

  expect(rooms).toEqual(output);
});

test('3', () => {
  const rooms = [[2147483647]];
  const output = [[2147483647]];

  wallsAndGates(rooms);

  expect(rooms).toEqual(output);
});

test('4', () => {
  const rooms = [[0]];
  const output = [[0]];

  wallsAndGates(rooms);

  expect(rooms).toEqual(output);
});
