let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const ch = Array.from({ length: n }, () => Array(m).fill(0));
input = input.map((i) => i.split("").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const queue = [[0, 0, 1, 1]];
ch[0][0] = 1;
let index = 0;
while (queue.length > index) {
  const [x, y, s, c] = queue[index++];
  if (x === n - 1 && y === m - 1) return console.log(s);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < m && ch[nx][ny] === 0) {
      if (c === 0 && input[nx][ny] === 1) continue;
      if (input[nx][ny] === 0) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, s + 1, c]);
      } else if (c === 1 && input[nx][ny] === 1) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, s + 1, c - 1]);
      }
    }
  }

  queue.sort((a, b) => b[3] - a[3]);
}

console.log(-1);
