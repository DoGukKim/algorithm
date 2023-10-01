// TODO: LLLL 테스트 케이스에서 틀림
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const seats = input[1];
let cupHolderCount = 0;

for (let i = 0; i < n; i++) {
  if (seats[i] === "S" && (i === 0 || i === n - 1)) {
    cupHolderCount += 2;
  } else if (seats[i] === "L") {
    ++i;
    cupHolderCount++;
  } else {
    cupHolderCount++;
  }
}
console.log(cupHolderCount >= n ? n : cupHolderCount);
