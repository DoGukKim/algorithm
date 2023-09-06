let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const [A, B] = input.split(" ").map(Number);

let k = 1;
let result = 0;
for (let i = 1; i <= 1000; i++) {
  for (let j = 0; j < i; j++) {
    if (k >= A && k <= B) result += i;
  }

  k++;
}
