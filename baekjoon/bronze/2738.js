// Title: 행렬 덧셈
// Time: O(n*m)
// Space: O(n*m)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line.toString());
}).on("close", function () {
  let [n, m] = input
    .shift()
    .split(" ")
    .map((i) => Number(i));
  const l = input.map((i) => i.split(" ").map((s) => Number(s)));
  const k = Array.from({ length: n }, () => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      k[i][j] = l[i][j] + l[i + n][j];
    }
  }

  let result = "";
  for (let i = 0; i < k.length; i++) {
    result += `${k[i].join(" ")}\n`;
  }

  console.log(result);
  process.exit();
});
