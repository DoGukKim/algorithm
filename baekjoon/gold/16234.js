// Title: 인구 이동
// Time: O(n^4)
// Space: O(n^4)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [N, L, R] = input.shift();
let result = 0;
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (true) {
  const ch = Array.from({ length: N }, () => Array(N).fill(0));
  let isSwap = false;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (ch[x][y] === 0) {
        const [unite, populationOfUnite] = dfs(x, y, ch);

        if (unite.length) {
          drawPopulation(unite, populationOfUnite);
          isSwap = true;
        }
      }
    }
  }

  if (!isSwap) return console.log(result);
  result++;
}

function dfs(x, y, ch) {
  const stack = [[x, y]];
  const unite = []; // 행렬 갱신을 위해선 연합 좌표를 얻어야 한다.
  let populationSum = 0;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        const gap = Math.abs(input[x][y] - input[nx][ny]);
        if (gap < L || gap > R) continue;
        if (ch[x][y] === 0) {
          ch[x][y] = 1;
          populationSum += input[x][y];
          unite.push([x, y]);
        }

        if (ch[nx][ny] === 0) {
          ch[nx][ny] = 1;
          populationSum += input[nx][ny];
          unite.push([nx, ny]);
          stack.push([nx, ny]);
        }
      }
    }
  }

  return [unite, Math.floor(populationSum / unite.length)];
}

function drawPopulation(unite, populationOfUnite) {
  for (let i = 0; i < unite.length; i++) {
    const [x, y] = unite[i];
    input[x][y] = populationOfUnite;
  }
}
