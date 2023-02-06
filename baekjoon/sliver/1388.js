// Title: 바닥 장식
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const ch = Array.from({ length: n }, () => Array(m).fill(0));
input = input.map((i) => i.split(""));
let result = 0;
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (ch[x][y] !== 1) {
      result++;
      ch[x][y] = 1;
      dfs(x, y);
    }
  }
}
console.log(result);

function dfs(x, y) {
  const stack = [[x, y]];

  while (stack.length) {
    const [x, y] = stack.pop();
    if (
      input[x][y] === "-" &&
      y + 1 < m &&
      ch[x][y + 1] === 0 &&
      input[x][y + 1] === "-"
    ) {
      ch[x][y + 1] = 1;
      stack.push([x, y + 1]);
      continue;
    }

    if (
      input[x][y] === "|" &&
      x + 1 < n &&
      ch[x + 1][y] === 0 &&
      input[x + 1][y] === "|"
    ) {
      ch[x + 1][y] = 1;
      stack.push([x + 1, y]);
    }
  }
}
