const search = function (reader, target) {
  const OUT_OF_BOUND = 2147483647;
  let left = 0;
  let right = 10;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const probed = reader.get(mid);
    if (probed === target) {
      return mid;
    }

    if (probed === OUT_OF_BOUND) {
      right = mid - 1;
    } else if (target < probed) {
      right = mid - 1;
    } else if (target > probed) {
      right = right * 10;
      left = mid + 1;
    }
  }

  return -1;
};

module.exports = { search };
