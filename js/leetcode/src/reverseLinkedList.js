const reverseList = function (head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  const subResult = reverseList(head.next);
  let node = subResult;

  while (node.next !== null) {
    node = node.next;
  }

  node.next = head;
  head.next = null;

  return subResult;
};

const reverseList2 = function (head) {
  if (head == null) {
    return head;
  }

  let currentHead = head;

  while (head.next != null) {
    const p = head.next;
    head.next = p.next;
    p.next = currentHead;
    currentHead = p;
  }

  return currentHead;
};

module.exports = { reverseList, reverseList2 };
