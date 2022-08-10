const combine = function (n, k) {
  const result = [];

  backtrack(result, n, k, 1, []);

  return result;
};

function backtrack(result, n, k, num, stack) {
  if (stack.length === k) {
    result.push([...stack]);
    return;
  }

  for (let i = num; i <= n; i++) {
    stack.push(i);
    backtrack(result, n, k, i + 1, stack);
    stack.pop();
  }
}

module.exports = { combine };
