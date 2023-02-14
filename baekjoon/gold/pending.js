let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
let [n, m, t] = input.shift();
let result = 0;
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (t--) {
  const airCleanerPos = [];
  const stack = [];
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (input[x][y] === -1) airCleanerPos.push(x);
      if (input[x][y] > 0) stack.push([x, y]);
    }
  }

  while (stack.length) {
    const [x, y] = stack.pop();
    let cnt = 0;
    const some = Math.floor(input[x][y] / 5);

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < n && 0 <= ny && ny < m && input[nx][ny] !== -1) {
        input[nx][ny] += some;
        cnt++;
      }
    }

    input[x][y] -= some * cnt;
  }
}

console.log(input.map((i) => i.join(" ")));
