// title: 주몽

// 완전 탐색 풀이
// time: O(n^2)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const m = Number(input[1]);
input = input[2].split(" ").map(Number);

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (input[i] + input[j] === m) result++;
  }
}

console.log(result);

// 투 포인터 풀이
// time: O(n log n)
// space: O(1)
// let result = 0;
// let lt = 0;
// let rt = input.length - 1;
// input = input.sort((a, b) => a - b);

// while (lt < rt) {
//   const sum = input[lt] + input[rt];
//   if (sum === m) {
//     result++;
//     lt++;
//     rt--;
//     continue;
//   }

//   if (sum < m) {
//     lt++;
//   } else {
//     rt--;
//   }
// }

// console.log(result);
