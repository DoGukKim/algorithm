const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");
const map = input.map((v) => v.split("").map((v) => Number(v)));
