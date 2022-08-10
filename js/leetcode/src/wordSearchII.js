class Trie {
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }

  add(word) {
    let node = this;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];

      if (!node.children.has(ch)) {
        node.children.set(ch, new Trie());
      }

      node = node.children.get(ch);
    }

    node.isWord = true;
  }
}

const findWords = function (board, words) {
  const trie = new Trie();
  words.forEach((word) => trie.add(word));

  const result = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const visited = new Set();
      const stack = [];

      recurse(board, row, col, trie, visited, result, stack);
    }
  }

  return Array.from(result);
};

function recurse(board, row, col, trie, visited, result, stack) {
  visited.add(`${row}-${col}`);
  const ch = board[row][col];

  if (!trie.children.has(ch)) {
    return;
  }

  const nextTrie = trie.children.get(ch);
  stack.push(ch);

  if (nextTrie.isWord) {
    result.add(stack.join(''));
  }

  const neighbors = getNeighbors(board, row, col);
  for (const n of neighbors) {
    if (!visited.has(`${n.row}-${n.col}`)) {
      recurse(board, n.row, n.col, nextTrie, visited, result, stack);

      visited.delete(`${n.row}-${n.col}`);
    }
  }

  stack.pop();
}

function getNeighbors(board, row, col) {
  const neighbors = [
    {
      row,
      col: col + 1,
    },
    {
      row,
      col: col - 1,
    },
    {
      row: row + 1,
      col,
    },
    {
      row: row - 1,
      col,
    },
  ];

  return neighbors.filter((n) => {
    return (
      n.row >= 0 &&
      n.row < board.length &&
      n.col >= 0 &&
      n.col < board[n.row].length
    );
  });
}

module.exports = { findWords };
