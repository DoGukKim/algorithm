let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input[0].split(" ").map(Number);
input = input[1].split(" ").map(Number);

let lt = 0;
let rt = 0;
let chance = k;
let currentRange = 0;
let result = 0;

while (rt < n) {
  if (isOdd(input[rt])) {
    chance--;
    rt++;
    continue;
  }

  if (!isOdd(input[rt])) {
    currentRange++;
    result = Math.max(result, currentRange);
    rt++;
  }

  while (chance === 0) {
    if (isOdd(input[lt])) {
      chance++;
      lt++;
      continue;
    }

    currentRange--;
    lt++;
  }
}

console.log(result);

function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }

  return true;
}
