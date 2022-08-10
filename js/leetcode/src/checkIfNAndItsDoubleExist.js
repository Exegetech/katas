const checkIfExist = function (arr) {
  const doublesToIdxMap = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    doublesToIdxMap[num] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const doubled = num * 2;

    if (
      typeof doublesToIdxMap[doubled] !== 'undefined' &&
      doublesToIdxMap[doubled] !== i
    ) {
      return true;
    }
  }

  return false;
};

module.exports = { checkIfExist };
