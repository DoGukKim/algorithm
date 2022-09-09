// Time: O(n^m)
// Time: O(m)
const main = (n, target) => {
  const allCombination = [];

  function dfs(i, t, sum) {
    if (t === 0) {
      allCombination.push([...sum]);
      return;
    }
    if (t < 0) {
      return;
    }

    for (let j = i; j < n.length; j++) {
      sum.push(n[j]);
      dfs(j, t - n[j], sum);
      sum.pop();
    }
  }
  dfs(0, target, []);

  return allCombination;
};

console.log(main([2, 3, 6, 7], 7));
