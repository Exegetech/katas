const { solution } = require('../src/readNCharactersGivenRead4');

/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */
function makeRead4(file) {
  let charRead = 0;
  let pointer = 0;

  return function (buf4) {
    while (pointer < file.length) {
      const ch = file[pointer];
      buf4.push(ch);

      charRead++;
      pointer++;

      if (charRead === 4) {
        break;
      }
    }

    const tempCharRead = charRead;
    charRead = 0;

    return tempCharRead;
  };
}

const cases = [
  {
    file: 'abc',
    n: 4,
    output: 3,
    fileOutput: 'abc',
  },
  {
    file: 'abcde',
    n: 5,
    output: 5,
    fileOutput: 'abcde',
  },
  {
    file: 'abcdABCD1234',
    n: 12,
    output: 12,
    fileOutput: 'abcdABCD1234',
  },
  {
    file: 'leetcode',
    n: 5,
    output: 5,
    fileOutput: 'leetc',
  },
];

test.each(cases)('solution', ({ file, n, output, fileOutput }) => {
  const read4 = makeRead4(file);
  const read = solution(read4);

  const buf = new Array(n);
  expect(read(buf, n)).toEqual(output);
  expect(buf.join('')).toEqual(fileOutput);
});
