/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const filteredStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return filteredStr === filteredStr.split('').reverse().join('');
};