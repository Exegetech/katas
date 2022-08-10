class Node {
  constructor(key, val) {
    this.key = typeof val === 'undefined' ? null : key;
    this.val = typeof val === 'undefined' ? null : val;
    this.prev = null;
    this.next = null;
  }
}

const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = new Map();

  this.head = new Node();
  this.tail = new Node();

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }

  const node = this.map.get(key);
  this.removeFromList(node);
  this.putToFrontList(node);

  return node.val;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.val = value;

    this.removeFromList(node);
    this.putToFrontList(node);
    return;
  }

  if (this.size === this.capacity) {
    const node = this.removeFromBackList();
    this.map.delete(node.key);
  }

  const node = new Node(key, value);
  this.map.set(key, node);
  this.putToFrontList(node);
};

LRUCache.prototype.removeFromList = function (node) {
  if (this.size === 1) {
    node.next = null;
    node.prev = null;

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size--;
    return;
  }

  const prevNode = node.prev;
  const nextNode = node.next;

  node.prev = null;
  node.next = null;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  this.size--;
};

LRUCache.prototype.putToFrontList = function (node) {
  const nextNode = this.head.next;

  node.prev = this.head;
  node.next = nextNode;

  this.head.next = node;
  nextNode.prev = node;

  this.size++;
};

LRUCache.prototype.removeFromBackList = function () {
  if (this.size === 1) {
    const node = this.tail.prev;
    node.next = null;
    node.prev = null;

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size--;
    return node;
  }

  const node = this.tail.prev;
  const prevNode = node.prev;

  node.next = null;
  node.prev = null;

  prevNode.next = this.tail;
  this.tail.prev = prevNode;

  this.size--;

  return node;
};

LRUCache.prototype.print = function () {
  console.log('Map');
  console.log('keys ', this.map.keys());
  console.log('values ', this.map.values());

  console.log('List');
  const arr = [];
  let node = this.head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  console.log(arr);
};

module.exports = { LRUCache };
