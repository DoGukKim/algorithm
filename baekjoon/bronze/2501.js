// title: 약수 구하기
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const [n, k] = input.split(" ").map(Number);

const divisor = [1];

for (let i = 2; i <= n; i++) {
  if (n % i === 0) divisor.push(i);
}

console.log(divisor[k - 1] === undefined ? 0 : divisor[k - 1]);
