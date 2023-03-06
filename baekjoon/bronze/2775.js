// Title: 부녀회장이 될테야
// Time: O(t*kn)
// Space: O(t*kn)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const t = Number(input.shift());
input = input.map(Number);

let result = "";
for (let i = 0; i < t * 2; i += 2) {
  const k = input[i];
  const n = input[i + 1];

  const dp = Array.from({ length: 15 }, () => Array(15).fill(0));

  for (let j = 1; j < 15; j++) dp[0][j] = j;

  for (let x = 1; x < 15; x++) {
    for (let y = 1; y < 15; y++) {
      if (y === 1) {
        dp[x][y] = 1;
        continue;
      }

      dp[x][y] = dp[x][y - 1] + dp[x - 1][y];
    }
  }

  result += `${dp[k][n]}\n`;
}
console.log(result);
