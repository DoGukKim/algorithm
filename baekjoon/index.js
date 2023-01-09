let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
input = input.map(Number);
const dp = Array.from({ length: 10001 }, () => 0);
