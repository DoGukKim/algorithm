// title: 오타맨 고창영
// time: O(tn)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
let result = "";

for (let i = 1; i <= t; i++) {
  const [wrongIndex, word] = input[i].split(" ");
  let newWord = "";

  for (let j = 0; j < word.length; j++)
    if (j + 1 !== Number(wrongIndex)) newWord += word[j];

  result += `${newWord}\n`;
}

console.log(result);
