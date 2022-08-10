const { rotateRight } = require('../src/rotateList');
const { deserialize, serialize } = require('./helpers/listNode');

test('rotateRight', () => {
  const head = deserialize([1, 2, 3, 4, 5]);
  const k = 2;
  const output = [4, 5, 1, 2, 3];

  expect(serialize(rotateRight(head, k))).toEqual(output);
});

test('rotateRight', () => {
  const head = deserialize([0, 1, 2]);
  const k = 4;
  const output = [2, 0, 1];

  expect(serialize(rotateRight(head, k))).toEqual(output);
});

test('rotateRight', () => {
  const head = deserialize([]);
  const k = 0;
  const output = [];

  expect(serialize(rotateRight(head, k))).toEqual(output);
});

test('rotateRight', () => {
  const head = deserialize([1]);
  const k = 1;
  const output = [1];

  expect(serialize(rotateRight(head, k))).toEqual(output);
});

test('rotateRight', () => {
  const head = deserialize([1, 2, 3]);
  const k = 3;
  const output = [1, 2, 3];

  expect(serialize(rotateRight(head, k))).toEqual(output);
});
