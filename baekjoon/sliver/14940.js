// Title: 쉬운 최단거리
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const ch = Array.from({ length: n }, () => Array(m).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const queue = [];
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (input[x][y] === 2) {
      queue.push([x, y, 0]);
      ch[x][y] = 1;
      input[x][y] = 0;
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
    if (
      0 <= nx &&
      nx < n &&
      0 <= ny &&
      ny < m &&
      ch[nx][ny] === 0 &&
      input[nx][ny] === 1
    ) {
      ch[nx][ny] = 1;
      input[nx][ny] = dis + 1;
      queue.push([nx, ny, dis + 1]);
    }
  }
}

let result = "";
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (input[x][y] === 1 && ch[x][y] === 0) {
      result += `-1 `;
      continue;
    }

    result += `${input[x][y]} `;
  }

  result += "\n";
}
console.log(result);
