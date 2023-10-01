// title: 5와 6의 차이
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
const [A, B] = input.split(" ");

const maxA = Number(A.replaceAll("5", "6"));
const maxB = Number(B.replaceAll("5", "6"));

const minA = Number(A.replaceAll("6", "5"));
const minB = Number(B.replaceAll("6", "5"));

console.log(`${minA + minB} ${maxA + maxB}`);
