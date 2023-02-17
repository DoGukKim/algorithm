let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
// const [n, m, r] = input.shift();

dfs(0, m - 1, n, m);
function dfs(x, y, n, m) {
  if (n < 2 || m < 2) return;
  handleRotate(x, y);
  //   dfs(x + 1, y - 1, n - 2, m - 2);
}

function handleRotate(x, y) {
  let prev = 0;

  for (let i = y; i >= x; i--) {
    let temp = input[x][i];
    input[x][i] = prev;
    prev = temp;
  }

  for (let i = x + 1; i < n - x; i++) {
    let temp = input[i][x];
    input[i][x] = prev;
    prev = temp;
  }

  for (let i = x + 1; i <= y; i++) {
    let temp = input[n - 1 - x][i];
    input[n - 1 - x][i] = prev;
    prev = temp;
  }

  for (let i = n - 1 - x; i >= x; i++) {}

  console.log(prev);
  console.log(input);
}

const arr = [
  [1, 2],
  [3, 4],
];
const n = 2;
const m = 2;
let prev = 0;

for (let i = n - 1; i >= 0; i--) {
  let temp = arr[0][i];
  arr[0][i] = prev;
  prev = temp;
}

for (let i = 1; i < n; i++) {
  let temp = arr[i][0];
  arr[i][0] = prev;
  prev = temp;
}

for (let i = 1; i < m; i++) {
  let temp = arr[n - 1][i];
  arr[n - 1][i] = prev;
  prev = temp;
}

for (let i = n - 2; i >= 0; i--) {
  let temp = arr[i][m - 1];
  arr[i][m - 1] = prev;
  prev = temp;
}

console.log(prev, arr);
