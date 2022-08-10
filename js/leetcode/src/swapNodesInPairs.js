const swapPairs = function (head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  const subResult = swapPairs(head.next.next);

  const next = head.next;
  next.next = head;
  head.next = subResult;

  return next;
};

module.exports = { swapPairs };
