// Title: 중복된 문자 제거
// Time: O(n)
// Space: O(n)
function solution(my_string) {
  let result = "";
  const hash = new Map();
  for (let i = 0; i < my_string.length; i++) {
    if (!hash.has(my_string[i])) {
      hash.set(my_string[i], true);
      result += my_string[i];
      continue;
    }
  }
  return result;
}
