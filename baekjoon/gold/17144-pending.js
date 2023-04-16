let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [R, C, T] = input.shift();
const airCleanerPosition = [0, 0];
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

for (let x = 1; x < R; x++) {
  if (input[x][0] === -1) {
    airCleanerPosition[0] = x;
    airCleanerPosition[1] = x + 1;
    break;
  }
}

console.log(airCleanerPosition);

for (let i = 0; i < T; i++) {
  const dust = [];
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (input[x][y] > 0) dust.push([x, y]);
    }
  }

  diffusion(dust);
  cleanAir("top");
  //   cleanAir("bottom");

  return;
}

let result = 0;

function diffusion(dust) {
  while (dust.length) {
    let count = 0;
    const [x, y] = dust.shift();
    const amount = Math.floor(input[x][y] / 5);

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < R && 0 <= ny && ny < C && input[nx][ny] !== -1) {
        input[nx][ny] += amount;
        count++;
      }
    }

    input[x][y] = input[x][y] - amount * count;
  }
}

function cleanAir(direction) {
  if (direction === "top") rotateTop();
  //   if (direction === "bottom") rotateTop();
}

function rotateTop() {
  let temp = 0;
  for (let i = 1; i < y; i++) {
    const cur = mx[x][i];
    mx[x][i] = temp;
    temp = cur;
  }
}
