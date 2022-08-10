const { reorderList } = require('../src/reorderList');
const { deserialize, serialize } = require('./helpers/listNode');

const cases = [
  {
    head: [1],
    output: [1],
  },
  {
    head: [1, 2],
    output: [1, 2],
  },
  {
    head: [1, 2, 3],
    output: [1, 3, 2],
  },
  {
    head: [1, 2, 3, 4],
    output: [1, 4, 2, 3],
  },
  {
    head: [1, 2, 3, 4, 5],
    output: [1, 5, 2, 4, 3],
  },
];

test.each(cases)('reorderList', ({ head, output }) => {
  expect(serialize(reorderList(deserialize(head)))).toEqual(output);
});
