// Title: 나이트의 이동
// Time: O(ve)
// Space: O(l^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const dir = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, -1],
  [2, 1],
  [-1, -2],
  [1, -2],
];

let result = "";
for (let i = 1; i < input.length; i += 3) {
  const l = Number(input[i]);
  const board = Array.from({ length: l }, () => Array(l).fill(0));
  const cur = input[i + 1].split(" ").map(Number);
  const goal = input[i + 2].split(" ").map(Number);
  const queue = [[cur[0], cur[1], 0]];
  board[cur[0]][cur[1]] = 1;
  while (queue.length) {
    const [x, y, dist] = queue.shift();
    if (x === goal[0] && y === goal[1]) {
      result += `${dist}\n`;
      break;
    }

    for (let i = 0; i < 8; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < l && 0 <= ny && ny < l && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
}

console.log(result);
