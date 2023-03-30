// Title: 구슬을 나누는 경우의 수
// 방법 1
// Time: O(n)
// Space: O(n)
function solution(balls, share) {
  return dfs(balls, share);

  function dfs(n, r, memo = {}) {
    const key = n + "+" + r;
    if (memo[key]) return memo[key];
    if (n === r) return 1;
    if (r === 1) return n;
    memo[key] = dfs(n - 1, r - 1, memo) + dfs(n - 1, r, memo);
    return memo[key];
  }
}

// 방법 2
// Time: O(n)
// Space: O(n)
function solution(balls, share) {
  const ballsFact = Array.from({ length: share }, (_, i) => balls - i).reduce(
    (a, c) => a * c
  );

  const shareFact = Array.from({ length: share }, (_, i) => i + 1).reduce(
    (a, c) => a * c
  );

  return Math.round(ballsFact / shareFact);
}

console.log(solution(3, 2)); // -> 3
