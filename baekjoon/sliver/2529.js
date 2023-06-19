// title: 부등호
// time: O(10Pk)
// space: O(k+1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const k = Number(input[0]);
const signs = input[1].split(" ");
const ch = Array.from({ length: 10 }, () => 0);

const map = {
  "<": (a, b) => a < b,
  ">": (a, b) => a > b,
};

let min = Infinity;
let max = -Infinity;
let result = [];

for (let i = 0; i <= 9; i++) {
  ch[i] = 1;
  dfs([i], 0);
  ch[i] = 0;
}
console.log(`${result[0]}\n${result[1]}`);

function dfs(stack, level) {
  if (stack.length === k + 1) {
    const str = stack.join("");
    const num = Number(str);
    if (max < num) {
      max = num;
      result[0] = str;
    }
    if (min > num) {
      min = num;
      result[1] = str;
    }
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (ch[i]) continue;
    if (!map[signs[level]](stack.at(-1), i)) continue;

    ch[i] = 1;
    stack.push(i);
    dfs(stack, level + 1);
    stack.pop();
    ch[i] = 0;
  }
}
