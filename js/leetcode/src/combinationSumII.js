const combinationSum2 = function (candidates, target) {
  const result = new Set();
  const stack = [];

  recursiveBacktrack(candidates, target, stack, result);

  return Array.from(result).map((el) => JSON.parse(el));
};

function recursiveBacktrack(candidates, sum, stack, result) {
  if (sum < 0) {
    return;
  }

  if (sum === 0) {
    const copied = [...stack];
    copied.sort((a, b) => (a < b ? -1 : 1));
    result.add(JSON.stringify(copied));
    return;
  }

  for (let i = 0; i < candidates.length; i++) {
    const currChoice = candidates[i];
    const newCandidates = candidates.slice(i + 1);

    stack.push(currChoice);

    recursiveBacktrack(newCandidates, sum - currChoice, stack, result);

    stack.pop();
  }
}

module.exports = { combinationSum2 };
