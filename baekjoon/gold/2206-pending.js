let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split("").map(Number));

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const queue = [[0, 0, 1, true]];
const ch = Array.from({ length: n }, () => Array(m).fill(0));
let result = -1;
bfs();
console.log(result);

function bfs() {
  while (queue.length) {
    const [x, y, count, hasChance] = queue.shift();
    ch[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < n && 0 <= ny && ny < m && ch[nx][ny] === 0) {
        if (nx === n - 1 && ny === m - 1) {
          result = count + 1;
          break;
        }
        if (!hasChance && input[nx][ny] === 1) continue;

        if (hasChance && input[nx][ny] === 1) {
          queue.push([nx, ny, count + 1, false]);
        }

        if (input[nx][ny] === 0) {
          queue.unshift([nx, ny, count + 1, hasChance]);
        }
      }
    }
  }
}
