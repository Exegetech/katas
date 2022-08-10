const longestCommonSubsequence = function (text1, text2) {
  const table = new Array(text1.length + 1)
    .fill(0)
    .map((el) => new Array(text2.length + 1).fill(0));

  for (let i1 = 0; i1 < text1.length; i1++) {
    for (let i2 = 0; i2 < text2.length; i2++) {
      const c1 = text1[i1];
      const c2 = text2[i2];

      const ti1 = i1 + 1;
      const ti2 = i2 + 1;

      if (c1 === c2) {
        table[ti1][ti2] = 1 + table[ti1 - 1][ti2 - 1];
      } else {
        table[ti1][ti2] = Math.max(table[ti1][ti2 - 1], table[ti1 - 1][ti2]);
      }
    }
  }

  return table[table.length - 1][table[0].length - 1];
};

module.exports = { longestCommonSubsequence };
