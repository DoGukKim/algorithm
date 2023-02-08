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

// let queue = [];
// if (input[0][0] === 2) queue = [[0, 0, 0, true]];
// else queue = [[0, 0, 0, false]];
// input[0][0] = 3;

// while (queue.length) {
//   const [x, y, t, isHasGram] = queue.shift();
//   if (time - t === 0) return console.log("Fail");
//   if (x === n - 1 && y === m - 1) return console.log(t);

//   for (let i = 0; i < 4; i++) {
//     const [dx, dy] = dir[i];
//     const nx = x + dx;
//     const ny = y + dy;
//     if (0 <= nx && nx < n && 0 <= ny && ny < m && input[nx][ny] !== 3) {
//       if (input[nx][ny] === 2) {
//         console.log(time - (t + 1));
//         input[nx][ny] = 3;
//         queue.push([nx, ny, t + 1, true]);
//         continue;
//       }

//       if (isHasGram) {
//         input[nx][ny] = 3;
//         queue.push([nx, ny, t + 1, isHasGram]);
//         continue;
//       }

//       if (!isHasGram && input[nx][ny] === 0) {
//         input[nx][ny] = 3;
//         queue.push([nx, ny, t + 1, isHasGram]);
//       }
//     }
//   }
// }
