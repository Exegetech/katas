const { fullJustify } = require('../src/textJustification');

const cases = [
  {
    words: ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
    maxWidth: 16,
    output: ['This    is    an', 'example  of text', 'justification.  '],
  },
  {
    words: ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
    maxWidth: 16,
    output: ['What   must   be', 'acknowledgment  ', 'shall be        '],
  },
  {
    words: [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do',
    ],
    maxWidth: 20,
    output: [
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  ',
    ],
  },
  {
    words: [
      'ask',
      'not',
      'what',
      'your',
      'country',
      'can',
      'do',
      'for',
      'you',
      'ask',
      'what',
      'you',
      'can',
      'do',
      'for',
      'your',
      'country',
    ],
    maxWidth: 16,
    output: [
      'ask   not   what',
      'your country can',
      'do  for  you ask',
      'what  you can do',
      'for your country',
    ],
  },
];

test.each(cases)('fullJustify', ({ words, maxWidth, output }) => {
  expect(fullJustify(words, maxWidth)).toEqual(output);
});
