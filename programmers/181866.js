// Title: 문자열 잘라서 정렬하기
// Time: O(n)
// Space: O(n)
function solution(myString) {
  return myString
    .split("x")
    .filter((i) => i !== "")
    .sort();
}
