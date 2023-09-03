// title: 하얀칸
// time: O(nm)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = 0;
for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    if (x % 2 === 0 && y % 2 === 0 && input[x][y] === "F") result++;
    else if (x % 2 !== 0 && y % 2 !== 0 && input[x][y] === "F") result++;
  }
}

console.log(result);
