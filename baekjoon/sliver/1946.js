// title: 신입사원
// time: O(t * n log n)
// space: O(t)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
for (let i = 1; i < input.length; i++) {
  const n = Number(input[i]);
  const sortedArr = input
    .slice(i + 1, n + i + 1)
    .map((item) => item.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  let count = 0;
  const min = [Infinity, Infinity];
  for (let j = 0; j < n; j++) {
    const [a, b] = sortedArr[j];
    if (min[0] > a || min[1] > b) {
      count++;
      min[0] = Math.min(min[0], a);
      min[1] = Math.min(min[1], b);
    }
  }

  result += `${count}\n`;
  i += n;
}

console.log(result);
