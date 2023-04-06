// Title: 영역 구하기
// Time: O(kmn)
// Space: O(mn)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [m, n, k] = input.shift();
const paper = Array.from({ length: m }, () => Array(n).fill(0));
for (let i = 0; i < k; i++) {
  const [Ay, Ax, By, Bx] = input[i];
  paintSquare(Ax, Ay, Bx, By);
}

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const squares = [];
for (let x = 0; x < m; x++) {
  for (let y = 0; y < n; y++) {
    if (paper[x][y] === 0) {
      const count = dfs(x, y);
      squares.push(count);
    }
  }
}

squares.sort((a, b) => a - b);
let result = "";
result += `${squares.length}\n`;
for (let i = 0; i < squares.length; i++) {
  result += `${squares[i]} `;
}
console.log(result);

function dfs(x, y) {
  const stack = [[x, y]];
  let count = 1;
  paper[x][y] = 1;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < m && 0 <= ny && ny < n && paper[nx][ny] === 0) {
        paper[nx][ny] = 1;
        count++;
        stack.push([nx, ny]);
      }
    }
  }

  return count;
}

function paintSquare(Ax, Ay, Bx, By) {
  for (let x = Ax; x < Bx; x++) {
    for (let y = Ay; y < By; y++) {
      paper[x][y] = 1;
    }
  }
}
