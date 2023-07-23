let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, d, k, c] = input[0].split(" ").map(Number);
input = input.slice(1).map(Number);

let lt = 0;
let rt = 0;
const map = new Map();
let result = 0;

while (rt < n) {
  map.set(input[rt], (map.get(input[rt]) || 0) + 1);
  result = Math.max(result, map.size);
  rt++;

  while (rt - lt > k - 1) {
    if (map.get(input[lt]) - 1 <= 0) {
      map.delete(input[lt]);
    } else {
      map.set(input[lt], map.get(input[lt]) - 1);
    }

    lt++;
  }
}

if (!map.has(c)) {
  result++;
}

console.log(result);
