const { addTwoNumbers } = require('../src/addTwoNumbers');
const { deserialize, serialize } = require('./helpers/listNode');

test('addTwoNumbers', () => {
  const l1 = deserialize([2, 4, 3]);
  const l2 = deserialize([5, 6, 4]);
  const output = [7, 0, 8];

  expect(serialize(addTwoNumbers(l1, l2))).toEqual(output);
});

test('addTwoNumbers', () => {
  const l1 = deserialize([0]);
  const l2 = deserialize([0]);
  const output = [0];

  expect(serialize(addTwoNumbers(l1, l2))).toEqual(output);
});

test('addTwoNumbers', () => {
  const l1 = deserialize([9, 9, 9, 9, 9, 9, 9]);
  const l2 = deserialize([9, 9, 9, 9]);
  const output = [8, 9, 9, 9, 0, 0, 0, 1];

  expect(serialize(addTwoNumbers(l1, l2))).toEqual(output);
});
