// title: 병든나이트
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
const [n, m] = input.split(" ").map(Number);

let result = 1;

if (n === 2) {
  if (m >= 7) {
    result = 4;
  } else {
    result = Math.floor((m - 1) / 2) + 1;
  }
}

if (n > 2) {
  if (m >= 7) {
    result = m - 2;
  } else {
    result = Math.min(m, 4);
  }
}

console.log(result);
