// Title: 벽 부수고 이동하기
// Time: O(nm)
// Space: O(nm^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split("").map(Number));

const ch = Array.from({ length: 2 }, () =>
  Array.from({ length: n }, () => Array(m).fill(0))
);

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

ch[0][0][0] = 1;
ch[1][0][0] = 1;
// x, y, 벽을 부수지 않았다면 0 벽을 부쉈다면 1
const queue = [[0, 0, 0]];
let index = 0;
while (queue.length > index) {
  const [isBreak, x, y] = queue[index++];

  if (x === n - 1 && y === m - 1) {
    console.log(ch[isBreak][x][y]);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = direction[i];
    const nx = x + dx;
    const ny = y + dy;

    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (input[nx][ny] === 0 && ch[isBreak][nx][ny] === 0) {
        ch[isBreak][nx][ny] = ch[isBreak][x][y] + 1;
        queue.push([isBreak, nx, ny]);
      }

      if (input[nx][ny] === 1 && ch[isBreak][nx][ny] === 0) {
        if (isBreak === 1) continue; // 다음이 벽이고 벽을 이미 부쉈다면
        if (isBreak === 0) {
          ch[1][nx][ny] = ch[0][x][y] + 1;
          queue.push([1, nx, ny]);
        }
      }
    }
  }
}

console.log("-1");
