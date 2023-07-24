// title: 부분합
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, s] = input[0].split(" ").map(Number);
input = input[1].split(" ").map(Number);

let lt = 0;
let rt = 0;
let sum = 0;
let count = 0;
let subsetLength = 0;
let result = Infinity;

while (rt < n) {
  sum += input[rt];
  subsetLength++;
  rt++;

  while (sum >= s) {
    result = Math.min(result, subsetLength);
    sum -= input[lt];
    subsetLength--;
    count++;
    lt++;
  }
}

if (count === 0) {
  return console.log(0);
}

console.log(result);
