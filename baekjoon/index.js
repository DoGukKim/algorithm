let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const some = input[0].split(" ").map(Number);
const some1 = Number(input[1]);
const some2 = input.slice(2).map(Number);
