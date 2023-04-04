// Title: 토마토
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [m, n] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
let rawTomato = 0;
const queue = [];
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (input[x][y] === 1) queue.push([x, y, 0]);
    if (input[x][y] === 0) rawTomato++;
  }
}

let result = 0;
let index = 0;
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (queue.length > index) {
  const [x, y, day] = queue[index++];
  result = day;

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = dir[i];
    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < n && 0 <= ny && ny < m && input[nx][ny] === 0) {
      input[nx][ny] = day + 1;
      queue.push([nx, ny, day + 1]);
      rawTomato--;
    }
  }
}

console.log(rawTomato > 0 ? -1 : result);
