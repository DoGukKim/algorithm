// Title: N과 M (10)
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

const c = Array.from({ length: m }, () => 0);
const map = new Map();
let result = "";
function dfs(l, idx) {
  if (l === m) {
    const s = c.join("");
    if (map.has(s)) return;
    map.set(s, true);
    result += c.join(" ") + "\n";
    return;
  }

  for (let i = idx; i < n; i++) {
    c[l] = input[0][i];
    dfs(l + 1, i + 1);
  }
}
dfs(0, 0);

console.log(result);
