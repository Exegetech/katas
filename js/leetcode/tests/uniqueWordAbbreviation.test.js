const { ValidWordAbbr } = require('../src/uniqueWordAbbreviation');

test.skip('1', () => {
  const validWordAbbr = new ValidWordAbbr(['deer', 'door', 'cake', 'card']);

  expect(validWordAbbr.isUnique('dear')).toEqual(false);
  expect(validWordAbbr.isUnique('cart')).toEqual(true);
  expect(validWordAbbr.isUnique('cane')).toEqual(false);
  expect(validWordAbbr.isUnique('make')).toEqual(true);
  expect(validWordAbbr.isUnique('cake')).toEqual(true);
});

test.skip('2', () => {
  const validWordAbbr = new ValidWordAbbr(['deer', 'door', 'cake', 'card']);

  expect(validWordAbbr.isUnique('dear')).toEqual(false);
  expect(validWordAbbr.isUnique('door')).toEqual(false);
  // expect(validWordAbbr.isUnique("cart")).toEqual(true);
  // expect(validWordAbbr.isUnique("cake")).toEqual(true);
});
