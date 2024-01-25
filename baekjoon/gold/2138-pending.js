let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const current = input[1].split("");
const expect = input[2].split("");
const ch = Array.from({ length: n }, () => 0);
let result = 0;

function switchBulbStatus(status) {
  if (status === "1") {
    return "0";
  }

  if (status === "0") {
    return "1";
  }
}

for (let i = 0; i < n; i++) {
  if (expect[i] === "1") {
    if (i === 0) {
      current[0] = switchBulbStatus(current[0]);
      current[1] = switchBulbStatus(current[1]);
      ch[0] = 1;
      result++;
      continue;
    }

    if (i === n - 1) {
      current[i] = switchBulbStatus(current[i]);
      current[i - 1] = switchBulbStatus(current[i - 1]);
      ch[n - 1] = 1;
      result++;
      continue;
    }

    current[i - 1] = switchBulbStatus(current[i - 1]);
    current[i] = switchBulbStatus(current[i]);
    current[i + 1] = switchBulbStatus(current[i + 1]);
    ch[i] = 1;
    result++;
  }
}

for (let i = 0; i < n; i++) {
  if (ch[i] === 1) continue;
  if (i === 0) {
    current[0] = switchBulbStatus(current[0]);
    current[1] = switchBulbStatus(current[1]);
    result++;
    continue;
  }

  if (i === n - 1) {
    current[i] = switchBulbStatus(current[i]);
    current[i - 1] = switchBulbStatus(current[i - 1]);
    result++;
    continue;
  }

  current[i - 1] = switchBulbStatus(current[i - 1]);
  current[i] = switchBulbStatus(current[i]);
  current[i + 1] = switchBulbStatus(current[i + 1]);
  result++;
}

console.log(result > 0 ? result : -1);
