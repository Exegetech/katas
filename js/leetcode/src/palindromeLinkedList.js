const isPalindrome = function (head) {
  const arr = [];

  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

module.exports = { isPalindrome };
