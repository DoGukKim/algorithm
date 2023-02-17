// Title: 로봇 청소기
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
input.shift();
const [x, y, d] = input.shift();
const dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
const rotate = {
  0: [0, -1, 3],
  3: [1, 0, 2],
  2: [0, 1, 1],
  1: [-1, 0, 0],
};
const back = {
  0: [1, 0],
  3: [0, 1],
  2: [-1, 0],
  1: [0, -1],
};
let result = 0;
const stack = [[x, y, d]];
while (stack.length) {
  const [x, y, d] = stack.pop();
  if (input[x][y] === 0) {
    input[x][y] = 2;
    result++;
  }

  let flag = false;
  for (let i = 0; i < 4; i++) {
    const [dx, dy] = dir[i];
    const nx = x + dx;
    const ny = y + dy;
    if (input[nx][ny] === 0) flag = true;
  }

  if (flag) {
    const [dx, dy, dd] = rotate[d];
    const nx = x + dx;
    const ny = y + dy;
    if (input[nx][ny] === 0) stack.push([nx, ny, dd]);
    else stack.push([x, y, dd]);
  }

  if (!flag) {
    const [dx, dy] = back[d];
    const nx = x + dx;
    const ny = y + dy;
    if (input[nx][ny] === 1) break;
    else stack.push([nx, ny, d]);
  }
}

console.log(result);
