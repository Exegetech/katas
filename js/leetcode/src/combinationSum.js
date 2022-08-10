const combinationSum = function (candidates, target) {
  const result = new Set();
  const stack = [];

  recurseBacktrack(candidates, target, stack, result);

  return Array.from(result).map((el) => JSON.parse(el));
};

function recurseBacktrack(candidates, sum, stack, result) {
  if (sum < 0) {
    return;
  }

  if (sum === 0) {
    const copied = [...stack];
    copied.sort((a, b) => (a < b ? -1 : 1));
    result.add(JSON.stringify(copied));
    return;
  }

  candidates.forEach((c) => {
    stack.push(c);
    recurseBacktrack(candidates, sum - c, stack, result);
    stack.pop();
  });
}

module.exports = { combinationSum };
