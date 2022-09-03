const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

// 1,2,3 더하기
// Time: O(3^n)
// Space: O(n)
const main = (n) => {
  for (let i = 0; i < n.length; i++) {
    console.log(dfs(n[i]));
  }

  function dfs(num) {
    if (num < 0) return 0;
    if (num === 0) return 1;
    return dfs(num - 1) + dfs(num - 2) + dfs(num - 3);
  }
};

main(input);
