let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n] = input.shift();
input = input[0];
const copy = input.slice();
copy.sort((a, b) => a - b);
input = input.join(" ");
const p = Array.from({ length: n }, () => 0);
const ch = Array.from({ length: n }, () => 0);
function dfs(l) {
  if (l === n) {
    return;
  }

  for (let i = 0; i < n; i++) {
    if (ch[i] === 0) {
      ch[i] = 1;
      p[l] = copy[i];
      dfs(l + 1);
      ch[i] = 0;
    }
  }
}

dfs(0);
