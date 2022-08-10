const { ListNode } = require('../tests/helpers/listNode');

const removeNthFromEnd = function (head, n) {
  if (head === null) {
    return null;
  }

  const dummy = new ListNode(null);
  dummy.next = head;

  const stack = [];
  let node = dummy;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  for (let i = 0; i < n; i++) {
    node = stack.pop();
  }

  const nextNode = node.next;
  const prevNode = stack[stack.length - 1];

  node.next = null;
  prevNode.next = nextNode;

  return dummy.next;
};

module.exports = { removeNthFromEnd };
