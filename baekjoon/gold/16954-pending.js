let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(""));

const direction = [
  [0, 0], // 움직이지 않을 경우
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

const wall = [];
for (let x = 7; x >= 0; x--) {
  for (let y = 0; y < 8; y++) {
    if (input[x][y] === "#") wall.push([x, y]);
  }
}

let queue = [[7, 0]];
while (queue.length) {
  const [x, y] = queue.shift();
  if (x === 0 && y === 7) {
    console.log("1");
    return;
  }

  for (let i = 0; i < 9; i++) {
    const [dx, dy] = direction[i];
    const nx = x + dx;
    const ny = y + dy;

    if (0 <= nx && nx < 8 && 0 <= ny && ny < 8 && input[nx][ny] === ".") {
      queue.push([nx, ny]);
    }
  }

  const result = dropdownWall(queue);
  queue = result;
  console.log(queue);
}

console.log("0");

function dropdownWall(queue) {
  let len = wall.length;
  let newQueue = [];

  for (let i = 0; i < len; i++) {
    const [x, y] = wall.shift();

    if (x + 1 > 7) {
      input[x][y] = ".";
      continue;
    }

    const prev = input[x - 1]?.[y] ?? ".";
    input[x + 1][y] = "#";
    input[x][y] = prev;

    newQueue = queue.filter((i) => i[0] !== x + 1 && i[1] !== y);
  }

  return newQueue;
}
