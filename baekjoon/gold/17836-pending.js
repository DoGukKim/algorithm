let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m, t] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const ch = Array.from({ length: n }, () => Array(m).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let queue = [[0, 0, 0, false, t]];
if (input[0][0] === 2) queue = [[0, 0, 0, true, t]];
ch[0][0] = 1;
let index = 0;

while (queue.length > index) {
  const [x, y, dis, has, time] = queue[index++];
  if (x === n - 1 && y === m - 1) return console.log(dis);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      0 <= nx &&
      nx < n &&
      0 <= ny &&
      ny < m &&
      ch[nx][ny] === 0 &&
      time - 1 > 0
    ) {
      if (has) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, dis + 1, has, time - 1]);
        continue;
      }

      if (input[nx][ny] === 2) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, dis + 1, true, time - 1]);
        continue;
      }

      if (input[nx][ny] === 0) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, dis + 1, has, time - 1]);
      }
    }
  }
}

console.log("Fail");
