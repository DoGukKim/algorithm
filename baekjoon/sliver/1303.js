// Title: 전쟁 - 전투
// Time: O(mn)
// Space: O(mn)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(""));
const map = {
  W: 0,
  B: 0,
};
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
for (let x = 0; x < m; x++) {
  for (let y = 0; y < n; y++) {
    if (input[x][y] !== "C") {
      const team = input[x][y];
      input[x][y] = "C";
      const power = dfs(x, y, team);
      map[team] += power;
    }
  }
}

let result = "";
for (const key in map) {
  result += `${map[key]} `;
}
console.log(result);

function dfs(x, y, team) {
  const stack = [[x, y, team]];
  let cnt = 1;

  while (stack.length) {
    const [x, y, team] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < m && 0 <= ny && ny < n && input[nx][ny] === team) {
        input[nx][ny] = "C";
        cnt++;
        stack.push([nx, ny, team]);
      }
    }
  }

  return cnt ** 2;
}
