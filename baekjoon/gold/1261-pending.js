let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [m, n] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split("").map(Number));

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = Infinity;
const queue = [[0, 0, 0]];
while (queue.length) {
  const [x, y, cnt] = queue.shift();
  if (x === n - 1 && y === m - 1) {
    if (cnt < result) result = cnt;
    continue;
  }

  input[x][y] = 2;

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = dir[i];
    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < n && 0 <= ny && ny < m && input[nx][ny] !== 2) {
      if (input[nx][ny] === 1) {
        queue.push([nx, ny, cnt + 1]);
        continue;
      }

      queue.push([nx, ny, cnt]);
    }
  }
}

console.log(result);
