// title: 겹치는 건 싫어
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input[0].split(" ").map(Number);
input = input[1].split(" ").map(Number);

let lt = 0;
let rt = 0;
let sum = 0;
let result = 0;
const map = new Map();

while (rt < n) {
  map.set(input[rt], (map.get(input[rt]) || 0) + 1);
  sum++;

  if (map.get(input[rt]) > k) {
    while (map.get(input[rt]) > k) {
      map.set(input[lt], map.get(input[lt]) - 1);
      sum--;
      lt++;
    }
  }

  result = Math.max(result, sum);
  rt++;
}

console.log(result);
