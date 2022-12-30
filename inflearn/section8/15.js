// Title: 수들의 조합
// Time: O(n^n)
// Space: O(k)
function main(n, k, numbers, m) {
  let result = 0;
  function dfs(l, j, sum) {
    if (l === k) {
      if (sum % m === 0) result++;
      return;
    }

    for (let i = j; i < n; i++) {
      dfs(l + 1, i + 1, sum + numbers[i]);
    }
  }

  dfs(0, 0, 0);
  console.log(result);
}

main(5, 3, [2, 4, 5, 8, 12], 6);
