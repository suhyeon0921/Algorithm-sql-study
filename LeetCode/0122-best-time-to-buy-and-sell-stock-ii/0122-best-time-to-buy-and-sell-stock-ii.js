/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let benefit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      benefit += prices[i + 1] - prices[i];
    } else {
      continue;
    }
  }
  return benefit;
};