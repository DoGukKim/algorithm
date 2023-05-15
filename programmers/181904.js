// Title: 세로 읽기
// Time: O(n)
// Space: On)
function solution(my_string, m, c) {
  let result = "";

  for (let i = 0; i < my_string.length; i += m) {
    result += my_string[i + c - 1];
  }

  return result;
}
