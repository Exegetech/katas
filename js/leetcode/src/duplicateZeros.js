const duplicateZeros = (arr) => {
  const arr2 = [...arr];

  let pointer = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 0 && pointer < arr.length) {
      arr[pointer] = 0;
      pointer++;

      if (pointer < arr.length) {
        arr[pointer] = 0;
        pointer++;
      }
    } else if (pointer < arr.length) {
      arr[pointer] = arr2[i];
      pointer++;
    }
  }
};

module.exports = { duplicateZeros };
