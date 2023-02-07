// Title: 양
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(""));
const map = {
  o: 0,
  v: 0,
};
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (input[x][y] !== "#") {
      const [type, cnt] = dfs(x, y);
      map[type] += cnt;
    }
  }
}

let result = "";
for (const key in map) {
  result += `${map[key]} `;
}
console.log(result);

function dfs(x, y) {
  let v = 0;
  let o = 0;
  const stack = [[x, y]];
  if (input[x][y] === "v") v++;
  if (input[x][y] === "o") o++;
  input[x][y] = "#";

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < n && 0 <= ny && ny < m && input[nx][ny] !== "#") {
        if (input[nx][ny] === "v") v++;
        if (input[nx][ny] === "o") o++;
        input[nx][ny] = "#";
        stack.push([nx, ny]);
      }
    }
  }

  return o > v ? ["o", o] : ["v", v];
}
