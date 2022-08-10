class Node {
  constructor(val) {
    this.val = val;
    this.isWord = false;
    this.hot = 0;
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
        node.children.set(ch, new Node(ch));
      }

      node = node.children.get(ch);
    }

    node.isWord = true;
    node.hot++;
  }

  findWords(word) {
    const stack = [];

    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      stack.push(ch);

      if (!node.children.has(ch)) {
        return [];
      }

      node = node.children.get(ch);
    }

    // Remove redundancy before starting recursion
    stack.pop();

    const result = [];

    this.recurse(result, stack, node);

    return result;
  }

  recurse(result, stack, node) {
    if (node.children.size === 0) {
      stack.push(node.val);
      const string = stack.join('');
      const hot = node.hot;

      result.push({ string, hot });
      return;
    }

    stack.push(node.val);
    if (node.isWord) {
      const string = stack.join('');
      const hot = node.hot;

      result.push({ string, hot });
    }

    const children = Array.from(node.children.values());
    children.forEach((child) => {
      this.recurse(result, stack, child);
      stack.pop();
    });
  }
}

const AutocompleteSystem = function (sentences, times) {
  this.trie = new Trie();

  sentences.forEach((s, i) => {
    const time = times[i];

    for (let n = 0; n < time; n++) {
      this.trie.insert(s);
    }
  });

  this.current = [];
};

AutocompleteSystem.prototype.input = function (c) {
  if (c === '#') {
    const newInput = this.current.join('');
    this.trie.insert(newInput);
    this.current = [];
    return [];
  }

  this.current.push(c);
  const newInput = this.current.join('');
  const result = this.trie.findWords(newInput);

  result.sort((e1, e2) => {
    if (e1.hot > e2.hot) {
      return -1;
    }

    if (e1.hot < e2.hot) {
      return 1;
    }

    return e1.string.localeCompare(e2.string);
  });

  const strings = result.map((r) => r.string);

  if (strings.length < 3) {
    return strings;
  }

  return strings.slice(0, 3);
};

module.exports = { AutocompleteSystem };
