const ValidWordAbbr = function (dictionary) {
  this.set = new Set();
  this.shortenedSet = new Set();

  dictionary.forEach((d) => {
    const shorten = this.shorten(d);

    if (!this.shortenedSet.has(shorten)) {
      this.set.add(d);
      this.shortenedSet.add(shorten);
    }
  });
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
  const shorten = this.shorten(word);
  if (!this.shortenedSet.has(this.shorten(shorten))) {
    return true;
  }

  return this.set.has(word);

  // There is no word in dictionary whose abbreviation is equal to word's abbreviation.
  // For any word in dictionary whose abbreviation is equal to word's abbreviation, that word and word are the same.
};

ValidWordAbbr.prototype.shorten = function (word) {
  if (word.length <= 2) {
    return word;
  }

  const arr = [word[0], word.length - 2, word[word.length - 1]];
  return arr.join('');
};

module.exports = { ValidWordAbbr };
