// Title: 좌표 압축
// Time: O(n log n)
// Space: O(n)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());

input = input[0].split(" ").map(Number);

const set = new Set(input);
const sortedArray = [...set].sort((a, b) => a - b);
let result = "";

for (let i = 0; i < n; i++) {
  let lp = 0;
  let rp = sortedArray.length - 1;

  while (lp <= rp) {
    let mid = Math.floor((lp + rp) / 2);

    if (sortedArray[mid] === input[i]) {
      result += mid + " ";
      break;
    }

    if (sortedArray[mid] < input[i]) {
      lp = mid + 1;
    }

    if (sortedArray[mid] > input[i]) {
      rp = mid - 1;
    }
  }
}

console.log(result);

// 방법 2
// Time: O(n)
// Space: O(n)
// const n = Number(input.shift());

// input = input[0].split(" ").map(Number);

// const set = new Set(input);
// const sortedArray = [...set].sort((a, b) => a - b);
// const map = {};

// for (let i = 0; i < sortedArray.length; i++) {
//   map[sortedArray[i]] = i;
// }

// let result = [];
// for (let i = 0; i < n; i++) {
//   result.push(map[input[i]]);
// }

// console.log(result.join(" "));
