const { getIntersectionNode } = require('../src/intersectionOfTwoLinkedList');
const { deserialize } = require('./helpers/listNode');

test('1', () => {
  const list1 = deserialize([4, 1]);
  const list2 = deserialize([5, 6, 1]);
  const list3 = deserialize([8, 4, 5]);

  let node1 = list1;
  while (node1.next) {
    node1 = node1.next;
  }

  let node2 = list2;
  while (node2.next) {
    node2 = node2.next;
  }

  node1.next = list3;
  node2.next = list3;

  expect(getIntersectionNode(list1, list2)).toBe(list3);
});

test('2', () => {
  const list1 = deserialize([1, 9, 1]);
  const list2 = deserialize([3]);
  const list3 = deserialize([2, 4]);

  let node1 = list1;
  while (node1.next) {
    node1 = node1.next;
  }

  let node2 = list2;
  while (node2.next) {
    node2 = node2.next;
  }

  node1.next = list3;
  node2.next = list3;

  expect(getIntersectionNode(list1, list2)).toBe(list3);
});

test('3', () => {
  const list1 = deserialize([2, 6, 4]);
  const list2 = deserialize([1, 5]);

  expect(getIntersectionNode(list1, list2)).toBe(null);
});
