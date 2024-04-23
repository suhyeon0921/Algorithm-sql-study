/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = prices[0]; // 가장 첫 번째 요소가 최솟값이라고 가정
  let profit = 0; // 이익
  for (let i = 0 ; i < prices.length; i++) {
    if (prices[i] < minPrice) { // 가장 저점인 값이 있다면
      minPrice = prices[i];
    } else if (prices[i] - minPrice > profit) { // 기존 이익보다 더 큰 이익이 있다면
      profit = prices[i] - minPrice;
    }
  }
  return profit;
};