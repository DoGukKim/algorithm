// title: 시험 감독
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const classes = input[1].split(" ").map(Number);
const [B, C] = input[2].split(" ").map(Number);

let result = 0;
for (let i = 0; i < n; i++) {
  // B
  if (classes[i] - B < 0) {
    classes[i] = 0;
  } else {
    classes[i] -= B;
  }

  result++;

  // C
  result += Math.ceil(classes[i] / C);
}

console.log(result);
