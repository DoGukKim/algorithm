// Title: 적록색약
// Time: O(n^2)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(""));

let normal = 0;
let notNormal = 0;
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const normalCh = Array.from({ length: n }, () => Array(n).fill(0));
const notNormalCh = Array.from({ length: n }, () => Array(n).fill(0));

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (normalCh[x][y] === 0) {
      normal++;
      normalDFS(x, y, input[x][y]);
    }

    if (notNormalCh[x][y] === 0) {
      notNormal++;
      notNormalDFS(x, y, input[x][y]);
    }
  }
}

console.log(`${normal} ${notNormal}`);

function normalDFS(x, y, color) {
  const stack = [[x, y]];
  normalCh[x][y] = 1;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < n &&
        input[nx][ny] === color &&
        normalCh[nx][ny] === 0
      ) {
        normalCh[nx][ny] = 1;
        stack.push([nx, ny]);
      }
    }
  }
}

function notNormalDFS(x, y, color) {
  const stack = [[x, y]];
  notNormalCh[x][y] = 1;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < n && 0 <= ny && ny < n && notNormalCh[nx][ny] === 0) {
        if (color === "R" && input[nx][ny] === "G") {
          notNormalCh[nx][ny] = 1;
          stack.push([nx, ny]);
          continue;
        }

        if (color === "G" && input[nx][ny] === "R") {
          notNormalCh[nx][ny] = 1;
          stack.push([nx, ny]);
          continue;
        }

        if (color === input[nx][ny]) {
          notNormalCh[nx][ny] = 1;
          stack.push([nx, ny]);
        }
      }
    }
  }
}
