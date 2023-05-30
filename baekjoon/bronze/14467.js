// Title: 소가 길을 건너간 이유 1
// Time: O(n)
// Space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

if (n === 0) {
  console.log(0);
  return;
}

let result = 0;
const arr = Array.from({ length: 10 }, () => -1);
for (let i = 0; i < n; i++) {
  const [num, dir] = input[i];
  const idx = num - 1;
  if (arr[idx] === -1) {
    arr[idx] = dir;
    continue;
  }

  if (arr[idx] === dir) continue;
  arr[idx] = dir;
  result++;
}
console.log(result);
