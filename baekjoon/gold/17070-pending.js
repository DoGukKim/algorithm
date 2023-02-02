let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const n = input.shift();
let result = 0;
dfs([0, 0], [0, 1], 0);
console.log(result);
function dfs(l, r) {
  const [Ax, Ay] = l;
  const [Bx, By] = r;

  if (Ax > n - 1 || Ay > n - 1) return;
  if (Bx > n - 1 || By > n - 1) return;
  if (Bx === n - 1 && By === n - 1) {
    result++;
    return;
  }

  // 현재 가로인 경우
  if (Ax === Bx && Math.abs(Ay - By) === 1) {
    if (input[Bx]?.[By + 1] === 0) dfs([Ax, Ay + 1], [Bx, By + 1]); // 가로
    if (
      input[Bx + 1]?.[By] === 0 &&
      input[Bx + 1]?.[By + 1] === 0 &&
      input[Bx]?.[By + 1] === 0
    )
      dfs([Ax, Ay + 1], [Bx + 1, By + 1]); // 대각선
  }

  // 현재 세로인 경우
  if (Ay === By && Math.abs(Ax - Bx) === 1) {
    if (input[Bx + 1]?.[By] === 0) dfs([Ax + 1, Ay], [Bx + 1, By]); // 아래
    if (
      input[Bx + 1]?.[By] === 0 &&
      input[Bx + 1]?.[By + 1] === 0 &&
      input[Bx]?.[By + 1] === 0
    )
      dfs([Ax + 1, Ay], [Bx + 1, By + 1]); // 대각
  }

  // 현재 대각선인 경우
  if (Math.abs(Ax - Bx) === 1 && Math.abs(Ay - By) === 1) {
    if (input[Bx]?.[By + 1] === 0) dfs([Ax + 1, Ay + 1], [Bx, By + 1]); // 가로
    if (input[Bx + 1]?.[By] === 0) dfs([Ax + 1, Ay + 1], [Bx + 1, By]); // 아래
    if (
      input[Bx + 1]?.[By] === 0 &&
      input[Bx + 1]?.[By + 1] === 0 &&
      input[Bx]?.[By + 1] === 0
    )
      dfs([Ax + 1, Ay + 1], [Bx + 1, By + 1]); // 대각선
  }
}
