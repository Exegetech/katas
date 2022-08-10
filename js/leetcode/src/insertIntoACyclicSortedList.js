const { ListNode } = require('../tests/helpers/listNode');

const insert = function (head, insertVal) {
  if (head === null) {
    const node = new ListNode(insertVal);
    node.next = node;

    return node;
  }

  let node = head;
  while (node.next !== head) {
    if (node.val <= node.next.val) {
      if (node.val <= insertVal && insertVal <= node.next.val) {
        break;
      }
    } else {
      if (node.val <= insertVal || insertVal <= node.next.val) {
        break;
      }
    }

    node = node.next;
  }

  const prevNode = node;
  const nextNode = node.next;

  const newNode = new ListNode(insertVal);

  prevNode.next = newNode;
  newNode.next = nextNode;

  return head;
};

module.exports = { insert };
