const addBinary = function (a, b) {
  const result = [];
  const longest = Math.max(a.length, b.length);
  let extra = '0';

  for (let i = 0; i < longest; i++) {
    const ba = a[a.length - i - 1] || '0';
    const bb = b[b.length - i - 1] || '0';

    const { remainder, total } = getTotal(ba, bb, extra);

    extra = remainder;
    result.unshift(total);
  }

  if (extra === '1') {
    result.unshift(extra);
  }

  return result.join('');
};

function getTotal(a, b, c) {
  const count = [a, b, c].reduce((acc, el) => (el === '1' ? acc + 1 : acc), 0);
  if (count === 3) {
    return {
      remainder: '1',
      total: '1',
    };
  }

  if (count === 2) {
    return {
      remainder: '1',
      total: '0',
    };
  }

  if (count === 1) {
    return {
      remainder: '0',
      total: '1',
    };
  }

  return {
    remainder: '0',
    total: '0',
  };
}

const a = '11';
const b = '1'; // "100"

// const a = "1010"
// const b = "1011" // "10101"

console.log(addBinary(a, b));
