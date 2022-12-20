// Title: N과 M (1)
// Time: O(n^m)
// Space: O(m)
const input = require("fs").readFileSync("./input.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);
const ch = Array.from({ length: n + 1 }, () => 0);
const p = Array.from({ length: m }, () => 0);
let result = "";

function dfs(l) {
  if (l === m) {
    result += p.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      ch[i] = 1;
      p[l] = i;
      dfs(l + 1);
      ch[i] = 0;
    }
  }
}

dfs(0);
console.log(result);
