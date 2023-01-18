let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [h, w] = input.shift().split(" ").map(Number);
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

let result = 0;

for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    const [r1, c1] = input[i];
    const [r2, c2] = input[j];
    if (
      (h - r1 - r2 >= 0 && w - c1 >= 0 && w - c2 >= 0) ||
      (w - c1 - c2 >= 0 && h - r1 >= 0 && h - r2 >= 0)
    ) {
      const max = r1 * c1 + r2 * c2;
      console.log(max);
      if (result < max) result = max;
    }
  }
}

console.log(result);
