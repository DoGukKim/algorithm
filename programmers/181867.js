// Title: x 사이의 개수
// Time: O(n)
// Space: O(n)
function solution(myString) {
  return myString.split("x").map((i) => i.length);
}
