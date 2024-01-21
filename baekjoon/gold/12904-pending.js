// 시간 초과
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const S = input[0];
const T = input[1];

const operate = {
  A: (str) => str + "A",
  B: (str) => str.split("").reverse().join("") + "B",
};

const result = recursionFn(S);
console.log(result);

function recursionFn(str) {
  if (str === T) {
    return 1;
  }

  if (str.length === T.length) {
    return 0;
  }

  const A = recursionFn(operate["A"](str));
  const B = recursionFn(operate["B"](str));

  if (A || B) return 1;

  return 0;
}
