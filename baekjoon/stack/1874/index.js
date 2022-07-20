const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input.shift();
solution(input);
function solution(arr) {
  const stack = [];
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {}

  console.log(result.join("\n"));
}
