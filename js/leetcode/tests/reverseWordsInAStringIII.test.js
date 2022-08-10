const { reverseWords } = require('../src/reverseWordsInAStringIII');

test('1', () => {
  const s = "Let's take LeetCode contest";
  const output = "s'teL ekat edoCteeL tsetnoc";
  expect(reverseWords(s)).toEqual(output);
});

test('2', () => {
  const s = 'God Ding';
  const output = 'doG gniD';
  expect(reverseWords(s)).toEqual(output);
});
