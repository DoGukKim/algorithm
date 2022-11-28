// Title: 불!
// Time: O(rm)
// Space: O(rm)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [r, c] = input.shift().split(" ").map(Number);
const map = input.map((i) => i.split(""));
const dist1 = Array.from({ length: r }, () => Array(c).fill(-1));
const dist2 = Array.from({ length: r }, () => Array(c).fill(-1));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const q1 = [];
const q2 = [];

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (map[i][j] === "F") {
      q1.push([i, j]);
      dist1[i][j] = 0;
    }

    if (map[i][j] === "J") {
      q2.push([i, j]);
      dist2[i][j] = 0;
    }
  }
}

while (q1.length) {
  const [x, y] = q1.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const rowInBound = 0 <= nx && nx < r;
    const columInBound = 0 <= ny && ny < c;

    if (
      rowInBound &&
      columInBound &&
      map[nx][ny] !== "#" &&
      dist1[nx][ny] < 0
    ) {
      dist1[nx][ny] = dist1[x][y] + 1;
      q1.push([nx, ny]);
    }
  }
}

while (q2.length) {
  const [x, y] = q2.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const rowInBound = 0 <= nx && nx < r;
    const columInBound = 0 <= ny && ny < c;

    if (!rowInBound || !columInBound) {
      console.log(dist2[x][y] + 1);
      console.log(dist2);
      return;
    }
    if (map[nx][ny] === "#" || dist2[nx][ny] >= 0) continue;
    if (dist1[nx][ny] !== -1 && dist1[nx][ny] <= dist2[x][y] + 1) continue;

    dist2[nx][ny] = dist2[x][y] + 1;
    q2.push([nx, ny]);
  }
}

console.log("IMPOSSIBLE");
