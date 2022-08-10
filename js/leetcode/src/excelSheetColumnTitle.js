const convertToTitle = function (columnNumber) {
  const arr = [];

  while (columnNumber > 0) {
    const remainder = columnNumber % 26;
    arr.push(getCharFromNum(remainder));

    const mul = Math.floor(columnNumber / 26);
    columnNumber = mul;
  }

  return arr.reverse().join('');
};

function getCharFromNum(n) {
  return String.fromCharCode(64 + n);
}

module.exports = { convertToTitle };
