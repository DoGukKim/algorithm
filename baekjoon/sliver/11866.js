// Title: 올바른 괄호
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
const [n, k] = input.split(" ").map(Number);
const queue = Array.from({ length: n }, (_, i) => i + 1);
let result = [];
while (queue.length) {
  for (let i = 0; i < k - 1; i++) queue.push(queue.shift());

  result.push(queue.shift());
}

console.log(`<${result.join(", ")}>`);
