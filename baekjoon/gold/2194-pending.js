let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m, a, b, k] = input.shift();
const hurdle = input.slice(0, k);
const [sx, sy] = input[k];
const [ex, ey] = input[k];

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const ch = Array.from({ length: n }, () => Array(m).fill(0));
for (let i = 0; i < hurdle.length; i++) {
  const [x, y] = hurdle[i];
  ch[x - 1][y - 1] = 1;
}

const queue = [[sx, sy, 0]];
ch[sx][sy] = 1;
while (queue.length) {
  const [x, y, dis] = queue.shift();

  if (x === ex && y === ey) {
    return console.log(dis);
  }

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = direction[i];
    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < n && 0 <= ny && ny < m && ch[nx][ny] === 0) {
      const isTrue = check(nx, ny);
      if (!isTrue) continue;
    }
  }
}

console.log("-1");

function check(nx, ny) {
  for (let x = nx; x >= nx - (a - 1); x--) {
    for (let y = ny; y >= ny - (b - 1); y--) {
      if (ch[x][y] === 1) return false;
    }
  }

  return true;
}
