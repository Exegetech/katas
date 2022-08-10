const sortArrayByParity = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  let pEven = 0;
  let pOdd = nums.length - 1;

  while (pEven < pOdd) {
    if (isEven(nums[pEven]) && isOdd(nums[pOdd])) {
      pEven++;
      pOdd--;
    } else if (isOdd(nums[pEven]) && isEven(nums[pOdd])) {
      const temp = nums[pEven];
      nums[pEven] = nums[pOdd];
      nums[pOdd] = temp;

      pEven++;
      pOdd--;
    } else if (isEven(nums[pEven]) && isEven(nums[pOdd])) {
      pEven++;
    } else if (isOdd(nums[pEven]) && isOdd(nums[pOdd])) {
      pOdd--;
    }
  }

  return nums;
};

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return !isEven(num);
}

module.exports = { sortArrayByParity };
