// title: 배열 합치기
// time: O(n+m)
// space: O(n+m)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();

let lt = 0;
let rt = 0;
const numbers = [];
while (lt < n && rt < m) {
  if (input[0][lt] < input[1][rt]) {
    numbers.push(input[0][lt]);
    lt++;
  } else {
    numbers.push(input[1][rt]);
    rt++;
  }
}

while (lt < n) {
  numbers.push(input[0][lt]);
  lt++;
}

while (rt < m) {
  numbers.push(input[1][rt]);
  rt++;
}

let result = "";
for (let i = 0; i < numbers.length; i++) {
  result += `${numbers[i]} `;
}
console.log(result);
