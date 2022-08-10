const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const { ListNode } = require('../tests/helpers/listNode');

const mergeKLists = function (lists) {
  const minQ = new MinPriorityQueue({
    priority: (node) => node.val,
  });

  lists.forEach((node) => {
    if (node !== null) {
      minQ.enqueue(node);
    }
  });

  const dummy = new ListNode(null);
  let node = dummy;

  while (minQ.size() > 0) {
    const nextNode = minQ.dequeue().element;

    if (nextNode.next !== null) {
      minQ.enqueue(nextNode.next);
    }

    node.next = nextNode;
    node = node.next;
  }

  return dummy.next;
};

module.exports = { mergeKLists };
