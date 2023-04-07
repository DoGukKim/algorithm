// Title: 토마토
// Time: O(hnm)
// Space: O(hnm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [m, n, h] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));

const box = [];
let cnt = 1;
for (let i = 0; i < n * h; i += n) {
  box.push(input.slice(i, n * cnt));
  cnt++;
}

let rawTomato = 0;
const queue = [];
const direction = [
  [0, -1, 0],
  [0, 0, 1],
  [0, 1, 0],
  [0, 0, -1],
  [-1, 0, 0],
  [1, 0, 0],
];

for (let z = 0; z < h; z++) {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (box[z][x][y] === 1) queue.push([z, x, y, 0]);
      if (box[z][x][y] === 0) rawTomato++;
    }
  }
}

let index = 0;
let result = 0;
while (queue.length > index) {
  const [z, x, y, day] = queue[index++];

  for (let i = 0; i < 6; i++) {
    const [dz, dx, dy] = direction[i];
    const nz = z + dz;
    const nx = x + dx;
    const ny = y + dy;

    if (
      0 <= nz &&
      nz < h &&
      0 <= nx &&
      nx < n &&
      0 <= ny &&
      ny < m &&
      box[nz][nx][ny] === 0
    ) {
      rawTomato--;
      box[nz][nx][ny] = day + 1;
      result = day + 1;
      queue.push([nz, nx, ny, day + 1]);
    }
  }
}

console.log(rawTomato > 0 ? -1 : result);
