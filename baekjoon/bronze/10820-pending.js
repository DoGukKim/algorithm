// title: 문자열 분석
// time: O(nm)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === "") {
    result += `\n`;
    continue;
  }

  //  소문자, 대문자, 숫자, 공백
  const arr = [0, 0, 0, 0];
  let flag = false;

  for (let j = 0; j < input[i].length; j++) {
    const char = input[i][j];
    const uppercase = char.toUpperCase();
    const lowercase = char.toLowerCase();
  }

  result += `${arr.join(" ")}\n`;
}

console.log(result);
