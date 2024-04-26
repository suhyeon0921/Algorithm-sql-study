/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const answer =  BigInt('0b' + a) + BigInt('0b' + b);
  return answer.toString(2);
};