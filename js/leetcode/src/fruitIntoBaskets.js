const totalFruit = function (fruits) {
  const fruitTypeCount = {};

  let max = 0;
  let i = 0;
  let j = i;

  while (j < fruits.length) {
    while (j < fruits.length && Object.keys(fruitTypeCount).length <= 2) {
      const fruitType = fruits[j];

      if (typeof fruitTypeCount[fruitType] === 'undefined') {
        fruitTypeCount[fruitType] = 1;
      } else {
        fruitTypeCount[fruitType] += 1;
      }

      j++;
    }

    max = Math.max(max, calculate(fruitTypeCount));

    while (i <= j && Object.keys(fruitTypeCount).length > 2) {
      const fruitType = fruits[i];

      if (fruitTypeCount[fruitType] === 1) {
        delete fruitTypeCount[fruitType];
      } else if (fruitTypeCount[fruitType] > 1) {
        fruitTypeCount[fruitType] -= 1;
      }

      i++;
    }

    j++;
  }

  return max;
};

function calculate(fruitTypeCount) {
  return Object.keys(fruitTypeCount).reduce((count, fruitType) => {
    return count + fruitTypeCount[fruitType];
  }, 0);
}

module.exports = { totalFruit };
