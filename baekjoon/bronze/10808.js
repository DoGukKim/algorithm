// title: 알파벳 개수
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
const table = Array.from({ length: 26 }, () => 0);

for (let i = 0; i < input.length; i++) {
  const char = input[i].charCodeAt();
  table[char - 97]++;
}

let result = "";
for (let i = 0; i < table.length; i++) {
  result += `${table[i]} `;
}
console.log(result);
