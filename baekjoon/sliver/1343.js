// title: 폴리오미노
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const n = input.length;

let result = "";

for (let i = 0; i < n; i++) {
  if (input[i] === ".") {
    result += ".";
    continue;
  }

  let sum = 0;
  for (let j = i; j < n; j++) {
    if (input[j] === ".") break;
    sum++;
  }

  if (sum % 2 !== 0) return console.log(-1);
  i += sum - 1;
  result += "AAAA".repeat(Math.floor(sum / 4));
  sum = sum % 4;
  result += "BB".repeat(Math.floor(sum / 2));
  sum = sum % 2;
}

console.log(result);
