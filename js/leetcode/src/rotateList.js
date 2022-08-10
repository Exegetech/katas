const rotateRight = function (head, k) {
  if (head === null || k === 0) {
    return head;
  }

  const length = getLength(head);
  const rotateBy = k % length;

  if (rotateBy === 0) {
    return head;
  }

  const moveBy = length - rotateBy;

  let node = head;
  let i = 0;
  while (i < moveBy - 1) {
    node = node.next;
    i++;
  }

  const newHead = node.next;

  node.next = null;

  let _node = newHead;
  while (_node.next !== null) {
    _node = _node.next;
  }

  _node.next = head;

  return newHead;
};

function getLength(node) {
  let length = 0;

  while (node) {
    length++;
    node = node.next;
  }

  return length;
}

module.exports = { rotateRight };
