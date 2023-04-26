// Title: 침투
// Time: O(mn)
// Space: O(mn)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [m, n] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split("").map(Number));
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = "NO";
for (let x = 0; x < 1; x++) {
  for (let y = 0; y < n; y++) {
    if (input[x][y] === 0) {
      dfs(x, y);
    }
  }
}

console.log(result);

function dfs(x, y) {
  const stack = [[x, y]];
  input[x][y] = 1;

  while (stack.length) {
    const [x, y] = stack.pop();
    if (x === m - 1) {
      result = "YES";
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < m && 0 <= ny && ny < n && input[nx][ny] === 0) {
        input[nx][ny] = 1;
        stack.push([nx, ny]);
      }
    }
  }
}
