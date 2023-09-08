// title: 덩치
// time: O(n^2)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input.slice(1).map((i) => i.split(" ").map(Number));

let result = "";

for (let i = 0; i < n; i++) {
  let currentRank = 1;
  const [x, y] = input[i];

  for (let j = 0; j < n; j++) {
    if (i !== j) {
      const [p, q] = input[j];
      if (x < p && y < q) currentRank++;
    }
  }

  result += `${currentRank} `;
}

console.log(result);
