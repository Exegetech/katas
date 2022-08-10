const { Node } = require('../tests/helpers/randomNode');

const copyRandomList = function (head) {
  if (head === null) {
    return null;
  }

  const map = new Map();
  const queue = [head];
  const clonedHead = new Node(head.val);
  map.set(head, clonedHead);

  while (queue.length > 0) {
    const qlen = queue.length;

    for (let i = 0; i < qlen; i++) {
      const currNode = queue.shift();
      const clonedCurrNode = map.get(currNode);

      if (currNode.next !== null) {
        if (!map.has(currNode.next)) {
          const clonedCurrNodeNext = new Node(currNode.next.val);

          map.set(currNode.next, clonedCurrNodeNext);
          queue.push(currNode.next);
        }

        clonedCurrNode.next = map.get(currNode.next);
      }

      if (currNode.random !== null) {
        if (!map.has(currNode.random)) {
          const clonedCurrNodeRandom = new Node(currNode.random.val);

          map.set(currNode.random, clonedCurrNodeRandom);
          queue.push(currNode.random);
        }

        clonedCurrNode.random = map.get(currNode.random);
      }
    }
  }

  return map.get(head);
};

module.exports = { copyRandomList };
