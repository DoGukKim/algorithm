// Title: 동전교환
// Time: O(n^n)
// Space: O(n)
function main(n, m) {
  function dfs(sum, cnt) {
    if (sum === m) return cnt;

    let min = Infinity;

    for (let i = 0; i < n.length; i++) {
      if (sum + n[i] > m) continue;
      const minCnt = dfs(sum + n[i], cnt + 1);
      if (minCnt < min) min = minCnt;
    }

    return min;
  }

  console.log(dfs(0, 0));
}

main([1, 2, 5], 15);
