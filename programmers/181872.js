// Title: 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
// Time: O(n)
// Space: O(n)
function solution(myString, pat) {
  const targetIndex = myString.lastIndexOf(pat);
  let result = "";

  for (let i = 0; i < targetIndex + pat.length; i++) result += myString[i];

  return result;
}
