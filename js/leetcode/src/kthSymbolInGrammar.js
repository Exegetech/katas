const kthGrammar = function (n, k) {
  if (n === 1 && k === 1) {
    return 0;
  }

  if (k % 2 === 0) {
    const previous = kthGrammar(n - 1, Math.ceil(k / 2));

    if (previous === 1) {
      return 0;
    } else {
      return 1;
    }
  } else {
    const previous = kthGrammar(n - 1, Math.ceil(k / 2));

    if (previous === 0) {
      return 0;
    } else {
      return 1;
    }
  }
};

module.exports = { kthGrammar };
