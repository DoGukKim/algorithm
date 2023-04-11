// Title: 완전 이진 트리
// Time: O(2^k)
// Space: O(k)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const k = input.shift();
input = input[0];
const Nodes = Array.from({ length: k }, () => Array());

dfs(0, 0, input.length - 1);
function dfs(level, s, e) {
  if (s > e) return;
  const mid = Math.floor((s + e) / 2);
  Nodes[level].push(input[mid]);
  dfs(level + 1, s, mid - 1);
  dfs(level + 1, mid + 1, e);
}

let result = "";
for (let i = 0; i < k; i++) {
  for (let j = 0; j < Nodes[i].length; j++) {
    result += `${Nodes[i][j]} `;
  }
  result += "\n";
}
console.log(result);
