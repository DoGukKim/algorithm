let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);
const cards = Array.from({ length: input }, (_, i) => i + 1);
