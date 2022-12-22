// Title: 부분수열의 합
// Time: O(n^n)
// Space: O(n)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((i) => i.split(" ").map(Number));
const [n, s] = input.shift();
input = input[0];

let result = 0;
function dfs(sum, idx) {
  for (let i = idx; i < n; i++) {
    if (sum + input[i] === s) result++;
    dfs(sum + input[i], i + 1);
  }
}
dfs(0, 0);

console.log(result);
