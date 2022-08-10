const { ListNode } = require('../tests/helpers/listNode');

const oddEvenList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let isEven = false;

  let odd = new ListNode(null);
  let even = new ListNode(null);

  const oddHead = odd;
  const evenHead = even;

  let node = head;
  while (node) {
    if (isEven) {
      even.next = node;
      even = even.next;
    } else {
      odd.next = node;
      odd = odd.next;
    }

    isEven = !isEven;
    node = node.next;
  }

  odd.next = evenHead.next;
  even.next = null;

  return oddHead.next;
};

module.exports = { oddEvenList };
