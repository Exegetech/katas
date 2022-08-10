const middleNode = function (head) {
  if (head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

module.exports = { middleNode };
