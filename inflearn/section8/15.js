// 방법 1
// Time: O(n!)
// Space: O(n)
const main = (n, k, m) => {
  let result = 0;

  function dfs(level, index, combinationSum) {
    if (level === k) {
      if (combinationSum % m === 0) result++;
      return;
    }

    for (let i = index; i < n.length; i++) {
      dfs(level + 1, i + 1, combinationSum + n[i]);
    }
  }
  dfs(0, 0, 0);

  return result;
};

console.log(main([2, 4, 5, 8, 12], 3, 6)); // -> 2
