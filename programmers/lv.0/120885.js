// Title: 이진수 더하기
// 방법 1
// Time: O(n) -> toString(n)
// Space: O(n)
// Input: "10", "11"
function solution(bin1, bin2) {
  const n = parseInt(bin1, 2) + parseInt(bin2, 2);
  return n.toString(2);
} // -> "101"
