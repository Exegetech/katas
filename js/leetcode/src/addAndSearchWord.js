class Node {
  constructor(isWord = false) {
    this.isWord = isWord;
    this.children = new Map();
  }
}

const WordDictionary = function () {
  this.root = new Node();
};

WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (!node.children.has(ch)) {
      node.children.set(ch, new Node());
    }

    node = node.children.get(ch);
  }

  node.isWord = true;
};

WordDictionary.prototype.search = function (word) {
  return this.recurse(word, 0, this.root);
};

WordDictionary.prototype.recurse = function (word, index, node) {
  if (index === word.length - 1) {
    const ch = word[index];

    if (ch === '.') {
      let containWord = false;
      const keys = Array.from(node.children.keys());

      for (const key of keys) {
        const nextNode = node.children.get(key);
        containWord = containWord || nextNode.isWord;
      }

      return containWord;
    }

    if (node.children.has(ch)) {
      const nextNode = node.children.get(ch);

      return nextNode.isWord;
    }

    return false;
  }

  const ch = word[index];

  if (ch === '.') {
    let containWord = false;
    const keys = Array.from(node.children.keys());

    for (const key of keys) {
      const nextNode = node.children.get(key);
      const subResult = this.recurse(word, index + 1, nextNode);

      containWord = containWord || subResult;
    }

    return containWord;
  }

  if (node.children.has(ch)) {
    const nextNode = node.children.get(ch);
    return this.recurse(word, index + 1, nextNode);
  }

  return false;
};

module.exports = { WordDictionary };
