// Title: 모음의 개수
// Time: O(n*m)
// Space: O(n)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.toLowerCase().replace(/[^a-z]/g, ""));

const hash = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

let result = "";
let acc = 0;
for (let i = 0; i < input.length - 1; i++) {
  acc = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (hash[input[i][j]]) acc++;
  }
  result += acc + "\n";
}

console.log(result);
