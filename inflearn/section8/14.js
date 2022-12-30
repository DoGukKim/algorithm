// Title: 조합 구하기
// Time: O(n^n)
// Space: O(m)
function main(n, m) {
  const c = Array.from({ length: m }, () => 0);
  let result = 0;

  function dfs(l, j) {
    if (l === m) {
      console.log(c.slice().join(" "));
      result++;
      return;
    }

    for (let i = j; i <= n; i++) {
      c[l] = i;
      dfs(l + 1, i + 1);
    }
  }

  dfs(0, 1);
  console.log(result);
}

main(4, 2);
