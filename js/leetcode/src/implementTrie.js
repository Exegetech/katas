class Node {
  constructor(val, isWord) {
    this.val = val;
    this.isWord = isWord || false;
    this.children = new Map();
  }
}

const Trie = function () {
  this.node = new Node('', false);
};

Trie.prototype.insert = function (word) {
  let node = this.node;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (!node.children.has(ch)) {
      const newNode = new Node(ch);
      node.children.set(ch, newNode);
    }

    const childNode = node.children.get(ch);

    if (i === word.length - 1) {
      childNode.isWord = true;
    }

    node = childNode;
  }
};

Trie.prototype.search = function (word) {
  let node = this.node;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (!node.children.has(ch)) {
      return false;
    }

    node = node.children.get(ch);
  }

  return node.isWord;
};

Trie.prototype.startsWith = function (prefix) {
  let node = this.node;

  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];

    if (!node.children.has(ch)) {
      return false;
    }

    node = node.children.get(ch);
  }

  return true;
};

module.exports = { Trie };
