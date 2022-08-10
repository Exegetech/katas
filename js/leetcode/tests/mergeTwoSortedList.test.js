const { mergeTwoLists } = require('../src/mergeTwoSortedList');
const { ListNode } = require('./helpers/listNode');

test('1', () => {
  expect(mergeTwoLists(null, null)).toEqual(null);
});

test('2', () => {
  const nodea1 = new ListNode(1);

  const result = mergeTwoLists(nodea1, null);

  expect(result.val).toEqual(1);
  expect(result.next).toEqual(null);
});

test('3', () => {
  const nodea1 = new ListNode(1);

  const result = mergeTwoLists(null, nodea1);

  expect(result.val).toEqual(1);
  expect(result.next).toEqual(null);
});

test('4', () => {
  const nodea1 = new ListNode(1);
  const nodeb2 = new ListNode(2);

  const result = mergeTwoLists(nodea1, nodeb2);

  expect(result.val).toEqual(1);
  expect(result.next.val).toEqual(2);
  expect(result.next.next).toEqual(null);
});

test('5', () => {
  const nodea1 = new ListNode(1);
  const nodea2 = new ListNode(2);
  const nodea4 = new ListNode(4);

  nodea1.next = nodea2;
  nodea2.next = nodea4;

  const nodeb1 = new ListNode(1);
  const nodeb3 = new ListNode(3);
  const nodeb4 = new ListNode(4);

  nodeb1.next = nodeb3;
  nodeb3.next = nodeb4;

  const result = mergeTwoLists(nodea1, nodeb1);

  expect(result.val).toEqual(1);
  expect(result.next.val).toEqual(1);
  expect(result.next.next.val).toEqual(2);
  expect(result.next.next.next.val).toEqual(3);
  expect(result.next.next.next.next.val).toEqual(4);
  expect(result.next.next.next.next.next.val).toEqual(4);
  expect(result.next.next.next.next.next.next).toEqual(null);
});
