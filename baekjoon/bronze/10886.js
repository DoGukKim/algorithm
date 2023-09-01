// title: cute, not cute
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0];

// 0: cute, 1: !cute
let result = [0, 0];
for (let i = 1; i <= n; i++) {
  if (input[i] === "0") result[0]++;
  if (input[i] === "1") result[1]++;
}

console.log(result[0] > result[1] ? "Junhee is not cute!" : "Junhee is cute!");
