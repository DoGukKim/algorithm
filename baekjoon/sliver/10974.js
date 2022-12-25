// Title: 모든 순열
// Time: O(n^n)
// Space: O(n)
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = Number(input);

const p = Array.from({ length: input }, () => 0);
const ch = Array.from({ length: input + 1 }, () => 0);
let result = "";
function dfs(l) {
  if (l === input) {
    result += p.slice().join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= input; i++) {
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
