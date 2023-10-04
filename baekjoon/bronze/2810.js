// title: 컵홀더
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let seatCount = 0;

for (let i = 0; i < n; i++) {
  if (input[1][i] === "L") ++i;

  seatCount++;
}

const cupholderCount = seatCount - 1 + 2;
console.log(cupholderCount > n ? n : cupholderCount);
