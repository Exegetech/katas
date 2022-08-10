const findLeaves = function (root) {
  const result = {};
  const maxHeight = recurse(result, root);

  return toArray(maxHeight, result);
};

function recurse(result, node) {
  if (node === null) {
    return 0;
  }

  const leftHeight = recurse(result, node.left);
  const rightHeight = recurse(result, node.right);

  const currHeight = 1 + Math.max(leftHeight, rightHeight);

  if (typeof result[currHeight] === 'undefined') {
    result[currHeight] = [node.val];
  } else {
    result[currHeight].push(node.val);
  }

  return currHeight;
}

function toArray(arrayLen, result) {
  const resultArr = new Array(arrayLen);

  Object.keys(result).forEach((level) => {
    resultArr[level - 1] = result[level];
  });

  return resultArr;
}

module.exports = { findLeaves };
