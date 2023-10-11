// title: 한조서열정리하고옴ㅋㅋ
// time: O()
// space: O()
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input[1].split(" ").map(Number);

let result = 0;
let lt = 0;
for (let rt = 0; rt < n; rt++) {
  if (input[rt] > input[lt]) {
    result = Math.max(result, Math.abs(rt - lt) - 1);
    lt = rt;
  }
}

console.log(result === 0 ? n - 1 : result);
