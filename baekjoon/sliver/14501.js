// Title: 퇴사
// Time: O(n^n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
let result = 0;
function dfs(idx, sum) {
  for (let i = idx; i < n; i++) {
    const [t, p] = input[i];
    if (i + t > n) continue;
    const max = dfs(i + t, sum + p);
    if (result < max) result = max;
  }

  return sum;
}
dfs(0, 0);
console.log(result);
