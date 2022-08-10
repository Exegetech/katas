const replaceElements = (arr) => {
  if (arr.length === 1) {
    return [-1];
  }

  let largest = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    const temp = arr[i];
    arr[i] = Math.max(largest, arr[i + 1]);
    largest = Math.max(largest, temp);
  }

  return arr;
};

module.exports = { replaceElements };
