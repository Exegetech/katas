const { isHappy } = require('../src/happyNumber');

test('1', () => {
  const n = 19;
  const output = true;

  expect(isHappy(n)).toEqual(output);
});

test('2', () => {
  const n = 2;
  const output = false;

  expect(isHappy(n)).toEqual(output);
});
