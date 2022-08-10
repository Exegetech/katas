const { validIPAddress } = require('../src/validateIpAddress');

const cases = [
  {
    queryIP: '172.16.254.1',
    output: 'IPv4',
  },
  {
    queryIP: '2001:0db8:85a3:0:0:8A2E:0370:7334',
    output: 'IPv6',
  },
  {
    queryIP: '256.256.256.256',
    output: 'Neither',
  },
  {
    queryIP: '1e1.4.5.6',
    output: 'Neither',
  },
  {
    queryIP: '20EE:FGb8:85a3:0:0:8A2E:0370:7334',
    output: 'Neither',
  },
  {
    queryIP: '192.0.0.1',
    output: 'IPv4',
  },
];

test.each(cases)('validIPAddress', ({ queryIP, output }) => {
  expect(validIPAddress(queryIP)).toEqual(output);
});
