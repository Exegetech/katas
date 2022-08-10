const { numUniqueEmails } = require('../src/uniqueEmailAddresses');

test('numUniqueEmails', () => {
  const emails = [
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ];

  const output = 2;

  expect(numUniqueEmails(emails)).toEqual(output);
});

test('numUniqueEmails', () => {
  const emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];

  const output = 3;

  expect(numUniqueEmails(emails)).toEqual(output);
});

test('numUniqueEmails', () => {
  const emails = ['test.email+alex@leetcode.com', 'test.email@leetcode.com'];

  const output = 1;

  expect(numUniqueEmails(emails)).toEqual(output);
});
