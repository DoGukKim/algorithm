// title: 거스릅돈
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let remain = 1000 - Number(input);
let result = 0;

while (remain > 0) {
  if (remain >= 500) {
    const rest = Math.floor(remain / 500);
    result += rest;
    remain -= 500 * rest;
    continue;
  }

  if (remain >= 100) {
    const rest = Math.floor(remain / 100);
    result += rest;
    remain -= 100 * rest;
    continue;
  }

  if (remain >= 50) {
    const rest = Math.floor(remain / 50);
    result += rest;
    remain -= 50 * rest;
    continue;
  }

  if (remain >= 10) {
    const rest = Math.floor(remain / 10);
    result += rest;
    remain -= 10 * rest;
    continue;
  }

  if (remain >= 5) {
    const rest = Math.floor(remain / 5);
    result += rest;
    remain -= 5 * rest;
    continue;
  }

  if (remain >= 1) {
    const rest = Math.floor(remain / 1);
    result += rest;
    remain -= 1 * rest;
    continue;
  }
}

console.log(result);
