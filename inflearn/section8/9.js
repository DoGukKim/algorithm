// Title: 동전교환
// Time: O(n^n)
// Space: O(min(m))
function main(n, coins, m) {
  let result = Infinity;
  dfs(0, 0);
  console.log(result);

  function dfs(count, sum) {
    if (sum > m) return;
    if (sum === m) {
      if (count < result) result = count;
      return;
    }

    for (let i = 0; i < n; i++) {
      dfs(count + 1, sum + coins[i]);
    }
  }
}
