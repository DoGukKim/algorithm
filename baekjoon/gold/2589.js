// Title: 보물섬
// Time: O(nm^2)
// Space: O(nm^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(""));

let result = 0;
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (input[x][y] === "L") {
      bfs(x, y);
    }
  }
}
console.log(result);

function bfs(x, y) {
  const ch = Array.from({ length: n }, () => Array(m).fill(0));
  ch[x][y] = 1;
  const queue = [[x, y, 0]];

  let index = 0;
  while (queue.length > index) {
    const [x, y, dis] = queue[index++];

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        input[nx][ny] === "L" &&
        ch[nx][ny] === 0
      ) {
        if (result < dis + 1) result = dis + 1;
        ch[nx][ny] = 1;
        queue.push([nx, ny, dis + 1]);
      }
    }
  }
}
