// title: 한조서열정리하고옴ㅋㅋ
// time: O(n)
// space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input[1].split(" ").map(Number);

let queue = [];
let result = 0;
for (let i = 0; i < n; i++) {
  if (queue.length === 0) {
    queue.push(input[i]);
    continue;
  } else {
    if (queue[0] > input[i]) {
      queue.push(input[i]);
      if (queue.length > 1 && i === n - 1) {
        result = Math.max(result, queue.length - 1);
      }
      continue;
    }

    if (queue[0] < input[i]) {
      result = Math.max(result, queue.length - 1);
      queue = [input[i]];
      continue;
    }
  }
}

console.log(result);

// testCase
// [1,2,3,4,5]
// [5,4,3,2,1]
// [1]

// refactoring version
// let currentMaxHeight = 0;
// let acc = 0;
// let result = 0;

// for (let i = 0; i < n; i++) {
//   if (currentMaxHeight < input[i]) {
//     result = Math.max(result, acc);
//     currentMaxHeight = input[i];
//     acc = 0;
//     continue;
//   }

//   acc++;

//   if (i === n - 1 && acc > 0) {
//     result = Math.max(result, acc);
//     break;
//   }
// }

// console.log(result);
