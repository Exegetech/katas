class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

const MyLinkedList = function () {
  this.head = new Node(null);
  this.tail = new Node(null);

  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.length = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) {
    return -1;
  }

  let node = this.head;
  for (let i = -1; i < index; i++) {
    node = node.next;
  }

  return node.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  const prev = this.head;
  const next = this.head.next;

  node.next = next;
  node.prev = prev;

  prev.next = node;
  next.prev = node;

  this.length++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  const next = this.tail;
  const prev = this.tail.prev;

  node.prev = prev;
  node.next = next;

  prev.next = node;
  next.prev = node;

  this.length++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) {
    return;
  }

  let node = this.head;
  for (let i = -1; i < index; i++) {
    node = node.next;
  }

  const prevNode = node.prev;
  const nextNode = node;
  const newNode = new Node(val);

  newNode.prev = prevNode;
  newNode.next = nextNode;

  prevNode.next = newNode;
  nextNode.prev = newNode;

  this.length++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) {
    return;
  }

  let node = this.head;
  for (let i = -1; i < index; i++) {
    node = node.next;
  }

  const prevNode = node.prev;
  const nextNode = node.next;

  node.next = null;
  node.prev = null;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  this.length--;
};

MyLinkedList.prototype.print = function () {
  const arr = [];

  let node = this.head;
  for (let i = -1; i <= this.length; i++) {
    arr.push(node.val);
    node = node.next;
  }

  console.log({
    length: this.length,
    arr,
  });
};

module.exports = { MyLinkedList };
