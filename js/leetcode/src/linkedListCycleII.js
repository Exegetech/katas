const detectCycle = function (head) {
  if (head === null) {
    return null;
  }

  const set = new Set();

  let node = head;
  while (!set.has(node)) {
    set.add(node);

    if (node.next === null) {
      return null;
    }

    node = node.next;
  }

  return node;
};

module.exports = { detectCycle };
