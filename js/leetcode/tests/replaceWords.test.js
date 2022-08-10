const { replaceWords } = require('../src/replaceWords');

test('replaceWords', () => {
  const dictionary = ['cat', 'bat', 'rat'];
  const sentence = 'the cattle was rattled by the battery';
  const output = 'the cat was rat by the bat';

  expect(replaceWords(dictionary, sentence)).toEqual(output);
});

test('replaceWords', () => {
  const dictionary = ['a', 'b', 'c'];
  const sentence = 'aadsfasf absbs bbab cadsfafs';
  const output = 'a a b c';

  expect(replaceWords(dictionary, sentence)).toEqual(output);
});
