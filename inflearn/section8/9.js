// Title: 동전교환
// Time: O(n^n)
// Space: O(min(m))
function main(n, c, m) {
  let result = Infinity;

  function dfs(sum, cnt) {
    if (sum === m) return cnt;

    for (let i = 0; i < n; i++) {
      if (sum + c[i] > m) continue;
      const min = dfs(sum + c[i], cnt + 1);
      if (min < result) result = min;
    }
  }

  dfs(0, 0);
  console.log(result);
}

main(3, [1, 2, 5], 15);
