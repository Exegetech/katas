const deleteNode = function (root, key) {
  if (root === null) {
    return null;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  }

  if (root.left === null && root.right === null) {
    return null;
  }

  if (root.right) {
    const successor = findSuccessor(root, key);
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
    return root;
  }

  const predecessor = findPredecessorNode(root);
  root.val = predecessor.val;
  root.left = deleteNode(root.left, root.val);
  return root;
};

function findPredecessorNode(root) {
  let node = root;
  node = node.left;

  while (node.right !== null) {
    node = node.right;
  }

  return node;
}

function findSuccessor(root) {
  let node = root;
  node = node.right;

  while (node.left !== null) {
    node = node.left;
  }

  return node;
}

module.exports = { deleteNode };
