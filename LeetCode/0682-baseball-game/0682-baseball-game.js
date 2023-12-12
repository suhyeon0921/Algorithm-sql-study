/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let answer = [];
  for (let oper of operations) {
    if (oper === '+') {
      let one = answer[answer.length - 1];
      let second = answer[answer.length - 2];
      answer.push(one + second);
    }
    else if (oper === 'C') {
      answer.pop();
    }
    else if (oper === 'D') {
      let one = answer[answer.length - 1];
      answer.push(one * 2);
    }
    else {
      answer.push(Number(oper));
    }
  }
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
  sum += answer[i];
  }
  return sum;
};