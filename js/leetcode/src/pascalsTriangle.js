const generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < numRows; i++) {
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

  return result;
};

module.exports = { generate };
