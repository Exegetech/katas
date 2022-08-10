const reorderList = function (head) {
  if (head.next === null) {
    return head;
  }

  const deque = buildTailDeque(head);

  let pop = true;
  let node = head;

  while (deque.length > 0) {
    if (pop) {
      const curr = deque.pop();
      node.next = curr;
      node = node.next;
      pop = !pop;
    } else {
      const curr = deque.shift();
      node.next = curr;
      node = node.next;
      pop = !pop;
    }
  }

  return head;
};

function buildTailDeque(node) {
  const deque = [];

  while (node.next !== null) {
    const next = node.next;
    node.next = null;

    deque.push(next);
    node = next;
  }

  return deque;
}

module.exports = { reorderList };
