// Title: 재귀 함수
// Time: O(n)
// Space: O(n)
function main(n) {
  function dfs(c) {
    if (c > n) return;

    console.log(c);
    dfs(c + 1);
  }
  dfs(1);
}

console.log(main(3));
