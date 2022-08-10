const { deleteDuplicates } = require('../src/removeDuplicatesFromSortedList');
const { deserialize, serialize } = require('./helpers/listNode');

const cases = [
  {
    head: deserialize([1, 1, 2]),
    output: [1, 2],
  },
  {
    head: deserialize([1, 1, 2, 3, 3]),
    output: [1, 2, 3],
  },
  {
    head: deserialize([1, 1, 1, 2, 3, 3, 3]),
    output: [1, 2, 3],
  },
  {
    head: deserialize([1, 2]),
    output: [1, 2],
  },
  {
    head: deserialize([1, 1]),
    output: [1],
  },
  {
    head: deserialize([1, 1, 1]),
    output: [1],
  },
];

test.each(cases)('deleteDuplicates', ({ head, output }) => {
  expect(serialize(deleteDuplicates(head))).toEqual(output);
});
