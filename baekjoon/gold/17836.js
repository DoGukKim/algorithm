// Title: 공주님을 구해라!
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m, time] = input.shift();
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const q1 = [[0, 0, 0]];
let q2 = [];
if (input[0][0] === 2) {
  q2 = [[0, 0, 0]];
  ch[0][0] = 1;
}
const ch = Array.from({ length: n }, () => Array(m).fill(0));

input[0][0] = 1;
let a = "Fail";
let b = "Fail";

while (q1.length) {
  const [x, y, t] = q1.shift();
  if (x === n - 1 && y === m - 1) {
    if (time - t >= 0) a = t;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = dir[i];
    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (input[nx][ny] === 2) q2.push([nx, ny, t + 1]);
      if (input[nx][ny] === 1) continue;
      input[nx][ny] = 1;
      q1.push([nx, ny, t + 1]);
    }
  }
}

while (q2.length) {
  const [x, y, t] = q2.shift();
  if (x === n - 1 && y === m - 1) {
    if (time - t >= 0) b = t;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = dir[i];
    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (ch[nx][ny] === 1) continue;
      ch[nx][ny] = 1;
      q2.push([nx, ny, t + 1]);
    }
  }
}

const result = Math.min(
  a !== "Fail" ? a : Infinity,
  b !== "Fail" ? b : Infinity
);
console.log(result !== Infinity ? result : "Fail");

// 한 번의 BFS 수행으로 한 경우
// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// input = input.map((i) => i.split(" ").map(Number));
// const [n, m, time] = input.shift();
// const dir = [
//   [-1, 0],
//   [0, 1],
//   [1, 0],
//   [0, -1],
// ];

// const q1 = [[0, 0, 0]];
// let q2 = [];
// if (input[0][0] === 2) q2 = [[0, 0, 0]];

// input[0][0] = 1;
// let a = "Fail";
// let b = "Fail";

// while (q1.length) {
//   const [x, y, t] = q1.shift();
//   if (x === n - 1 && y === m - 1) {
//     if (time - t >= 0) a = t;
//     break;
//   }

//   for (let i = 0; i < 4; i++) {
//     const [dx, dy] = dir[i];
//     const nx = x + dx;
//     const ny = y + dy;
//     if (0 <= nx && nx < n && 0 <= ny && ny < m) {
//       if (input[nx][ny] === 2) q2.push([nx, ny, t + 1]);
//       if (input[nx][ny] === 1) continue;
//       input[nx][ny] = 1;
//       q1.push([nx, ny, t + 1]);
//     }
//   }
// }

// if (q2.length) {
//   const [x, y, t] = q2.shift();
//   const result = Math.abs(n - 1 - x) + Math.abs(m - 1 - y) + t;
//   if (result >= 0 && time <= result) b = result;
// }

// const result = Math.min(
//   a !== "Fail" ? a : Infinity,
//   b !== "Fail" ? b : Infinity
// );
// console.log(result !== Infinity ? result : "Fail");
