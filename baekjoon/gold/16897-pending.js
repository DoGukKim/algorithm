let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
input = input.slice(1).map((i) => i.split(" ").map(Number));
const ch = Array.from({ length: n }, () => 0);
let result = 0;

for (let i = 0; i < n; i++) {
  const egg = input[i];

  ch[i] = 1;
  dfs(egg, 0, 0);
  ch[i] = 0;
}

console.log(result);

function dfs(egg, level, count) {
  if (level === 1) {
    if (egg[0] <= 0) {
      result = Math.max(result, count + 1);
      return;
    }

    result = Math.max(result, count);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (ch[i] === 1 || input[i][0] <= 0 || egg[0] <= 0) continue;

    ch[i] = 1;
    egg[0] -= input[i][1];
    input[i][0] -= egg[1];
    dfs(egg, level + 1, input[i][0] <= 0 ? count + 1 : count);
    egg[0] += input[i][1];
    input[i][0] += egg[1];
    ch[i] = 0;
  }
}
