const { canVisitAllRooms } = require('../src/keysAndRooms');

test('1', () => {
  const rooms = [[1], [2], [3], []];
  const output = true;

  expect(canVisitAllRooms(rooms)).toEqual(output);
});

test('2', () => {
  const rooms = [[1, 3], [3, 0, 1], [2], [0]];
  const output = false;

  expect(canVisitAllRooms(rooms)).toEqual(output);
});
