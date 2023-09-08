// title: 쉽게 푸는 문제
// time: O(n^2)
// space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const [A, B] = input.split(" ").map(Number);

const result = [];

for (let i = 1; i <= 1000; i++) {
  for (let j = 0; j < i; j++) {
    result.push(i);
  }
}

console.log(result.slice(A - 1, B).reduce((a, c) => a + c, 0));
