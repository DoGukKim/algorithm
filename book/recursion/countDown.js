// 방법 1
// Time: O(n)
// Space: O(n)
const main = (n) => {
  if (n < 0) return;
  console.log(n);
  main(n - 1);
};

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (n) => {
  function dfs(num) {
    if (num < 0) return;
    console.log(num);
    dfs(num - 1);
  }
  dfs(n);
};

// 방법 3
// Iterative
// Time: O(n)
// Space: O(1)
const main3 = (n) => {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
};
