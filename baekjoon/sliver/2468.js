// Title: 안전 영역
// Time: O(n^2)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let result = 1;
for (let i = 1; i <= 100; i++) {
  const ch = Array.from({ length: n }, () => Array(n).fill(0));
  let cnt = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (ch[x][y] === 0 && input[x][y] > i) {
        cnt++;
        ch[x][y] = 1;
        dfs(x, y, i, ch);
      }
    }
  }

  if (result < cnt) result = cnt;
}
console.log(result);

function dfs(x, y, rain, ch) {
  const stack = [[x, y]];

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < n &&
        ch[nx][ny] === 0 &&
        input[nx][ny] > rain
      ) {
        ch[nx][ny] = 1;
        stack.push([nx, ny]);
      }
    }
  }
}
