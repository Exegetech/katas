class Node {
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];

      if (!node.children.has(ch)) {
        node.children.set(ch, new Node());
      }

      const newNode = node.children.get(ch);
      if (i === word.length - 1) {
        newNode.isWord = true;
      }

      node = newNode;
    }
  }

  findShortestRoot(word) {
    const rootArr = [];
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      rootArr.push(ch);

      if (!node.children.has(ch)) {
        return '';
      }

      const newNode = node.children.get(ch);
      if (newNode.isWord) {
        rootArr.push(newNode.val);
        return rootArr.join('');
      }

      node = newNode;
    }

    return '';
  }
}

const replaceWords = function (dictionary, sentence) {
  const trie = new Trie();

  dictionary.forEach((d) => {
    trie.insert(d);
  });

  return sentence
    .split(' ')
    .map((word) => {
      const root = trie.findShortestRoot(word);
      if (root === '') {
        return word;
      }

      return root;
    })
    .join(' ');
};

module.exports = { replaceWords };
