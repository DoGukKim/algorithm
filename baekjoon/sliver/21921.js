// title: 블로그
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, x] = input.shift();
input = input[0];

const map = new Map();

let lt = 0;
let rt = 0;
let sum = 0;
let max = 0;

while (lt <= n - x) {
  while (rt - lt < x) {
    sum += input[rt++];
  }

  map.set(sum, (map.get(sum) || 0) + 1);
  max = Math.max(max, sum);
  sum -= input[lt];
  lt++;
}

if (max === 0) return console.log("SAD");

console.log(max);
console.log(map.get(max));
