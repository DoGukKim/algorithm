// Title: N과 M (11)
// Time: O(n^m)
// Space: O(m)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
input[0].sort((a, b) => a - b);

const p = Array.from({ length: m }, () => 0);
const map = new Map();
let result = "";
function dfs(l) {
  if (l === m) {
    const s = p.join("");
    if (map.has(s)) return;
    map.set(s, true);
    result += p.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    p[l] = input[0][i];
    dfs(l + 1);
  }
}
dfs(0);

console.log(result);
