// Title: 문자 개수 세기
// Time: O(n)
// Space: O(1)
function solution(my_string) {
  const upper = Array.from({ length: 26 }, () => 0);
  const lower = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      upper[my_string[i].charCodeAt() - 65] += 1;
      continue;
    }

    lower[my_string[i].charCodeAt() - 97] += 1;
  }

  return [...upper, ...lower];
}
