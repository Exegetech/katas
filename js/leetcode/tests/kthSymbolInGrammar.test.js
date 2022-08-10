const { kthGrammar } = require('../src/kthSymbolInGrammar');

test('1', () => {
  const n = 1;
  const k = 1;
  const output = 0;

  expect(kthGrammar(n, k)).toEqual(output);
});

test('2', () => {
  const n = 2;
  const k = 1;
  const output = 0;

  expect(kthGrammar(n, k)).toEqual(output);
});

test('3', () => {
  const n = 2;
  const k = 2;
  const output = 1;

  expect(kthGrammar(n, k)).toEqual(output);
});

test('4', () => {
  const n = 3;
  const k = 1;
  const output = 0;

  expect(kthGrammar(n, k)).toEqual(output);
});
