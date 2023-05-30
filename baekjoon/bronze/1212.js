// Title: 8진수 2진수
// Time: O(n*m)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = input.split("").map(Number);

let result = "";
for (let i = 0; i < input.length; i++) {
  let binary = input[i].toString(2);
  while (i !== 0 && binary.length < 3) {
    binary = "0" + binary;
  }
  result += binary;
}

console.log(result);
