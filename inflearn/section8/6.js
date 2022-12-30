// Title: 바둑이 승차
// 방법 1
// Time: O(n^n)
// Space: O(n)
function main(c, n, w) {
  let result = 0;

  function dfs(j, sum) {
    for (let i = j; i < n; i++) {
      if (sum + w[i] > c) continue;
      const max = dfs(i + 1, sum + w[i]);
      if (result < max) result = max;
    }

    return sum;
  }

  dfs(0, 0);
  console.log(result);
}

// 방법 2
// Time: O(2^n)
// Space: O(n)
function main(c, n, w) {
  function dfs(i, sum) {
    if (i === n) return sum;
    if (sum + w[i] > c) return sum;
    const left = dfs(i + 1, sum + w[i]);
    const right = dfs(i + 1, sum);
    return Math.max(left, right);
  }

  console.log(dfs(0, 0));
}

main(259, 5, [81, 58, 42, 33, 61]);
