const flatten = function (head) {
  let node = head;
  while (node !== null) {
    if (node.child === null) {
      node = node.next;
      continue;
    }

    const nextNode = node.next;

    let flattened = flatten(node.child);
    node.child = null;

    node.next = flattened;
    flattened.prev = node;

    while (flattened.next !== null) {
      flattened = flattened.next;
    }

    flattened.next = nextNode;

    if (nextNode !== null) {
      nextNode.prev = flattened;
    }

    node = node.next;
  }

  return head;
};

module.exports = { flatten };
