const findRestaurant = function (list1, list2) {
  const dict = {};
  const resultDict = {};

  for (let i = 0; i < list1.length; i++) {
    const el = list1[i];
    dict[el] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    const el = list2[i];

    if (typeof dict[el] !== 'undefined') {
      const indexSum = dict[el] + i;
      resultDict[el] = indexSum;
    }
  }

  const sortedArr = makeSortedArr(resultDict);
  const result = [sortedArr[0].restaurant];

  let i = 1;
  while (
    i < sortedArr.length &&
    sortedArr[i - 1].indexSum === sortedArr[i].indexSum
  ) {
    result.push(sortedArr[i].restaurant);

    i++;
  }

  return result;
};

function makeSortedArr(resultDict) {
  const arr = [];
  Object.keys(resultDict).forEach((key) => {
    arr.push({
      restaurant: key,
      indexSum: resultDict[key],
    });
  });

  arr.sort((el1, el2) => {
    if (el1.indexSum <= el2.indexSum) {
      return -1;
    } else {
      return 1;
    }
  });

  return arr;
}

module.exports = { findRestaurant };
