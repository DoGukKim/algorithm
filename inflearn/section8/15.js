// Title: 수들의 조합
// Time: O(n!)
// Space: O(n)
function main(n, k, m) {
  const c = Array.from({ length: k }, () => 0);
  let result = 0;

  function dfs(l, j, sum) {
    if (l === k) {
      if (sum % m === 0) result++;
      return;
    }

    for (let i = j; i < n.length; i++) {
      c[l] = n[i];
      dfs(l + 1, i + 1, sum + c[l]);
    }
  }
  dfs(0, 0, 0);

  console.log(result);
}

main([2, 4, 5, 8, 12], 3, 6);
