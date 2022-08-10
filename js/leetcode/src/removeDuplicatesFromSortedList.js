const deleteDuplicates = function (head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  while (head.next !== null && head.val === head.next.val) {
    head = head.next;
  }

  head.next = deleteDuplicates(head.next);
  return head;
};

module.exports = { deleteDuplicates };
