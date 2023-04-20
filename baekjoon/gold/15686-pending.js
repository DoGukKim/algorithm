let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
const mx = Array.from({ length: n }, () => Array(n).fill(0));
let result = Infinity;
