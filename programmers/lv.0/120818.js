// Title: 옷가게 할인 받기
// 방법 1
// Time: O(1)
// Space: O(1)
// Input: 150,000
function solution(price) {
  if (price < 100000) return price;
  if (price < 300000) return Math.floor(price * 0.95);
  if (price < 500000) return Math.floor(price * 0.9);
  return Math.floor(price * 0.8);
} // -> 142,500
