let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input[0];

let key = BigInt(0);
for (let i = 0; i < n; i++) {
  key += BigInt(((input[i].charCodeAt() - 96) * 31 ** i) % 1234567891);
}
console.log(key.toString());
