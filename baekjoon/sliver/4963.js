// Title: 섬의 개수
// Time: O(t*nm)
// Space: O(t*nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
let testCasePointer = 0;
const dir = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];
let result = "";
while (input.length - 1 > testCasePointer) {
  const [m, n] = input[testCasePointer];
  const matrix = input.slice(testCasePointer + 1, testCasePointer + 1 + n);

  let cnt = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (matrix[x][y] === 1) {
        matrix[x][y] = 0;
        cnt++;
        dfs(x, y, matrix);
      }
    }
  }

  result += `${cnt}\n`;
  testCasePointer += n + 1;
}
console.log(result);

function dfs(x, y, matrix) {
  const stack = [[x, y]];

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 8; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < matrix.length &&
        0 <= ny &&
        ny < matrix[0].length &&
        matrix[nx][ny] === 1
      ) {
        matrix[nx][ny] = 0;
        stack.push([nx, ny]);
      }
    }
  }
}
