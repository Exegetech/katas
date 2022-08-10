const solution = function (read4) {
  return function (buf, n) {
    let totalCharRead = 0;

    while (n > 0) {
      const buf4 = [];
      const charRead = read4(buf4);

      const neededChar = Math.min(n, charRead);

      for (let i = 0; i < neededChar; i++) {
        buf[totalCharRead] = buf4[i];
        totalCharRead++;
      }

      n -= charRead;

      if (charRead < 4) {
        break;
      }
    }

    return totalCharRead;
  };
};

module.exports = { solution };
