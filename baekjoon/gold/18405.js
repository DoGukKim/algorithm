// Title: 경쟁적 전염
// Time: O(n^2)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, _] = input.shift();
const mx = input.slice(0, n);
const [S, X, Y] = input[input.length - 1];

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const queue = [];
for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (mx[x][y] === 0) continue;
    queue.push([x, y, mx[x][y], 0]);
  }
}
queue.sort((a, b) => a[2] - b[2]);

while (queue.length) {
  const [x, y, v, sec] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = direction[i];
    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < n && 0 <= ny && ny < n && sec < S && mx[nx][ny] === 0) {
      mx[nx][ny] = v;
      queue.push([nx, ny, v, sec + 1]);
    }
  }
}

console.log(mx[X - 1][Y - 1]);
