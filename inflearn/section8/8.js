// Title: 중복순열 구하기
// Time: O(n^n)
// Space: O(m)
function main(n, m) {
  const permute = Array.from({ length: m }, () => 0);
  let count = 0;
  dfs(0);
  console.log(count);

  function dfs(level) {
    if (level === m) {
      count++;
      console.log(permute);
      return;
    }

    for (let i = 1; i <= n; i++) {
      permute[level] = i;
      dfs(level + 1);
      permute[level] = 0;
    }
  }
}

main(3, 2);
