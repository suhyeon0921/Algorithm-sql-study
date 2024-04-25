/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const sCharCount = new Map();
  const tCharCount = new Map();
  
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sCharCount.has(charS)) {
      if (sCharCount.get(charS) !== charT) {
        return false;
      }
    } else {
      sCharCount.set(charS, charT);
    }

    if (tCharCount.has(charT)) {
      if (tCharCount.get(charT) !== charS) {
        return false;
      }
    } else {
      tCharCount.set(charT, charS);
    }
  }
  return true;
};