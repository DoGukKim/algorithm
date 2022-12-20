// Title: N과 M (5)
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
const ch = Array.from({ length: n }, () => 0);
const p = Array.from({ length: m }, () => 0);
let result = "";
function dfs(l) {
  if (l === m) {
    result += p.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    if (ch[i] === 0) {
      ch[i] = 1;
      p[l] = input[0][i];
      dfs(l + 1);
      ch[i] = 0;
    }
  }
}
dfs(0);

console.log(result);
