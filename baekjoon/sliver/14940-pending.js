let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const board = Array.from({ length: n }, () => Array(m).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const queue = [];
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (input[x][y] === 2) {
      queue.push([x, y, 0]);
      break;
    }
  }
}

let index = 0;
while (queue.length > index) {
  const [x, y, dis] = queue[index++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
    }
  }
}

let result = "";
for (let i = 0; i < n; i++) {
  result += `${board[i].join(" ")}\n`;
}
console.log(result);
