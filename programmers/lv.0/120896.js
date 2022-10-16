// Title: 한 번만 등장한 문자
// 방법 1
// Time: O(n^2)
// Space: O(n)
// Input: "abcabcadc"
function solution(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) result += s[i];
  }

  return result.split("").sort().join("");
} // -> "d"

// 방법 1
// Time: O(n)
// Space: O(n)
function solution(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let result = "";
  for (let [k, v] of map) {
    if (v === 1) result += k;
  }

  return result.split("").sort().join("");
}
