// title: 욱제는 효도쟁이야!!
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input[1].split(" ").map(Number);

let max = 0;
let totalPrice = 0;
for (let i = 0; i < n; i++) {
  if (max < input[i]) max = input[i];
  totalPrice += input[i];
}

const result = totalPrice - max;
console.log(result);
