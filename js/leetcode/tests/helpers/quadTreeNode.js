class Node {
  constructor(
    val,
    isLeaf,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  ) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

module.exports = { Node };
