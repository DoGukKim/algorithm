// Title: 인구 이동
// Time: O(t*n^2)
// Space: O(tn^2)
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
  let isSwap = false;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      // 방문이 된  경우는 다른 연합에 이미 속해 있다.
      if (ch[x][y] === 0) {
        const [connected, population] = dfs(x, y, ch);

        if (connected.length) {
          isSwap = true;
          for (let i = 0; i < connected.length; i++) {
            const [x, y] = connected[i];
            input[x][y] = population;
          }
        }
      }
    }
  }

  if (!isSwap) return console.log(result);
  result++;
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
        if (abs < l || abs > r) continue;
        if (ch[x][y] === 0) {
          ch[x][y] = 1;
          sum += input[x][y];
          connected.push([x, y]);
        }

        if (ch[nx][ny] === 0) {
          ch[nx][ny] = 1;
          sum += input[nx][ny];
          connected.push([nx, ny]);
          stack.push([nx, ny]);
        }
      }
    }
  }

  return [connected, Math.floor(sum / connected.length)];
}
