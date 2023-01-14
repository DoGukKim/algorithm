// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const n = Number(input.shift());
// input = input.map((i) => i.split(" ").map(Number));

// const memo = {};
// function dfs(x, y) {
//   if (memo[[x, y]]) return memo[[x, y]];
//   if (x === n - 1 && y === n - 1) return 1;
//   if (x > n - 1 || y > n - 1) return 0;
//   memo[[x, y]] = dfs(x, y + input[x][y]) + dfs(x + input[x][y], y);
//   return memo[[x, y]];
// }

// dfs(0, 0);
// console.log(memo[[0, 0]]);
