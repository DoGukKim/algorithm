// Title: 양 한마리... 양 두마리...
// Time: O(hw)
// Space: O(hw)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const t = Number(input[0]);
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = "";
let pointer = 1;
for (let i = 0; i < t; i++) {
  let count = 0;
  const [h, w] = input[pointer].split(" ").map(Number);
  const mx = input.slice(pointer + 1, pointer + h + 1).map((i) => i.split(""));

  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      if (mx[x][y] === "#") {
        count++;
        dfs(x, y, h, w, mx);
      }
    }
  }

  result += `${count}\n`;
  pointer += h + 1;
}

console.log(result);

function dfs(x, y, h, w, mx) {
  const stack = [[x, y]];
  mx[x][y] = ".";

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < h && 0 <= ny && ny < w && mx[nx][ny] === "#") {
        mx[nx][ny] = ".";
        stack.push([nx, ny]);
      }
    }
  }
}
