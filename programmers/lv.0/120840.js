// Title: 구슬을 나누는 경우의 수
// 방법 1
// Time: O(2^n*m)
// Space: O(n)
// Input: 3, 2
function solution(balls, share) {
  function dfs(b, s) {
    if (b === s || s === 0) return 1;
    return dfs(b - 1, s - 1) + dfs(b - 1, s);
  }

  return dfs(balls, share);
} // -> 3

// 방법 2
// Time: O(n+m)
// Space: O(n+m)
function solution(balls, share) {
  const p = Array.from({ length: balls }, (_, v) => v + 1).reduce(
    (a, c) => a * c
  );
  const f = Array.from({ length: share }, (_, v) => v + 1).reduce(
    (a, c) => a * c
  );
  return p / f;
}

console.log(solution(3, 2)); // -> 3
