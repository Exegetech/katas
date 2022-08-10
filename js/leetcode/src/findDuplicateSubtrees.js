const findDuplicateSubtrees = function (root) {
  const map = new Map();

  recurseDfs(root, map);

  const arr = Array.from(map.entries());
  const result = [];

  for (const kv of arr) {
    const value = kv[1];
    if (value.length > 1) {
      result.push(value[0]);
    }
  }

  return result;
};

function recurseDfs(node, map) {
  if (node === null) {
    return;
  }

  const serialized = serialize(node);
  if (map.has(serialized)) {
    map.get(serialized).push(node);
  } else {
    map.set(serialized, [node]);
  }

  recurseDfs(node.left, map);
  recurseDfs(node.right, map);
}

function serialize(node) {
  if (node === null) {
    return 'null';
  }

  const left = serialize(node.left);
  const right = serialize(node.right);

  return [node.val, left, right].join(',');
}

module.exports = { findDuplicateSubtrees };
