const tribonacci = function (n) {
  if (n === 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  const tabs = new Array(n);
  tabs[0] = 0;
  tabs[1] = 1;
  tabs[2] = 1;

  for (let i = 3; i <= n; i++) {
    tabs[i] = tabs[i - 1] + tabs[i - 2] + tabs[i - 3];
  }

  return tabs[tabs.length - 1];
};

module.exports = { tribonacci };
