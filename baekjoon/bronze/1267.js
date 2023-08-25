// title: 핸드폰 요금
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
input = input[1].split(" ").map(Number);

let y = 0;
let m = 0;

for (let i = 0; i < n; i++) {
  const perY = Math.floor(input[i] / 30) + 1;
  const perM = Math.floor(input[i] / 60) + 1;

  y += perY * 10;
  m += perM * 15;
}

if (y === m) {
  console.log(`Y M ${y}`);
} else if (y > m) {
  console.log(`M ${m}`);
} else {
  console.log(`Y ${y}`);
}
