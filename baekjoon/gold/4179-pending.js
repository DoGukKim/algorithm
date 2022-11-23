const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [r, c] = input.shift().split(" ");
const map = input.map((i) => i.split(""));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let result = 0;
const q1 = [];
const q2 = [];

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (map[i][j] === "J") q1.push([i, j]);
    if (map[i][j] === "F") q2.push([i, j]);
  }
}

while (q1.length && q2.length) {
  const [ji, jj] = q1.shift();
  const [fi, fj] = q2.shift();

  for (let i = 0; i < 4; i++) {
    const njx = ji + dx[i];
    const njy = jj + dy[i];
    const nfx = fi + dx[i];
    const nfy = fj + dy[i];

    const rowInBound = 0 <= njx && njx < r;
    const columInBound = 0 <= njy && njy < c;
    if (rowInBound && columInBound && map[njx][njy] === ".") {
      map[njx][njy] = "J";
      q1.push([njx, njy]);
      map[ji][jj] = ".";
    } else if (!rowInBound || !columInBound) {
      break;
    }

    const frowInBound = 0 <= njx && njx < r;
    const fcolumInBound = 0 <= njy && njy < c;
    if (frowInBound && fcolumInBound && map[nfx][nfy] === ".") {
      map[nfx][nfy] = "F";
      q2.push([nfx, nfy]);
    }
  }
  result++;
}

console.log(result);
