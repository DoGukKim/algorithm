// title: 수리공 항승
// time: O(n log n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [N, L] = input[0];
input = input[1].sort((a, b) => a - b);

let tapeDistance = L + input[0];
let result = 1;

for (let i = 1; i < N; i++) {
  if (input[i] < tapeDistance) continue;

  tapeDistance = input[i] + L;
  result++;
}

console.log(result);
