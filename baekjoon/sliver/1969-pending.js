let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
input = input.slice(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    console.log(input[i][j]);
  }
}

console.log(input);
