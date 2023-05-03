// 첫 번째 풀이
// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const k = Number(input.shift());
// input = input.map((i) => i.split(" ").map(Number));
// const [w, h] = input.shift();
// const normalDir = [
//   [-1, 0],
//   [0, 1],
//   [1, 0],
//   [0, -1],
// ];

// const horseDir = [
//   [-2, 1],
//   [-1, 2],
//   [1, 2],
//   [2, 1],
//   [2, -1],
//   [1, -2],
//   [-1, -2],
//   [-2, -1],
// ];

// const queue = [[0, 0, 0, k]];
// const queue2 = [];
// input[0][0] = 3;
// while (queue.length) {
//   const [x, y, step, chance] = queue.shift();

//   for (let i = 0; i < 8; i++) {
//     const [dx, dy] = horseDir[i];
//     const nx = x + dx;
//     const ny = y + dy;
//     if (0 <= nx && nx < h && 0 <= ny && ny < w && input[nx][ny] === 0) {
//       if (chance - 1 === 0) {
//         input[nx][ny] = 3;
//         queue2.push([nx, ny, step + 1]);
//         continue;
//       }

//       input[nx][ny] = 3;
//       queue.push([nx, ny, step, chance - 1]);
//     }
//   }
// }

// if (queue2.length === 0) {
//   const queue = [[0, 0, 0]];
//   const result = bfs(queue);
//   if (!result) console.log("-1");
// } else {
//   const result = bfs(queue2);
//   if (!result) console.log("-1");
// }

// function bfs(queue) {
//   while (queue.length) {
//     const [x, y, step] = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       const [dx, dy] = normalDir[i];
//       const nx = x + dx;
//       const ny = y + dy;
//       if (0 <= nx && nx < h && 0 <= ny && ny < w && input[nx][ny] === 0) {
//         if (nx === h - 1 && ny === w - 1) {
//           console.log(step + 1);
//           return true;
//         }

//         input[nx][ny] = 3;
//         queue.push([nx, ny, step + 1]);
//       }
//     }
//   }

//   return false;
// }

// 두 번째 풀이
// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const k = Number(input.shift());
// input = input.map((i) => i.split(" ").map(Number));
// const [w, h] = input.shift();
// const normalDir = [
//   [-1, 0],
//   [0, 1],
//   [1, 0],
//   [0, -1],
// ];

// const horseDir = [
//   [-2, 1],
//   [-1, 2],
//   [1, 2],
//   [2, 1],
//   [2, -1],
//   [1, -2],
//   [-1, -2],
//   [-2, -1],
// ];

// const nomarCh = Array.from({ length: h }, () => Array(w).fill(0));
// const horseCh = Array.from({ length: h }, () => Array(w).fill(0));
// nomarCh[0][0] = 1;
// horseCh[0][0] = 1;
// const result = bfs();
// if (!result) console.log("-1");

// function bfs() {
//   const queue = [[0, 0, 0, k]];

//   while (queue.length) {
//     const [x, y, step, chance] = queue.shift();

//     if (x === h - 1 && y === w - 1) {
//       console.log(step);
//       return true;
//     }

//     for (let i = 0; i < 4; i++) {
//       const [dx, dy] = normalDir[i];
//       const nx = x + dx;
//       const ny = y + dy;
//       if (
//         0 <= nx &&
//         nx < h &&
//         0 <= ny &&
//         ny < w &&
//         input[nx][ny] === 0 &&
//         nomarCh[nx][ny] === 0
//       ) {
//         nomarCh[nx][ny] = 1;
//         queue.push([nx, ny, step + 1, chance]);
//       }
//     }

//     for (let i = 0; i < 8; i++) {
//       const [dx, dy] = horseDir[i];
//       const nx = x + dx;
//       const ny = y + dy;
//       if (
//         0 <= nx &&
//         nx < h &&
//         0 <= ny &&
//         ny < w &&
//         input[nx][ny] === 0 &&
//         horseCh[nx][ny] === 0
//       ) {
//         if (chance - 1 === 0 && nx !== h - 1 && ny !== w - 1) {
//           horseCh[nx][ny] = 1;
//           continue;
//         }

//         horseCh[nx][ny] = 1;
//         queue.push([nx, ny, step + 1, chance - 1]);
//       }
//     }
//   }

//   return false;
// }
