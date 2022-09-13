const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const n = input[0].split(" ");

function dfs(arr, level) {
  if (arr.length === 0) return;

  const center = Math.floor(arr.length / 2);
  dfs(arr.slice(0, center), level + 1);
  dfs(arr.slice(center + 1, arr.length), level + 1);
}
dfs(n, 0);
