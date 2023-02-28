// Title: 최대공약수와 최소공배수
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
const [a, b] = input.split(" ").map(Number);
const gcd = getGCD(a, b);
console.log(gcd);
console.log((a * b) / gcd);

function getGCD(a, b) {
  if (a % b === 0) return b;
  return getGCD(b, a % b);
}
