// Title: 문자열 묶기
// Time: O(n)
// Space: O(n)
function solution(strArr) {
  const count = Array.from({ length: 31 }, () => 0);

  for (let i = 0; i < strArr.length; i++) {
    count[strArr[i].length] += 1;
  }

  return Math.max(...count);
}
