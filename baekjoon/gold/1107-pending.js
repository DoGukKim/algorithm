let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
const nStr = String(n);
const m = Number(input.shift());
input = input[0].split(" ").map(Number);
const ch = Array.from({ length: 10 }, () => 0);
let result = 0;

if (n === 100) console.log("0");
else {
  for (let i = 0; i < m; i++) ch[input[i]] = 1;
  for (let i = 0; i < nStr.length; i++) {
    if (ch[nStr[i]] === 1) {
      let max = -Infinity;
      for (let j = 0; j < 10; j++) if (ch[j] === 0 && max < j) max = j;

      result += Math.abs(max - nStr[i]) + 1;
    } else {
      result++;
    }
  }

  const absDis = Math.abs(100 - n);

  console.log(Math.min(absDis, result));
}
