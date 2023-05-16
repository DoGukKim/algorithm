// Title: 커피 심부름
// Time: O(n)
// Space: O(1)
function solution(order) {
  const map = {
    iceamericano: 4500,
    americanoice: 4500,
    americanohot: 4500,
    hotamericano: 4500,
    americano: 4500,
    icecafelatte: 5000,
    cafelatteice: 5000,
    hotcafelatte: 5000,
    cafelattehot: 5000,
    cafelatte: 5000,
    anything: 4500,
  };

  let result = 0;
  for (let i = 0; i < order.length; i++) {
    result += map[order[i]];
  }
  return result;
}
