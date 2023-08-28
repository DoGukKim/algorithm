// title: 이진수
// time: O(log n)
// space: O(log n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

const t = input[0];

let result = "";

for (let i = 1; i <= t; i++) {
  const binaryOneIndexes = getOneIndexesOfBinaryNumber(input[i]);

  result += `${binaryOneIndexes.join(" ")}\n`;
}

console.log(result);

function getOneIndexesOfBinaryNumber(num) {
  const result = [];
  const numbers = [];

  while (num > 0) {
    const n = num % 2;

    if (n === 1) {
      result.push(numbers.length);
    }

    numbers.push(n);
    num = Math.floor(num / 2);
  }

  return result;
}
