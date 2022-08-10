class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

const serialize = (root) => {
  const arr = [];

  let node = root;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  return arr;
};

const deserialize = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let i = 0;
  const root = new ListNode(arr[0]);
  let node = root;

  i++;

  while (i < arr.length) {
    node.next = new ListNode(arr[i]);
    node = node.next;
    i++;
  }

  return root;
};

module.exports = { ListNode, serialize, deserialize };
