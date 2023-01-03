let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

let result = "";
for (let i = 0; i < input.length; i++) {
  const dp = Array.from({ length: input[i] + 1 }, () => 0);

  for (let j = 1; j <= 3; j++) {
    for (let k = j; k <= input[i]; k++) {
      dp[k] = dp[k - 1] + 1;
    }
  }

  console.log(dp);

  // result += `${dp[input[i]]}\n`;
}

console.log(result);
