const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(input);
function solution() {}
solution();
