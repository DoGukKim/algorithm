// title: 우유 축제
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input[1].split(" ").map(Number);

const pattern = [0, 1, 2];
let pointer = 0;
let result = 0;

for (let i = 0; i < n; i++) {
  if (input[i] === pattern[pointer]) {
    if (pointer !== 0 && (pointer + 1) % pattern.length === 0) {
      pointer = 0;
      result++;
      continue;
    } else {
      pointer++;
      result++;
    }
  }
}

console.log(result);
