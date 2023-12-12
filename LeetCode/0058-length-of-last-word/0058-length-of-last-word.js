/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const sen = s.trim().split(' ');
  const lastWord = sen[sen.length - 1];

  return lastWord.length;
};