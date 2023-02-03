let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
const [x, y, d] = input.shift();
const dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
let result = 1;
input[x][y] = 2;

dfs(x, y, d);
function dfs(x, y, d) {
  console.log(x, y, d);
  let time = 3;
  while (time--) {}
}

console.log(result);

// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// input = input.map((i) => i.split(" ").map(Number));
// const [n, m] = input.shift();
// const [x, y, d] = input.shift();
// const dir = [
//   [-1, 0],
//   [0, -1],
//   [1, 0],
//   [0, 1],
// ];
// const opposite = {
//   0: [1, 0],
//   1: [0, -1],
//   2: [-1, 0],
//   3: [0, 1],
// };
// let result = 1;
// input[x][y] = 2;
// const stack = [[x, y, d]];

// while (stack.length) {
//   const [x, y, d] = stack.pop();

//   let time = 4;
//   let pointer = d + 1;
//   while (time--) {
//     if (pointer >= 4) pointer = 0;
//     const [dx, dy] = dir[pointer];
//     const nx = x + dx;
//     const ny = y + dy;
//     const inBound = 0 <= nx && nx < n && 0 <= ny && ny < m;

//     if (inBound && input[nx][ny] === 0) {
//       result++;
//       input[nx][ny] = 2;
//       stack.push([nx, ny, pointer]);
//     } else if (inBound && input[nx][ny] === 2) {
//       stack.push([x, y, pointer]);
//     } else {
//       let flag = true;
//       for (let i = 0; i < dir.length; i++) {
//         const [dx, dy] = dir[i];
//         const nx = x + dx;
//         const ny = y + dy;
//         const inBound = 0 <= nx && nx < n && 0 <= ny && ny < m;
//         if (inBound && (input[nx][ny] !== 2 || input[nx][ny] !== 1))
//           flag = false;
//       }

//       if (flag) {
//         const [dx, dy] = opposite[d];
//         const nx = x + dx;
//         const ny = y + dy;
//         const inBound = 0 <= nx && nx < n && 0 <= ny && ny < m;

//         if (inBound && input[nx][ny] === 1) return;
//         else stack.push([nx, ny, d]);
//       }
//     }

//     pointer++;
//   }
// }

// dfs(x, y, d);
// function dfs(x, y, d) {
//   let time = 4;
//   let pointer = d + 1;

//   while (time--) {
//     if (pointer >= 4) pointer = 0;
//     const [dx, dy] = dir[pointer];
//     const nx = x + dx;
//     const ny = y + dy;
//     const inBound = 0 <= nx && nx < n && 0 <= ny && ny < m;

//     if (inBound && input[nx][ny] === 0) {
//       result++;
//       input[nx][ny] = 2; // 청소
//       dfs(nx, ny, pointer);
//     } else if (inBound && (input[nx][ny] === 2 || input[nx][ny] === 1)) {
//       dfs(x, y, pointer);
//     }
//   }
// }

// console.log(result);
