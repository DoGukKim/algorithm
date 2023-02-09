let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, l, r] = input.shift();
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = 0;
while (true) {
  const ch = Array.from({ length: n }, () => Array(n).fill(0));
  const all = [];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (ch[x][y] === 0) {
        dfs(x, y, ch);
      }
    }
  }

  return;
}

function dfs(x, y, ch) {
  const stack = [[x, y]];
  const connected = [];
  let sum = 0;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        const abs = Math.abs(input[x][y] - input[nx][ny]);
        // if (l <= abs && abs <= r) {
        // }
      }
    }
  }
}
