// title: 뒤집기
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let accOfZero = 0;
let zeroCase = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    accOfZero++;
    continue;
  }

  if (input[i] !== "0" && accOfZero > 0) {
    zeroCase++;
    accOfZero = 0;
  }
}

if (accOfZero > 0) {
  zeroCase++;
}

let accOfOne = 0;
let oneCase = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "1") {
    accOfOne++;
    continue;
  }

  if (input[i] !== "1" && accOfOne > 0) {
    oneCase++;
    accOfOne = 0;
  }
}

if (accOfOne > 0) {
  oneCase++;
}

console.log(Math.min(zeroCase, oneCase));
