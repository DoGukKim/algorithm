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
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const map = {
  W: 0,
  B: 0,
};

for (let x = 0; x < m; x++) {
  for (let y = 0; y < n; y++) {
    if (input[x][y] !== "D") {
      const { currentTeam, power } = dfs(x, y, input[x][y]);
      map[currentTeam] += power;
    }
  }
}

console.log(`${map["W"]} ${map["B"]}`);

function dfs(x, y, currentTeam) {
  input[x][y] = "D";
  const stack = [[x, y]];
  let count = 1;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < m &&
        0 <= ny &&
        ny < n &&
        input[nx][ny] === currentTeam
      ) {
        input[nx][ny] = "D";
        stack.push([nx, ny]);
        count++;
      }
    }
  }

  return { currentTeam, power: count ** 2 };
}
