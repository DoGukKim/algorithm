// title: 문자열 나누기
// time: O(n)
// space: O(1)
function solution(s) {
  let x = s[0];
  let sameCount = 0;
  let diffCount = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (x === s[i]) {
      sameCount++;
    } else {
      diffCount++;
    }

    if (sameCount === diffCount) {
      x = s[i + 1];
      sameCount = 0;
      diffCount = 0;
      result++;
    }
  }

  if (sameCount > 0) result++;

  return result;
}
