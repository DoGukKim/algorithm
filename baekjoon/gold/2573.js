// Title: 빙산
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let result = 0;
while (true) {
  const copy = Array.from({ length: n }, () => Array(m).fill(0));
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      copy[x][y] = input[x][y];
    }
  }

  melt(input, copy);
  input = copy;

  let count = 0;
  const ch = Array.from({ length: n }, () => Array(m).fill(0));
  for (let x = 1; x < n - 1; x++) {
    for (let y = 1; y < m - 1; y++) {
      if (input[x][y] > 0 && ch[x][y] === 0) {
        ch[x][y] = 1;
        dfs(x, y, input, ch);
        count++;
      }
    }
  }

  result++;
  if (count === 0) return console.log(0);
  if (count >= 2) return console.log(result);
}

function dfs(x, y, input, ch) {
  const stack = [[x, y]];

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;

      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        input[nx][ny] > 0 &&
        ch[nx][ny] === 0
      ) {
        ch[nx][ny] = 1;
        stack.push([nx, ny]);
      }
    }
  }
}

function melt(input, copy) {
  for (let x = 1; x < n - 1; x++) {
    for (let y = 1; y < m - 1; y++) {
      if (input[x][y] === 0) continue;

      for (let i = 0; i < 4; i++) {
        const [dx, dy] = direction[i];
        const nx = x + dx;
        const ny = y + dy;
        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          input[nx][ny] === 0 &&
          copy[x][y] > 0
        ) {
          copy[x][y] -= 1;
        }
      }
    }
  }
}
