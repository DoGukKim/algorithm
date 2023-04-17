// Title: 터렛
// Time: O(1)
// Space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const t = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

let result = "";
for (let i = 0; i < t; i++) {
  const [A1, A2, R1, B1, B2, R2] = input[i];
  const count = getConcatCount(A1, A2, R1, B1, B2, R2);
  result += `${count}\n`;
}
console.log(result);

function getConcatCount(A1, A2, R1, B1, B2, R2) {
  const distance = getDistance(A1, B1, A2, B2);

  if (distance === 0 && R1 === R2) return -1;
  if (Math.abs(R1 - R2) < distance && distance < R1 + R2) return 2;
  if (Math.abs(R1 - R2) === distance || distance === R1 + R2) return 1;

  return 0;
}

function getDistance(A1, B1, A2, B2) {
  const result = Math.sqrt((B1 - A1) ** 2 + (B2 - A2) ** 2);
  return result;
}
