// Title: N과 M (4)
// Time: O(n^m)
// Space: O(m)
const input = require("fs").readFileSync("./input.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);
const p = Array.from({ length: m }, () => 0);
let result = "";
function dfs(l) {
  if (l === m) {
    result += p.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (p[l - 1] > i) continue;
    p[l] = i;
    dfs(l + 1);
  }
}
dfs(0);

console.log(result);
