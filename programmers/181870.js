// Title: ad 제거하기
// Time: O(n)
// Space: O(n)
function solution(strArr) {
  return strArr.filter((i) => i.indexOf("ad") === -1);
}
