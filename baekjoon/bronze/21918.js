// Title: 전구
// Time: O(n+m)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const [_, m] = input[0];
const arr = input[1];
const operatorMap = {
  1: (b, c) => {
    arr[b - 1] = c;
    return null;
  },
  2: (b, c) => {
    for (let i = b - 1; i < c; i++) {
      if (arr[i] === 1) arr[i] = 0;
      else arr[i] = 1;
    }
    return null;
  },
  3: (b, c) => {
    for (let i = b - 1; i < c; i++) arr[i] = 0;
    return null;
  },
  4: (b, c) => {
    for (let i = b - 1; i < c; i++) arr[i] = 1;
    return null;
  },
};

for (let i = 0; i < m; i++) {
  const [a, b, c] = input[i + 2];
  operatorMap[a](b, c);
}

console.log(arr.join(" "));
