const plusOne = function (digits) {
  const result = [];
  let extra = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      const add = digits[i] + 1;

      if (add > 9) {
        result.unshift(add - 10);
        extra = 1;
      } else {
        result.unshift(add);
        extra = 0;
      }
    } else {
      const add = digits[i] + extra;

      if (add > 9) {
        result.unshift(add - 10);
        extra = 1;
      } else {
        result.unshift(add);
        extra = 0;
      }
    }
  }

  if (extra === 1) {
    result.unshift(1);
  }

  return result;
};

module.exports = { plusOne };
