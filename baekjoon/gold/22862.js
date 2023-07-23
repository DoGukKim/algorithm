// title: 가장 긴 짝수 연속한 부분 수열
// time: O(n)
// space: O(1)
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
    // 현재 홀수인데 기회가 없으면, 기회가 생길때까지 순환
    while (chance <= 0) {
      if (isOdd(input[lt])) {
        chance++;
        lt++;
        continue;
      }

      currentRange--;
      lt++;
    }

    chance--;
    rt++;
    continue;
  }

  currentRange++;
  result = Math.max(result, currentRange);
  rt++;
}

console.log(result);

function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }

  return true;
}
