// Time: O(nCr)
// Space: O(nCr)
const main = (n, r) => {
  const combinations = [];

  function dfs(index, com) {
    if (com.length === r) {
      combinations.push([...com]);
      return;
    }

    for (let i = index; i < n.length; i++) {
      com.push(n[i]);
      dfs(i + 1, com);
      com.pop();
    }
  }
  dfs(0, []);

  return combinations;
};

console.log(main([1, 2, 3], 2));
