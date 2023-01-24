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

const queue = [[0, 0, 0, 1]];
ch[0][0] = 1;
while (queue.length) {
  const [x, y, s, c] = queue.shift();
  if (x === n - 1 && y === m - 1) return console.log(s + 1);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < m && ch[nx][ny] === 0) {
      if (input[nx][ny] === 1 && c === 1) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, s + 1, c - 1]);
        input[nx][ny] = 0;
      } else if (input[nx][ny] === 0) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, s + 1, c]);
      }
    }
  }
}

console.log(-1);
