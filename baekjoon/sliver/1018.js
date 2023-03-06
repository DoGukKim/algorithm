// Title: 체스판 다시 칠하기
// Time: O(mn)
// Space: O(1)
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
    if (count < result) result = count;
  }
}
console.log(result);

function drawCount(r, c) {
  let wCount = 0;
  let bCount = 0;

  for (let x = r; x < r + 8; x++) {
    for (let y = c; y < c + 8; y++) {
      if (x % 2 === 0 && y % 2 === 0 && "W" !== input[x][y]) wCount++;
      if (x % 2 === 0 && y % 2 === 0 && "B" !== input[x][y]) bCount++;

      if (x % 2 === 0 && y % 2 !== 0 && "W" === input[x][y]) wCount++;
      if (x % 2 === 0 && y % 2 !== 0 && "B" === input[x][y]) bCount++;

      if (x % 2 !== 0 && y % 2 !== 0 && "W" !== input[x][y]) wCount++;
      if (x % 2 !== 0 && y % 2 !== 0 && "B" !== input[x][y]) bCount++;

      if (x % 2 !== 0 && y % 2 === 0 && "W" === input[x][y]) wCount++;
      if (x % 2 !== 0 && y % 2 === 0 && "B" === input[x][y]) bCount++;
    }
  }

  return Math.min(wCount, bCount);
}
