let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((i) => i.split(" ").map(Number));
const [n, s] = input.shift();
input = input[0];
console.log(input.reduce((a, c) => a + c, 0));
