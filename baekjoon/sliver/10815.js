// title: 숫자 카드
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const m = Number(input[2]);
const checkCards = input[3].split(" ").map(Number);

const map = new Map();
for (let i = 0; i < n; i++) {
  map.set(cards[i], true);
}

let ch = Array.from({ length: m }, () => 0);
for (let i = 0; i < m; i++) {
  if (map.has(checkCards[i])) ch[i] = 1;
}

let result = "";
for (let i = 0; i < ch.length; i++) {
  result += `${ch[i]} `;
}
console.log(result);
