const { search } = require('../src/searchInASortedArrayOfUnknownSize');

function makeReader(secret) {
  const OUT_OF_BOUND = 2147483647;

  function get(index) {
    if (index >= secret.length) {
      return OUT_OF_BOUND;
    }

    return secret[index];
  }

  return { get };
}

test('search', () => {
  const secret = [-1, 0, 3, 5, 9, 12];
  const reader = makeReader(secret);
  const target = 9;
  const output = 4;

  expect(search(reader, target)).toEqual(output);
});

test('search', () => {
  const secret = [-1, 0, 3, 5, 9, 12];
  const reader = makeReader(secret);
  const target = 2;
  const output = -1;

  expect(search(reader, target)).toEqual(output);
});
