let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = input[0];
const current = input[1].split("");
const expect = input[2].split("");
let result = 0;

function switchBulb(status) {
  if (status === "0") {
    return "1";
  } else {
    return "0";
  }
}

function isSameStatus(cur, exp) {
  if (cur.join("") !== exp.join("")) {
    return false;
  }

  return true;
}

for (let i = 0; i < n; i++) {
  if (i === 0) {
    current[i] = switchBulb(current[i]);
    current[i + 1] = switchBulb(current[i + 1]);
    result++;

    if (isSameStatus(current, expect)) break;
    continue;
  }

  if (i === n - 1) {
    current[i] = switchBulb(current[i]);
    current[i - 1] = switchBulb(current[i - 1]);
    result++;

    if (isSameStatus(current, expect)) break;
    break;
  }

  current[i - 1] = switchBulb(current[i - 1]);
  current[i] = switchBulb(current[i]);
  current[i + 1] = switchBulb(current[i + 1]);
  result++;
  if (isSameStatus(current, expect)) break;
}

if (!isSameStatus(current, expect)) {
  console.log(-1);
  return;
}

console.log(result);
