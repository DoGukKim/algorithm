// Title: 체스판 다시 칠하기
// Time: O()
// Space: O()
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [m, n] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(""));

let result = Infinity;
for (let x = 0; x <= m - 8; x++) {
  for (let y = 0; y <= n - 8; y++) {
    const count = drawCount(x, y);
    console.log(count);
    if (count < result) result = count;
  }
}
console.log(result);

function drawCount(r, c) {
  let count = 0;
  const cur = input[r][c];
  for (let x = r; x < r + 8; x += 2) {
    for (let y = r; y < c + 8; y += 2) {}
  }
  return count;
}
