// title: 배수와 약수
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

let result = "";
for (let i = 0; i < input.length - 1; i++) {
  const [A, B] = input[i];

  if (B % A === 0) {
    result += `factor\n`;
  } else if (A % B === 0) {
    result += `multiple\n`;
  } else {
    result += `neither\n`;
  }
}

console.log(result);
