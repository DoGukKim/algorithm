// 방법 1
// Time: O(n)
// Space: O(n)
const main = (n) => {
  if (n === 1) return 1;
  return n + main(n - 1);
};

console.log(main(4));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (n) => {
  function dfs(num) {
    if (num === 1) return 1;
    return num + dfs(num - 1);
  }
  return dfs(n);
};

console.log(main2(4));

// 방법 3
// Iterative
// Time: O(n)
// Space: O(1)
const main3 = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
};

console.log(main3(4));
