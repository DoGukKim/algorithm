let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);

if (n < 3 || m < 3) return console.log(-1);

const A = input.slice(1, n + 1).map((i) => i.split(""));
const B = input.slice(n + 1).map((i) => i.split(""));

const isSame = checkIsSameMx();
if (isSame) return console.log(0);

let result = 0;
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (x + 3 > n || y + 3 > m) continue;
    if (A[x][y] === B[x][y]) continue;

    reverseElement(A, x, y);
    result++;

    const isSame = checkIsSameMx();
    if (isSame) {
      console.log(result);
      return;
    }
  }
}

console.log(-1);

function reverseElement(arr, x, y) {
  for (let cx = x; cx < x + 3; cx++) {
    for (let cy = y; cy < y + 3; cy++) {
      if (arr[cx][cy] === "1") arr[cx][cy] = "0";
      else arr[cx][cy] = "1";
    }
  }
}

function checkIsSameMx() {
  let result = true;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (A[x][y] !== B[x][y]) result = false;
    }
  }

  return result;
}
