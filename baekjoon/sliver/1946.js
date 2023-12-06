let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

let result = "";

for (let i = 1; i < input.length; i++) {
  const n = Number(input[i]);

  const score = [Infinity, Infinity];
  let count = 1;

  const copy = input.slice(i + 1, i + 1 + n).sort((a, b) => a[0] - b[0]);

  for (let j = 1; j < copy.length; j++) {
    if (copy[j][0] < score[0]) {
      score[0] = Math.min(copy[j][0], score[0]);
      count++;
    } else if (copy[j][1] < score[1]) {
      score[1] = Math.min(copy[j][1], score[1]);
      count++;
    }
  }

  result += `${count}\n`;
  i += n;
}

console.log(result);
