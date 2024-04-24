/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  roma = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
  };
  let integerAnswer = [];
  for (const r of s) {
    integerAnswer.push(roma[r]);
  }
  let answer = 0;
  for (let i = 0; i < integerAnswer.length; i++) {
    if (integerAnswer[i] < integerAnswer[i + 1]) {
      answer -= integerAnswer[i]; 
    } else {
      answer += integerAnswer[i];
    }
  }
  return answer;
};