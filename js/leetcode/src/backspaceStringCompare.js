const backspaceCompare = function (s, t) {
  const chSArr = [];
  const chTArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      chSArr.pop();
    } else {
      chSArr.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === '#') {
      chTArr.pop();
    } else {
      chTArr.push(t[i]);
    }
  }

  const newS = chSArr.join('');
  const newT = chTArr.join('');

  return newS === newT;
};

// O(1) space
const backspaceCompare2 = function (s, t) {
  // let sIdx = s.length - 1
  // let tIdx = t.length - 1
  // while (sIdx >= 0 && tIdx >= 0) {
  //   let sbackSpaces = 0
  //   for (let i = sIdx; s[i] === '#'; i--) {
  //     sbackSpaces++
  //   }
  //   let tbackSpaces = 0
  //   for (let i = tIdx; t[i] === '#'; i--) {
  //     tbackSpaces++
  //   }
  //   sIdx -= (sbackSpaces * 2)
  //   tIdx -= (tbackSpaces * 2)
  //   if (sIdx < 0 || tIdx < 0) {
  //     break
  //   }
  //   const sCh = s[sIdx]
  //   const tCh = t[tIdx]
  //   console.log({ sCh, tCh })
  //   if (sCh !== tCh) {
  //     return false
  //   }
  //   sIdx--
  //   tIdx--
  // }
  // return true
};

module.exports = { backspaceCompare, backspaceCompare2 };
