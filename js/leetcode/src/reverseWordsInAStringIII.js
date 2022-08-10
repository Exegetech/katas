const reverseWords = (s) => {
  if (s.length <= 1) {
    return s;
  }

  const arr = s.split('');

  let i = 0;
  let j = 0;

  while (i < arr.length) {
    while (arr[j] !== ' ' && j < arr.length) {
      j++;
    }

    reverse(arr, i, j - 1);

    i = j + 1;
    j = i;
  }

  return arr.join('');
};

function reverse(arr, startIdx, endIdx) {
  let i = startIdx;
  let j = endIdx;

  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }
}

module.exports = { reverseWords };
