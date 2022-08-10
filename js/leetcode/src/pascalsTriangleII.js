const getRow = function (rowIndex) {
  const result = [];

  for (let i = 0; i <= rowIndex; i++) {
    const temp = [1];

    if (i === 0) {
      result.push(temp);
      continue;
    }

    const prevRow = result[i - 1];
    for (let j = 0; j < prevRow.length - 1; j++) {
      temp.push(prevRow[j] + prevRow[j + 1]);
    }

    temp.push(1);

    result.push(temp);
  }

  return result[result.length - 1];
};

const getRow2 = function (rowIndex) {
  return recurse(rowIndex);
};

function recurse(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  const prevRow = recurse(rowIndex - 1);
  const result = [1];

  for (let j = 0; j < prevRow.length - 1; j++) {
    result.push(prevRow[j] + prevRow[j + 1]);
  }

  result.push(1);

  return result;
}

module.exports = { getRow, getRow2 };
