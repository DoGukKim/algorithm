let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
let k = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const [w, h] = input.shift();
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const nightDirection = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

const queue = [[0, 0, 0]];
input[0][0] = 3;
if (k > 0) {
  while (k && queue.length) {
    const [x, y, dis] = queue.shift();
    if (x === h - 1 && y === w - 1) {
      console.log(dis);
      return;
    }

    for (let i = 0; i < 8; i++) {
      const [dx, dy] = nightDirection[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < h && 0 <= ny && ny < w && input[nx][ny] === 0) {
        input[nx][ny] = 3;
        queue.push([nx, ny, dis + 1]);
      }
    }
    k--;
  }
}

if (queue.length) {
  let index = 0;

  while (queue.length > index) {
    const [x, y, dis] = queue[index++];
    if (x === h - 1 && y === w - 1) {
      console.log(dis);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < h && 0 <= ny && ny < w && input[nx][ny] === 0) {
        input[nx][ny] = 3;
        queue.push([nx, ny, dis + 1]);
      }
    }
  }
}

if (!queue.length) {
  const queue = [[0, 0, 0]];
  let index = 0;
  while (queue.length > index) {
    const [x, y, dis] = queue[index++];
    if (x === h - 1 && y === w - 1) {
      console.log(dis);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < h && 0 <= ny && ny < w && input[nx][ny] === 0) {
        input[nx][ny] = 3;
        queue.push([nx, ny, dis + 1]);
      }
    }
  }
}

console.log("-1");
