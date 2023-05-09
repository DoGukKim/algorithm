let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [r, c] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(""));

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const queue = [];
const water = [];
for (let x = 0; x < r; x++) {
  for (let y = 0; y < c; y++) {
    if (input[x][y] === "S") queue.push([x, y, 0]);
    if (input[x][y] === "*") water.push([x, y]);
  }
}

const result = bfs();
console.log(result);

function bfs() {
  while (queue.length) {
    const [x, y, time] = queue.shift();

    flooding();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < r &&
        0 <= ny &&
        ny < c &&
        (input[nx][ny] === "." || input[nx][ny] === "D")
      ) {
        if (input[nx][ny] === "D") return time + 1;
        input[nx][ny] = "S";
        queue.push([nx, ny, time + 1]);
      }
    }
  }

  return "KAKTUS";
}

function flooding() {
  let len = water.length;
  for (let i = 0; i < len; i++) {
    const [x, y] = water[i];

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < r && 0 <= ny && ny < c && input[nx][ny] === ".") {
        input[nx][ny] = "*";
        water.push([nx, ny]);
      }
    }
  }
}
