const { numJewelsInStones } = require('../src/jewelsAndStones');

test('1', () => {
  const jewels = 'aA';
  const stones = 'aAAbbbb';
  const output = 3;

  expect(numJewelsInStones(jewels, stones)).toEqual(output);
});

test('2', () => {
  const jewels = 'z';
  const stones = 'ZZ';
  const output = 0;

  expect(numJewelsInStones(jewels, stones)).toEqual(output);
});
