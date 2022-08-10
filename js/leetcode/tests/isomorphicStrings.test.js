const { isIsomorphic } = require('../src/isomorphicStrings');

test('1', () => {
  const s = 'egg';
  const t = 'add';
  const output = true;

  expect(isIsomorphic(s, t)).toEqual(output);
});

test('2', () => {
  const s = 'foo';
  const t = 'bar';
  const output = false;

  expect(isIsomorphic(s, t)).toEqual(output);
});

test('3', () => {
  const s = 'paper';
  const t = 'title';
  const output = true;

  expect(isIsomorphic(s, t)).toEqual(output);
});

test('4', () => {
  const s = 'badc';
  const t = 'baba';
  const output = false;

  expect(isIsomorphic(s, t)).toEqual(output);
});
