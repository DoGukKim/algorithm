const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const format = input.map((day) => day.split(" ").map((item) => Number(item)));
console.log(format);

const main = (n) => {};

console.log(main(format));
