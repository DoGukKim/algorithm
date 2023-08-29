// title: 열 개씩 끊어 출력하기
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

if (input.length <= 10) {
  console.log(input);
} else {
  let result = "";

  for (let i = 0; i < input.length; i += 10) {
    result += `${input.slice(i, i + 10)}\n`;
  }

  console.log(result);
}
