// Title: N과 M (2)
// Time: O(n^m)
// Space: O(m)
let input = require("fs").readFileSync("./input.txt").toString().trim();

input = input.split(" ").map(Number);
const [n, m] = input;

const c = Array.from({ length: m }, () => 0);
let result = "";
function dfs(l, idx) {
  if (l === m) {
    result += c.join(" ") + "\n";
    return;
  }

  for (let i = idx; i <= n; i++) {
    c[l] = i;
    dfs(l + 1, i + 1);
  }
}
dfs(0, 1);
console.log(result);
