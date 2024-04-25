/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const charCount = new Map();
  for (const char of magazine) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }
  for (const char of ransomNote) {
    if (charCount.has(char) && charCount.get(char) > 0) { // ransomNote의 문자로 만들 수 있는 경우
      charCount.set(char, charCount.get(char) - 1);
    } else {
      return false;
    }
  }
  return true;
};