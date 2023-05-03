let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(""));

const direction = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

input[7][0] = "C";
const walls = [];
for (let x = 7; x >= 0; x--) {
  for (let y = 0; y < 8; y++) {
    if (input[x][y] === "#") walls.push([x, y]);
  }
}

let prevCharPosition = [[7, 0]];

while (true) {
  // c moving
  const curCharPosition = prevCharPosition;
  const [goal, arr] = move(curCharPosition);
  if (goal) return console.log("1");
  prevCharPosition = arr;

  // wall moving
  const isDead = dropWalls();
  console.log(input.map((i) => i.join("")));
  if (isDead) return console.log("0");
}

function move(position, arr = []) {
  while (position.length) {
    const [x, y] = position.shift();

    for (let i = 0; i < 8; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < 8 && 0 <= ny && ny < 8 && input[nx][ny] === ".") {
        if (nx === 7 && ny === 7) return [true, arr];
        input[nx][ny] = "V";
        arr.push([nx, ny]);
      }
    }
  }

  return [false, arr];
}

function dropWalls() {
  let len = walls.length;
  for (let i = 0; i < len; i++) {
    const [x, y] = walls.shift();
    const nx = x + 1;
    if (input[nx][y] === "C") {
      return true;
    }

    if (nx > 7) {
      input[x][y] = ".";
      continue;
    }

    const prev = input[x - 1][y];
    input[nx][y] = "#";
    input[x][y] = prev;
    walls.push([nx, y]);
  }

  return false;
}
