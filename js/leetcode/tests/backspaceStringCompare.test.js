const {
  backspaceCompare,
  backspaceCompare2,
} = require('../src/backspaceStringCompare');

test('backspaceCompare', () => {
  const s = 'ab#c';
  const t = 'ad#c';
  const output = true;

  expect(backspaceCompare(s, t)).toEqual(output);
});

test('backspaceCompare', () => {
  const s = 'ab##';
  const t = 'c#d#';
  const output = true;

  expect(backspaceCompare(s, t)).toEqual(output);
});

test('backspaceCompare', () => {
  const s = 'a#c';
  const t = 'b';
  const output = false;

  expect(backspaceCompare(s, t)).toEqual(output);
});

test('backspaceCompare2', () => {
  const s = 'gtc#uz#';
  const t = 'gtcm##uz#';
  const output = true;

  expect(backspaceCompare(s, t)).toEqual(output);
});
