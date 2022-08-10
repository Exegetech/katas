const minCostClimbingStairs = function (cost) {
  if (cost.length <= 1) {
    return 0;
  }

  const tabs = new Array(cost.length + 1);
  tabs[0] = 0;
  tabs[1] = 0;

  for (let i = 2; i < cost.length + 1; i++) {
    tabs[i] = Math.min(tabs[i - 1] + cost[i - 1], tabs[i - 2] + cost[i - 2]);
  }

  return tabs[tabs.length - 1];
};

const minCostClimbingStairs2 = function (cost) {
  const memo = new Array(cost.length + 1).fill(null);
  memo[0] = 0;
  memo[1] = 0;

  recurse(cost, memo, cost.length);

  return memo[memo.length - 1];
};

function recurse(cost, memo, index) {
  if (memo[index] !== null) {
    return memo[index];
  }

  memo[index] = Math.min(
    cost[index - 1] + recurse(cost, memo, index - 1),
    cost[index - 2] + recurse(cost, memo, index - 2)
  );

  return memo[index];
}

module.exports = {
  minCostClimbingStairs,
  minCostClimbingStairs2,
};
