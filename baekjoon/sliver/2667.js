// Title: 단지번호붙이기
// Time: O(n^2)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split("").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const a = [];

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (input[x][y] === 1) {
      input[x][y] = 0;
      const count = dfs(x, y);
      a.push(count);
    }
  }
}

let result = `${a.length}\n`;
a.sort((a, b) => a - b);
for (let i = 0; i < a.length; i++) {
  result += `${a[i]}\n`;
}
console.log(result);

function dfs(x, y) {
  let cnt = 1;
  const stack = [[x, y]];

  while (stack.length) {
    const [cx, cy] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && input[nx][ny] === 1) {
        stack.push([nx, ny]);
        input[nx][ny] = 0;
        cnt++;
      }
    }
  }

  return cnt;
}
