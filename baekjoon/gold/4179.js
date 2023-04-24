// Title: 불!
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [r, c] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(""));

const fireMx = Array.from({ length: r }, () => Array(c).fill(-1));
const humanMx = Array.from({ length: r }, () => Array(c).fill(-1));
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const fireQueue = [];
const humanQueue = [];

for (let x = 0; x < r; x++) {
  for (let y = 0; y < c; y++) {
    if (input[x][y] === "F") {
      fireQueue.push([x, y]);
      fireMx[x][y] = 0;
    }

    if (input[x][y] === "J") {
      humanQueue.push([x, y]);
      humanMx[x][y] = 0;
    }
  }
}

while (fireQueue.length) {
  const [x, y] = fireQueue.shift();

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = direction[i];
    const nx = x + dx;
    const ny = y + dy;

    if (
      0 <= nx &&
      nx < r &&
      0 <= ny &&
      ny < c &&
      input[nx][ny] !== "#" &&
      fireMx[nx][ny] < 0
    ) {
      fireMx[nx][ny] = fireMx[x][y] + 1;
      fireQueue.push([nx, ny]);
    }
  }
}

while (humanQueue.length) {
  const [x, y] = humanQueue.shift();

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = direction[i];
    const nx = x + dx;
    const ny = y + dy;
    const rowInBound = 0 <= nx && nx < r;
    const columInBound = 0 <= ny && ny < c;

    if (!rowInBound || !columInBound) {
      console.log(humanMx[x][y] + 1);
      return;
    }
    if (input[nx][ny] === "#" || humanMx[nx][ny] >= 0) continue;
    if (fireMx[nx][ny] !== -1 && fireMx[nx][ny] <= humanMx[x][y] + 1) continue;

    humanMx[nx][ny] = humanMx[x][y] + 1;
    humanQueue.push([nx, ny]);
  }
}

console.log("IMPOSSIBLE");
