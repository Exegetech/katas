const removeElements = function (head, val) {
  if (head === null) {
    return null;
  }

  const arr = [];

  let node = head;
  while (node) {
    if (node.val !== val) {
      arr.push(node);
    }

    node = node.next;
  }

  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i].next = null;
    } else {
      arr[i].next = arr[i + 1];
    }
  }

  return arr[0];
};

module.exports = { removeElements };
