// Title: 부분수열의 합(2)
// Time: O(n^n)
// Space: O(n) -> element total
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n] = input.shift();
input = input[0].sort((a, b) => a - b);

const total = input.reduce((a, c) => a + c, 0);
const range = Array.from({ length: total + 1 }, () => 0);
range[0] = 1;

function dfs(idx, sum) {
  for (let i = idx; i < n; i++) {
    range[input[i]] = 1;
    range[sum + input[i]] = 1;
    dfs(i + 1, sum + input[i]);
  }
}
dfs(0, 0);

const min = range.indexOf(0);
console.log(min === -1 ? total + 1 : min);
