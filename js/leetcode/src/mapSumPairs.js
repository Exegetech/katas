class Node {
  constructor(val, isWord) {
    this.val = val || 0;
    this.isWord = isWord || false;
    this.children = new Map();
  }
}

const MapSum = function () {
  this.root = new Node();
};

MapSum.prototype.insert = function (key, val) {
  let node = this.root;

  for (let i = 0; i < key.length; i++) {
    const ch = key[i];

    if (!node.children.has(ch)) {
      node.children.set(ch, new Node());
    }

    const newNode = node.children.get(ch);

    if (i === key.length - 1) {
      newNode.isWord = true;
      newNode.val = val;
    }

    node = newNode;
  }
};

MapSum.prototype.sum = function (prefix) {
  let node = this.root;

  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];

    if (!node.children.has(ch)) {
      return 0;
    }

    node = node.children.get(ch);
  }

  const stack = [node];

  let sum = 0;
  while (stack.length > 0) {
    const node = stack.pop();

    if (node.isWord) {
      sum += node.val;
    }

    for (const c of Array.from(node.children.values())) {
      stack.push(c);
    }
  }

  return sum;
};

module.exports = { MapSum };
