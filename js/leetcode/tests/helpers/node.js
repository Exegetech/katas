class Node {
  constructor(val, neighbors) {
    this.val = typeof val === 'undefined' ? 0 : val;
    this.neighbors =
      typeof neighbors === 'undefined' ? [] : neighbors;
  }
}

module.exports = { Node };
