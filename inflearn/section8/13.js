// Title: 수열 추측하기
// Time: O(n!)
// Space: O(n)
function main(n, f) {
  const b = Array.from({ length: n }, () => 0);
  const p = Array.from({ length: n }, () => 0);
  const ch = Array.from({ length: n + 1 }, () => 0);
  let result;

  function combination(n, r, memo = {}) {
    const key = n + "," + r;
    if (key in memo) return memo[key];
    if (n === r || r === 0) return 1;
    memo[key] = combination(n - 1, r - 1, memo) + combination(n - 1, r, memo);
    return memo[key];
  }

  for (let i = 0; i < n; i++) {
    b[i] = combination(n - 1, i);
  }

  function dfs(l, sum) {
    if (n === l && sum === f) {
      result = p.slice();
      return true;
    }

    for (let i = 1; i <= n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        p[l] = i;
        if (dfs(l + 1, sum + b[l] * p[l]) === true) return;
        ch[i] = 0;
      }
    }
  }

  dfs(0, 0);

  console.log(result);
}

main(4, 16);
