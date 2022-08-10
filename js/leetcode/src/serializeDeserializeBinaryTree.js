const { TreeNode } = require('../tests/helpers/treeNode');

const serialize = function (root) {
  if (root === null) {
    return 'null';
  }

  const leftSerialize = serialize(root.left);
  const rightSerialize = serialize(root.right);

  return `${root.val},${leftSerialize},${rightSerialize}`;
};

const deserialize = function (data) {
  const queue = data.split(',');
  return deserializeHelper(queue);
};

function deserializeHelper(queue) {
  const val = queue.shift();

  if (val === 'null') {
    return null;
  }

  const intVal = parseInt(val, 10);
  const node = new TreeNode(intVal);
  node.left = deserializeHelper(queue);
  node.right = deserializeHelper(queue);

  return node;
}

// Leetcode's own approach
const serialize2 = function (root) {
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

// Leetcode's own approach
const deserialize2 = function (arr) {
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

module.exports = {
  serialize,
  deserialize,
  serialize2,
  deserialize2,
};
