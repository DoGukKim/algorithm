let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const dp = Array.from({ length: n }, () => Array(n).fill(0));

const queue = [[0, 0]];
while (queue) {
  const [x, y] = queue.shift();
  //   if (x === n - 1 && y === n - 1) continue;

  const nx = x + input[x][y];
  const ny = y + input[x][y];
  const rowInBound = 0 <= nx && nx < n;
  const columInBound = 0 <= ny && ny < n;

  if (columInBound) {
    if (dp[x][ny]) dp[x][y] = dp[x][ny];
    else queue.push([x, ny]);
  }
  if (rowInBound) {
    if (dp[nx][y]) dp[nx][y] = dp[nx][y];
    else queue.push([nx, y]);
  }
}
console.log(dp);
