// Title: 합이 같은 부분집합
// 방법1
// Time: O(n^n)
// Space: O(n)
function main(n, set) {
  const total = set.reduce((a, c) => a + c, 0);

  function dfs(j, sum) {
    if (total - sum === sum) return true;

    for (let i = j; i < n; i++) {
      if (dfs(i + 1, sum + set[i]) === true) return true;
    }
  }

  console.log(dfs(0, 0) ? "YES" : "NO");
}

main(6, [1, 3, 5, 6, 7, 10]);
main(3, [2, 5, 6]);

// 방법2
// Time: O(2^n)
// Space: O(n)
function main(n) {
  const total = n.reduce((a, c) => a + c, 0);

  function dfs(level, sum) {
    if (level === n.length) {
      return total - sum === sum;
    }

    const left = dfs(level + 1, sum + n[level]);
    const right = dfs(level + 1, sum);

    return left || right;
  }

  console.log(dfs(0, 0) ? "YES" : "NO");
}

main([1, 3, 5, 6, 7, 10]);
main([2, 5, 6]);
