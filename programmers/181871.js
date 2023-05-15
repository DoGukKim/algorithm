// Title: 문자열이 몇 번 등장하는지 세기
// Time: O(nm)
// Space: O(1)
function solution(myString, pat) {
  let result = 0;

  for (let i = 0; i < myString.length; i++) {
    let sum = "";

    for (let j = i; j < i + pat.length; j++) {
      sum += myString[j];
    }

    if (sum === pat) result++;
  }

  return result;
}
