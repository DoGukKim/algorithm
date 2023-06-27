// title: 계란으로 계란치기
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const eggs = input.slice(1).map((i) => i.split(" ").map(Number));
let result = 0;

dfs(0);
console.log(result);

function dfs(level) {
  if (level === n) {
    result = Math.max(result, checkBrokenEggs());
    return;
  }

  if (eggs[level][0] <= 0) {
    dfs(level + 1);
  }

  let isAllBroken = true;
  for (let i = 0; i < n; i++) {
    if (i === level || eggs[i][0] <= 0) continue;

    isAllBroken = false;
    eggs[i][0] -= eggs[level][1];
    eggs[level][0] -= eggs[i][1];
    dfs(level + 1);
    eggs[i][0] += eggs[level][1];
    eggs[level][0] += eggs[i][1];
  }

  if (isAllBroken) dfs(n);
}

function checkBrokenEggs() {
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (eggs[i][0] <= 0) count++;
  }

  return count;
}
