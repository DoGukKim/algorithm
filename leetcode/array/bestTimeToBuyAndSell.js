/**
 * @param {number[]} prices
 * @return {number}
 */

// Time: O(n)
// Space: O(1)
var maxProfit = function (prices) {
  let min = Infinity;
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    result = Math.max(result, prices[i] - min);
  }

  return result;
};
