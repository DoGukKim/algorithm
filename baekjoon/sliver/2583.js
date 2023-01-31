// Title: 영역 구하기
// Time: O(kmn)
// Space: O(mn)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [m, n, k] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const mx = Array.from({ length: m }, () => Array(n).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < k; i++) {
  const [ly, lx, ry, rx] = input[i];
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (lx <= x && x <= rx - 1 && ly <= y && y <= ry - 1) {
        mx[x][y] = 1;
      }
    }
  }
}

const all = [];
for (let x = 0; x < m; x++) {
  for (let y = 0; y < n; y++) {
    if (mx[x][y] === 0) {
      mx[x][y] = 2;
      const cnt = dfs(x, y);
      all.push(cnt);
    }
  }
}
all.sort((a, b) => a - b);

let result = "";
result += `${all.length} \n`;
for (let i = 0; i < all.length; i++) {
  result += `${all[i]} `;
}
console.log(result);

function dfs(x, y) {
  const stack = [[x, y]];
  let cnt = 1;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (0 <= nx && nx < m && 0 <= ny && ny < n && mx[nx][ny] === 0) {
        cnt++;
        mx[nx][ny] = 2;
        stack.push([nx, ny]);
      }
    }
  }

  return cnt;
}
