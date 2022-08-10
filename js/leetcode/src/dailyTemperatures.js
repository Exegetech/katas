const dailyTemperatures = function (temperatures) {
  if (temperatures.length === 1) {
    return [0];
  }

  const result = new Array(temperatures.length).fill(0);

  const indexStack = [];
  indexStack.push(0);

  for (let i = 1; i < temperatures.length; i++) {
    const currTemp = temperatures[i];
    while (
      indexStack.length > 0 &&
      temperatures[indexStack[indexStack.length - 1]] < currTemp
    ) {
      const topIdx = indexStack.pop();
      result[topIdx] = i - topIdx;
    }

    indexStack.push(i);
  }

  return result;
};

module.exports = { dailyTemperatures };
