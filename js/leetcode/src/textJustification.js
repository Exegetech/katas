const fullJustify = function (words, maxWidth) {
  const result = [];
  let i = 0;

  while (i < words.length) {
    let wordsLength = 0;
    const line = [];

    while (
      i < words.length &&
      wordsLength + words[i].length + (line.length - 1) < // space
        maxWidth
    ) {
      line.push(words[i]);
      wordsLength += words[i].length;
      i++;
    }

    i--;

    result.push(line);

    i++;
  }

  const x = result.map((line, i) => {
    const isEnd = i === result.length - 1;

    if (isEnd) {
      return concatenateEnd(line, maxWidth);
    }

    return concatenate(line, maxWidth);
  });

  return x;
};

function concatenateEnd(line, maxWidth) {
  const wordsLength = line.reduce((acc, w) => acc + w.length, 0);

  let difference = maxWidth - wordsLength;
  const newLine = [];

  for (let i = 0; i < line.length; i++) {
    newLine.push(line[i]);

    if (i < line.length - 1) {
      newLine.push(' ');
      difference -= 1;
    }
  }

  for (let i = 1; i <= difference; i++) {
    newLine.push(' ');
  }

  return newLine.join('');
}

function concatenate(line, maxWidth) {
  const wordsLength = line.reduce((acc, w) => acc + w.length, 0);

  let difference = maxWidth - wordsLength;
  let spacesCount = line.length - 1;

  const newLine = [];
  for (let i = 0; i < line.length; i++) {
    newLine.push(line[i]);

    if (i < line.length - 1) {
      const space = Math.ceil(difference / spacesCount);
      const spaceToMake = Math.min(space, difference);

      for (let i = 0; i < spaceToMake; i++) {
        newLine.push(' ');
      }

      difference -= spaceToMake;
      spacesCount -= 1;
    }
  }

  for (let i = 1; i <= difference; i++) {
    newLine.push(' ');
  }

  return newLine.join('');
}

module.exports = { fullJustify };
