// title: 회의실 배정
// time: O(n log n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input
  .slice(1)
  .map((i) => i.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

const current = input[0];
let result = 1;
for (let i = 1; i < n; i++) {
  const [s, e] = input[i];
  if (current[1] <= s) {
    current[0] = s;
    current[1] = e;
    result++;
  }
}
console.log(result);
