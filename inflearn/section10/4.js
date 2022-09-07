// Time: O()
// Space: O()
const main = (n, t) => {
  let result = Infinity;

  function dfs(target, sum, memo = {}) {
    console.log(memo);
    if (target === 0) {
      if (sum.length < result) result = sum.length;
      return;
    }
    if (target < 0) {
      return;
    }

    for (let i = 0; i < n.length; i++) {
      sum.push(n[i]);
      if (target - n[i] === 0) memo[target] = sum;
      dfs(target - n[i], sum, memo);
      sum.pop();
    }
  }
  dfs(t, []);

  return result;
};

// console.log(main([1, 2, 5], 15));
console.log(main([2, 3, 5], 7));
// console.log(main([1, 2, 5], 100));
