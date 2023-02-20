// 배열 돌리기(1)
// Time: O(r*(n+m*mod))
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m, r] = input.shift();

for (let i = 0; i < r; i++) {
  rotate();
}

let result = "";
for (let i = 0; i < n; i++) {
  result += `${input[i].join(" ")}\n`;
}
console.log(result);

function rotate() {
  const mod = Math.floor(Math.min(n, m) / 2);

  for (let count = 0; count < mod; count++) {
    let temp = input[count][count];

    for (let i = count; i < m - 1 - count; i++) {
      input[count][i] = input[count][i + 1];
    }

    for (let i = count; i < n - 1 - count; i++) {
      input[i][m - 1 - count] = input[i + 1][m - 1 - count];
    }

    for (let i = m - 1 - count; i > count; i--) {
      input[n - 1 - count][i] = input[n - 1 - count][i - 1];
    }

    for (let i = n - 1 - count; i > count; i--) {
      input[i][count] = input[i - 1][count];
    }

    input[count + 1][count] = temp;
  }
}
