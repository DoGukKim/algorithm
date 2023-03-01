// Title: 블랙잭
// Time: O(n^3)
// Space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input[0].split(" ").map(Number);

let result = 0;
for (let i = 0; i <= n - 3; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = input[i] + input[j] + input[k];
      if (sum > m) continue;
      if (result < sum) result = sum;
    }
  }
}
console.log(result);
