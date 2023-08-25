// title: 공
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const m = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

const table = Array.from({ length: 4 }, () => 0);
table[1] = 1;

for (let i = 0; i < m; i++) {
  const [x, y] = input[i];
  if (x === y) continue;

  if (y > 3) {
    console.log(-1);
    return;
  }

  [table[x], table[y]] = [table[y], table[x]];
}

console.log(table.indexOf(1));
