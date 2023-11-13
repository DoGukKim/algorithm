// title: 문제이름
// time: O()
// space: O()
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let dotCount = 0;
let currentXCount = 0;
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "X") {
    currentXCount++;
    continue;
  }

  if (input[i] === ".") {
    if (currentXCount > 0 && currentXCount % 2 === 0) {
      if (currentXCount > 2) {
        result += `${"AAAA".repeat(Math.floor(currentXCount / 4))}`;
        currentXCount = Math.floor(currentXCount / 4);
      }

      result += `${"BB".repeat(Math.floor(currentXCount / 2))}`;
      currentXCount = 0;
    }

    result += ".";
    dotCount++;
  }
}

console.log(result);
