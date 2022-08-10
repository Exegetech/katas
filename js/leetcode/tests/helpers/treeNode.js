class TreeNode {
  constructor(val, left, right) {
    this.val = typeof val === 'undefined' ? 0 : val;
    this.left = typeof left === 'undefined' ? null : left;
    this.right = typeof right === 'undefined' ? null : right;
  }
}

const serialize = (root) => {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const qlen = queue.length;
    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();

      if (node === null) {
        result.push(null);
      } else {
        result.push(node.val);

        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
};

const deserialize = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];

  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      const left = new TreeNode(arr[i]);
      node.left = left;
      queue.push(left);
    }

    i++;

    if (arr[i] !== null) {
      const right = new TreeNode(arr[i]);
      node.right = right;
      queue.push(right);
    }

    i++;
  }

  return root;
};

module.exports = { TreeNode, serialize, deserialize };
