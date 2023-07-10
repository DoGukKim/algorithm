// title: 두 용액
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let lt = 0;
let rt = n - 1;
let min = Infinity;
const map = new Map();

while (lt < rt) {
  const sum = input[lt] + input[rt];
  if (sum === 0) return console.log(`${input[lt]} ${input[rt]}`);

  min = Math.min(min, Math.abs(sum));
  if (!map.has(min)) map.set(min, [input[lt], input[rt]]);

  if (sum > 0) {
    rt--;
  }

  if (sum < 0) {
    lt++;
  }
}

const [l, r] = map.get(min);
console.log(`${l} ${r}`);
