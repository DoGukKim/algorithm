// Title: 가장 긴 증가하는 부분 수열
// Time: O(n^2)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input[0].split(" ").map(Number);

let result = 1;
const dp = Array.from({ length: n }, () => 0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (input[j] < input[i] && max < dp[j]) max = dp[j];
  }
  dp[i] = max + 1;
  if (result < dp[i]) result = dp[i];
}

console.log(result);
