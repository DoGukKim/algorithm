// Title: 글자 지우기
// Time: O(n)
// Space: O(n)
function solution(my_string, indices) {
  const hash = {};
  for (let i = 0; i < indices.length; i++) {
    if (!hash[indices[i]]) hash[indices[i]] = true;
  }

  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (hash[i]) continue;
    result += my_string[i];
  }
  return result;
}
