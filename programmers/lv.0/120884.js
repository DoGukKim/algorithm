// Title: 치킨 쿠폰
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: 1,081
function solution(chicken) {
  let remain = chicken;
  let result = 0;

  while (remain >= 10) {
    const c = Math.floor(remain / 10);
    result += c;
    remain = c + (remain % 10);
  }

  return result;
} // -> 120
