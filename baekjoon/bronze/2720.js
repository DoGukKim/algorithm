// Title: 세탁소 사장 동혁
// Time: O(t)
// Space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map(Number);
const coins = [25, 10, 5, 1];

let result = "";
for (let i = 0; i < n; i++) {
  let C = input[i];
  const check = [0, 0, 0, 0];

  for (let j = 0; j < 4; j++) {
    const mod = Math.floor(C / coins[j]);
    check[j] = mod;
    C -= coins[j] * mod;
  }

  result += `${check.join(" ")}\n`;
}
console.log(result);
