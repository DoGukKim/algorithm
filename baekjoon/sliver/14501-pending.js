// dp
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const [n] = input.shift();
let result = -Infinity;

function dfs(idx, sum) {
  const [t, p] = input[idx];
  if (idx + t > n) {
    if (result < sum) result = sum;
    return;
  }
  if (idx + t === n) {
    if (result < sum + p) result = sum + p;
    return;
  }

  dfs(idx + t, sum + p);
}

for (let i = 0; i < input.length; i++) {
  dfs(i, 0);
}

console.log(result);
