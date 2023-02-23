// Title: 부분집합 구하기(DFS)
// Time: O(n^n)
// Space: O(n)
function main(n) {
  dfs(1, []);

  function dfs(num, stack) {
    if (num > n) return;

    for (let i = num; i <= n; i++) {
      stack.push(i);
      dfs(i + 1, stack);
      console.log(stack);
      stack.pop();
    }
  }
}
