// Title: l로 만들기
// Time: O(n)
// Space: O(n)
function solution(myString) {
  return myString
    .split("")
    .map((i) => (i.charCodeAt() < 108 ? "l" : i))
    .join("");
}
