const validMountainArray = (arr) => {
  if (arr.length < 3) {
    return false;
  }

  let i = 0;
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === arr.length - 1) {
    return false;
  }

  while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === arr.length - 1;
};

module.exports = { validMountainArray };
