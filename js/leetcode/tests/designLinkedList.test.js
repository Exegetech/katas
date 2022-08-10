const { MyLinkedList } = require('../src/designLinkedList');

test('1', () => {
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtHead(1);
  myLinkedList.deleteAtIndex(0);
});

test('2', () => {
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtHead(1);
  myLinkedList.addAtTail(3);
  myLinkedList.addAtIndex(1, 2);
  expect(myLinkedList.get(1)).toEqual(2);
  myLinkedList.deleteAtIndex(1);
  expect(myLinkedList.get(1)).toEqual(3);
});

test('3', () => {
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtHead(7);
  myLinkedList.addAtHead(2);
  myLinkedList.addAtHead(1);
  myLinkedList.addAtIndex(3, 0);
  myLinkedList.deleteAtIndex(2);
  myLinkedList.addAtHead(6);
  myLinkedList.addAtTail(4);
  expect(myLinkedList.get(4)).toEqual(4);
  myLinkedList.addAtHead(4);
  myLinkedList.addAtIndex(5, 0);
  myLinkedList.addAtHead(6);
});

test('4', () => {
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtHead(2);
  myLinkedList.deleteAtIndex(1);
  myLinkedList.addAtHead(2);
  myLinkedList.addAtHead(7);
  myLinkedList.addAtHead(3);
  myLinkedList.addAtHead(2);
  myLinkedList.addAtHead(5);
  myLinkedList.addAtTail(5);
  expect(myLinkedList.get(5)).toEqual(2);
  myLinkedList.deleteAtIndex(6);
  myLinkedList.deleteAtIndex(4);
});
