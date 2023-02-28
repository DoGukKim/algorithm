// Title: 피보나치 함수
// Time: O(t*n)
// Space: O(t*n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);
const t = input.shift();
let result = "";
for (let i = 0; i < t; i++) {
  const dp = Array.from({ length: 41 }, () => [0, 0]);
  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let j = 2; j <= 40; j++) {
    dp[j] = [dp[j - 1][0] + dp[j - 2][0], dp[j - 1][1] + dp[j - 2][1]];
  }

  result += `${dp[input[i]][0]} ${dp[input[i]][1]}\n`;
}
console.log(result);
