// 방법 1
// Time: O(n)
// Space : O(n)
const main = (n) => {
  if (n === 1) return 1;
  return n * main(n - 1);
};

// 방법 2
// Time: O(n)
// Space : O(n)
const main2 = (n) => {
  function dfs(num) {
    if (num === 1) return 1;
    return num * dfs(num - 1);
  }
  return dfs(n);
};

// 방법 3
// Iterative
// Time: O(n)
// Space : O(1)
const main3 = (n) => {
  for (let i = n - 1; i >= 1; i--) {
    n = n * i;
  }
  return n;
};
