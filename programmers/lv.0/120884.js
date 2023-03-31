// Title: 치킨 쿠폰
// Time: O(n)
// Space: O(1)
function solution(chicken) {
  let result = 0;
  while (true) {
    const remain = Math.floor(chicken / 10);
    result += remain;
    chicken = (chicken % 10) + remain;
    if (chicken / 10 < 1) return result;
  }
}
