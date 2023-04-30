// Title: 점프왕 젤리(Large)
// Time: O(n^2)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const n = input.shift()[0];
const ch = Array.from({ length: n }, () => Array(n).fill(0));
bfs();

function bfs() {
  const queue = [[0, 0]];
  ch[0][0] = 1;

  let index = 0;
  while (queue.length > index) {
    const [x, y] = queue[index++];
    if (input[x][y] === 0) continue;

    const direction = [
      [0, input[x][y]],
      [input[x][y], 0],
    ];

    for (let i = 0; i < 2; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < n && 0 <= ny && ny < n && ch[nx][ny] === 0) {
        if (input[nx][ny] === -1) return console.log("HaruHaru");

        ch[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }

  return console.log("Hing");
}
