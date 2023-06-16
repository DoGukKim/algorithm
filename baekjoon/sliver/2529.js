// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const k = Number(input[0]);
// const signs = input[1].split(" ");
// const numbers = Array.from({ length: 10 }, (_, i) => i);
// const ch = Array.from({ length: 10 }, () => 0);

// const map = {
//   "<": (a, b) => a < b,
//   ">": (a, b) => a > b,
// };

// let min = Infinity;
// let max = -Infinity;
// let result = [];

// for (let i = 0; i < 10; i++) {
//   ch[i] = 1;
//   dfs([numbers[i]], 0);
// }
// // console.log(result);

// function dfs(arr, level) {
//   console.log(arr);
//   if (arr.length === k + 1) {
//     const newStr = arr.join("");
//     const newNum = Number(newStr);
//     console.log(newNum);
//     if (max < newNum) {
//       max = newNum;
//       result[0] = newStr;
//     }

//     if (min > newNum) {
//       min = newNum;
//       result[1] = newStr;
//     }

//     return;
//   }

//   for (let i = 0; i < 10; i++) {
//     if (ch[i] === 1) continue;
//     if (!map[signs[level]](arr.at(-1), numbers[i])) continue;

//     ch[i] = 1;
//     arr.push(numbers[i]);
//     dfs(arr, level + 1);
//     arr.pop();
//     ch[i] = 0;
//   }
// }

// 부등호 계산이 잘못됨..
