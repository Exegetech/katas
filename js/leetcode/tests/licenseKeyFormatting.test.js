const { licenseKeyFormatting } = require('../src/licenseKeyFormatting');

test('licenseKeyFormatting', () => {
  const s = '5F3Z-2e-9-w';
  const k = 4;
  const output = '5F3Z-2E9W';

  expect(licenseKeyFormatting(s, k)).toEqual(output);
});

test('licenseKeyFormatting', () => {
  const s = '2-5g-3-J';
  const k = 2;
  const output = '2-5G-3J';

  expect(licenseKeyFormatting(s, k)).toEqual(output);
});
