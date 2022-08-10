const { removeElements } = require('../src/removeLinkedListElement');
const { deserialize, serialize } = require('./helpers/listNode');

test('removeElements', () => {
  const head = deserialize([1, 2, 6, 3, 4, 5, 6]);
  const val = 6;
  const output = [1, 2, 3, 4, 5];

  expect(serialize(removeElements(head, val))).toEqual(output);
});

test('removeElements', () => {
  const head = deserialize([]);
  const val = 1;
  const output = [];

  expect(serialize(removeElements(head, val))).toEqual(output);
});

test('removeElements', () => {
  const head = deserialize([7, 7, 7, 7]);
  const val = 7;
  const output = [];

  expect(serialize(removeElements(head, val))).toEqual(output);
});
