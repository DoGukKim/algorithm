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
  const ch2 = Array.from({ length: n }, () => Array(n).fill(0));
  ch[0][0] = 1;
  const [list, value] = dfs(0, 0, ch, ch2);

  for (let i = 0; i < list.length; i++) {
    const [x, y] = list[i];
    input[x][y] = value;
  }

  if (list.length === 0) return console.log(result);
  console.log(input, value);
  result++;
}

function dfs(x, y, ch, ch2) {
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
        const gap = Math.abs(input[x][y] - input[nx][ny]);
        if (l <= gap && gap <= r) {
          if (ch2[x][y] === 0) {
            ch2[x][y] = 1;
            sum += input[x][y];
            connected.push([x, y]);
          }

          if (ch2[nx][ny] === 0) {
            ch2[nx][ny] = 1;
            sum += input[nx][ny];
            connected.push([nx, ny]);
          }
        }

        if (ch[nx][ny] === 1) continue;
        ch[nx][ny] = 1;
        stack.push([nx, ny]);
      }
    }
  }

  return [connected, Math.floor(sum / connected.length)];
}
