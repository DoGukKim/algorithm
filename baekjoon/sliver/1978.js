// Title: 소수 찾기
// Time: O(nm) -> m은 i번 정수
// Space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input[0].split(" ").map(Number);

let result = 0;
for (let i = 0; i < n; i++) {
  if (isPrime(input[i])) result++;
}
console.log(result);

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
