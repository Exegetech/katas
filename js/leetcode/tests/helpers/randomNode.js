class Node {
  constructor(val, next, random) {
    this.val = val || null;
    this.next = next || null;
    this.random = random || null;
  }
}

module.exports = { Node };
