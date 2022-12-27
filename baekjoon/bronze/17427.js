// Title: 약수의 합(2)
// Time: O(n)
// Space: O(1)
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = Number(input);

let result = 0;
for (let i = 1; i <= input; i++) {
  result += i * Math.floor(input / i);
}
console.log(result);
