const reverseWords = (s) => {
  if (s.length <= 1) {
    return s;
  }

  const arr = trimAndConvertToArray(s);

  reverse(arr, 0, arr.length - 1);

  let startIdx = 0;
  let endIdx = 0;

  while (startIdx < arr.length) {
    while (endIdx < arr.length && arr[endIdx] !== ' ') {
      endIdx += 1;
    }

    reverse(arr, startIdx, endIdx - 1);

    startIdx = endIdx + 1;
    endIdx = startIdx;
  }

  return arr.join('');
};

function trimAndConvertToArray(s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right && s[left] === ' ') {
    left += 1;
  }

  while (left <= right && s[right] === ' ') {
    right -= 1;
  }

  const arr = [];
  while (left <= right) {
    if (s[left] !== ' ') {
      arr.push(s[left]);
    } else if (arr[arr.length - 1] !== ' ') {
      arr.push(s[left]);
    }

    left += 1;
  }

  return arr;
}

function reverse(arr, start, end) {
  let i = start;
  let j = end;

  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }
}

module.exports = { reverseWords };
