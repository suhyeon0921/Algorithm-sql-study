/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let answer = 0;
  for (let account of accounts) {
    const sum = account.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    answer = Math.max(answer, sum);
  }
  return answer;
};