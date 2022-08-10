const { flatten } = require('../src/flattenAMultiLevelDoublyLinkedList');
const { Node } = require('./helpers/multiLevelNode');
const { serialize } = require('./helpers/listNode');

test('flatten', () => {
  const n1 = new Node(1);
  const n2 = new Node(2);
  const n3 = new Node(3);

  const n4 = new Node(4);
  const n5 = new Node(5);
  const n6 = new Node(6);

  const n7 = new Node(7);
  const n8 = new Node(8);

  n1.next = n2;
  n2.prev = n1;
  n2.next = n3;
  n3.prev = n2;

  n2.child = n4;

  n4.next = n5;
  n5.prev = n4;
  n5.next = n6;
  n6.prev = n5;

  n5.child = n7;

  n7.next = n8;
  n8.prev = n7;

  const output = [1, 2, 4, 5, 7, 8, 6, 3];

  expect(serialize(flatten(n1))).toEqual(output);
});

test('flatten', () => {
  const n1 = new Node(1);
  const n2 = new Node(2);
  const n3 = new Node(3);

  n1.child = n2;
  n2.child = n3;

  const output = [1, 2, 3];

  expect(serialize(flatten(n1))).toEqual(output);
});
