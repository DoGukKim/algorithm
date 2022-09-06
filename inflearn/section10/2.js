// Time: O(n)
// Space: O(n)
const main = (n) => {
  function dfs(num, memo = {}) {
    if (num in memo) return memo[num];
    if (num < 0) return 0;
    if (num === 0) return 1;

    memo[num] = dfs(num - 1) + dfs(num - 2);

    return memo[num];
  }

  return dfs(n + 1);
};

console.log(main(7));
