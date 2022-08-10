const BSTIterator = function (root) {
  this.collect = [];
  this.index = 0;

  if (root === null) {
    return;
  }

  const stack = [];
  let node = root;

  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    this.collect.push(node);
    node = node.right;
  }
};

BSTIterator.prototype.next = function () {
  const val = this.collect[this.index].val;
  this.index++;
  return val;
};

BSTIterator.prototype.hasNext = function () {
  return this.index < this.collect.length;
};

module.exports = { BSTIterator };
