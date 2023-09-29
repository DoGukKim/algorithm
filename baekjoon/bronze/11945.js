// title: 뜨거운 붕어빵
// time: O(nm)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);

let result = "";
for (let i = 1; i <= n; i++) {
  for (let j = m - 1; j >= 0; j--) {
    result += `${input[i][j]}`;
  }

  result += "\n";
}

console.log(result);
