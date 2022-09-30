const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");
const map = input.map((v) => v.split("").map((v) => Number(v)));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const stack = [[0, 0, 1]];

while (stack.length) {
  const [x, y, dis] = stack.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];

    if (0 <= nx && ny > -1 && nx < m && ny < n) {
      if (map[ny][nx] === 1) {
        map[ny][nx] = dis + 1;
        stack.push([nx, ny, dis + 1]);
      }
    }
  }
}

console.log(map[n - 1][m - 1]);

// 시간초과
// let result = Infinity;
// const visited = new Set();

// function dfs(r, c, step) {
//   const rowOutBound = r < 0 || r > map.length - 1;
//   const columOutBound = c < 0 || c > map[0].length - 1;
//   if (rowOutBound || columOutBound) return;
//   if (map[r][c] === 0) return;

//   const pos = r + "," + c;
//   if (visited.has(pos)) return false;

//   if (r === Number(n - 1) && c === Number(m - 1)) {
//     if (step < result) result = step;
//     return;
//   }

//   visited.add(pos);
//   dfs(r - 1, c, step + 1);
//   dfs(r, c + 1, step + 1);
//   dfs(r + 1, c, step + 1);
//   dfs(r, c - 1, step + 1);
//   visited.delete(pos);
// }
// dfs(0, 0, 1);

// console.log(result);

// 시간초과
// const dir = [
//   [0, 1],
//   [0, -1],
//   [1, 0],
//   [-1, 0],
// ];

// let result = Infinity;

// function dfs(r, c, dis) {
//   if (r === Number(n - 1) && c === Number(m - 1)) {
//     if (dis < result) result = dis;
//     return;
//   }

//   for (let i = 0; i < 4; i++) {
//     const nx = r + dir[i][0];
//     const ny = c + dir[i][1];

//     if (nx >= 0 && nx <= n - 1 && ny >= 0 && ny <= m - 1 && map[nx][ny] === 1) {
//       map[nx][ny] = 0;
//       dfs(nx, ny, dis + 1);
//       map[nx][ny] = 1;
//     }
//   }
// }

// map[0][0] = 1;
// dfs(0, 0, 1);

// console.log(result);
