const findNumbers = function (nums) {
  let evenDigits = 0;

  for (const num of nums) {
    const digits = getDigits(num);
    if (digits % 2 === 0) {
      evenDigits += 1;
    }
  }

  return evenDigits;
};

function getDigits(num) {
  let digits = 0;
  let _num = num;

  while (_num >= 1) {
    digits += 1;
    _num = Math.floor(_num / 10);
  }

  return digits;
}

module.exports = { findNumbers };
