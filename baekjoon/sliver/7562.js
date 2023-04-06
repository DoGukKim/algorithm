// Title: 나이트의 이동
// Time: O(nm)
// Space: O(l^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const direction = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

let result = "";
for (let i = 1; i < input.length; i += 3) {
  const current = input[i + 1].split(" ").map(Number);
  const destination = input[i + 2].split(" ").map(Number);
  const distance = bfs(Number(input[i]), current, destination);
  result += `${distance}\n`;
}
console.log(result);

function bfs(size, current, destination) {
  const queue = [[current[0], current[1], 0]];
  const board = Array.from({ length: size }, () => Array(size).fill(0));
  board[current[0]][current[1]] = 1;

  while (queue.length) {
    const [x, y, dis] = queue.shift();

    for (let i = 0; i < 8; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < size && 0 <= ny && ny < size && board[nx][ny] === 0) {
        if (nx === destination[0] && ny === destination[1]) return dis + 1;
        board[nx][ny] = 1;
        queue.push([nx, ny, dis + 1]);
      }
    }
  }

  return 0;
}
