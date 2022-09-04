// Time: O(2^n * n)
// Space: O(nC1 + ... + nCr)
const main = (n) => {
  const allSubset = [];

  function dfs(index, subset) {
    if (index === n.length) {
      if (subset.length > 0) allSubset.push(subset);
      return;
    }

    const subsetWithElement = subset.slice();
    const subsetWithOutElement = subset.slice();

    subsetWithElement.push(n[index]);
    dfs(index + 1, subsetWithElement);
    dfs(index + 1, subsetWithOutElement);
  }
  dfs(0, []);

  return allSubset;
};

console.log(main([1, 2, 3]));
