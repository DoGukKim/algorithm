// Title: 부분 문자열 이어 붙여 문자열 만들기
// Time: O(n*m)
// Space: O(n)
function solution(my_strings, parts) {
  let result = "";

  for (let i = 0; i < parts.length; i++) {
    const [s, e] = parts[i];

    for (let j = s; j <= e; j++) {
      result += my_strings[i][j];
    }
  }

  return result;
}
