class Node {
  constructor(val, prev, next, child) {
    this.val = val || null;
    this.prev = prev || null;
    this.next = next || null;
    this.child = child || null;
  }
}

module.exports = { Node };
