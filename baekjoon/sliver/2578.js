// Title: 빙고
// Time: O(1)
// Space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const board = input.slice(0, 5);
const numbers = input.slice(5, 10).flat();
const map = {};
const ch = Array.from({ length: 5 }, () => Array(5).fill(0));

for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    map[board[x][y]] = [x, y];
  }
}

for (let i = 0; i < 25; i++) {
  const [x, y] = map[numbers[i]];
  ch[x][y] = 1;

  const count = check();
  if (count >= 3) {
    console.log(i + 1);
    return;
  }
}

function check() {
  let count = 0;
  let leftCross = 0;
  let rightCross = 0;

  for (let x = 0; x < 5; x++) {
    let row = 0;
    let colum = 0;

    for (let y = 0; y < 5; y++) {
      if (ch[x][y] === 1) row++;
      if (ch[y][x] === 1) colum++;
    }

    if (ch[x][x] === 1) leftCross++;
    if (ch[x][4 - x] === 1) rightCross++;
    if (row === 5) count++;
    if (colum === 5) count++;
  }

  if (leftCross === 5) count++;
  if (rightCross === 5) count++;

  return count;
}
