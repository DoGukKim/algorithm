// title: 저항
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const map = {
  black: { val: "0", multi: 1 },
  brown: { val: "1", multi: 10 },
  red: { val: "2", multi: 100 },
  orange: { val: "3", multi: 1000 },
  yellow: { val: "4", multi: 10000 },
  green: { val: "5", multi: 100000 },
  blue: { val: "6", multi: 1000000 },
  violet: { val: "7", multi: 10000000 },
  grey: { val: "8", multi: 100000000 },
  white: { val: "9", multi: 1000000000 },
};

const A = map[input[0]].val;
const B = map[input[1]].val;
const C = map[input[2]].multi;

console.log((BigInt(A + B) * BigInt(C)).toString());
