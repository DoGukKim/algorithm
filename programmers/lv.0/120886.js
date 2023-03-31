// Title: A로 B만들기
// 방법 1
// Time: O(n log n)
// Space: O(n)
function solution(before, after) {
  before = before.split("").sort();
  after = after.split("").sort();
  return before.join("") === after.join("") ? 1 : 0;
}

// 방법 2
// Time: O(n)
// Space: O(n)
function solution(before, after) {
  const hash = new Map();
  const len = after.length;
  for (let i = 0; i < len; i++) {
    hash.set(after[i], (hash.get(after[i]) || 0) + 1);
  }

  for (let i = 0; i < len; i++) {
    hash.set(before[i], hash.get(before[i]) - 1);
  }

  for (let [_, v] of hash) {
    if (v !== 0) return 0;
  }

  return 1;
}
