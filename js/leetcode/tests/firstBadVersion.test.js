const { solution } = require('../src/firstBadVersion');

function makeIsBadVersion(badVersion) {
  return function isBadVersion(version) {
    return version === badVersion;
  };
}

test('search', () => {
  const badVersion = 4;
  const isBadVersion = makeIsBadVersion(badVersion);
  const n = 5;
  const output = badVersion;

  expect(solution(isBadVersion)(n)).toEqual(output);
});

test('search', () => {
  const badVersion = 1;
  const isBadVersion = makeIsBadVersion(badVersion);
  const n = 1;
  const output = badVersion;

  expect(solution(isBadVersion)(n)).toEqual(output);
});
