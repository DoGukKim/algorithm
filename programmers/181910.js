// Title: 문자열의 뒤의 n글자
// Time: O(n)
// Space: O(n)
function solution(my_string, n) {
  let result = "";

  for (let i = my_string.length - n; i < my_string.length; i++) {
    result += my_string[i];
  }

  return result;
}
