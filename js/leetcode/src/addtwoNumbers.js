const { ListNode } = require('../tests/helpers/listNode');

const addTwoNumbers = function (l1, l2) {
  const head = new ListNode(null);
  let node = head;
  let additional = 0;

  while (l1 !== null || l2 !== null) {
    if (l1 !== null && l2 !== null) {
      const sum = l1.val + l2.val + additional;

      if (sum >= 10) {
        additional = 1;
        node.next = new ListNode(sum - 10);
      } else {
        additional = 0;
        node.next = new ListNode(sum);
      }

      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 !== null) {
      const sum = l1.val + additional;
      if (sum >= 10) {
        additional = 1;
        node.next = new ListNode(sum - 10);
      } else {
        additional = 0;
        node.next = new ListNode(sum);
      }

      l1 = l1.next;
    } else {
      const sum = l2.val + additional;
      if (sum >= 10) {
        additional = 1;
        node.next = new ListNode(sum - 10);
      } else {
        additional = 0;
        node.next = new ListNode(sum);
      }

      l2 = l2.next;
    }

    node = node.next;
  }

  if (additional === 1) {
    node.next = new ListNode(1);
  }

  return head.next;
};

module.exports = { addTwoNumbers };
