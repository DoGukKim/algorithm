let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input
  .slice(1)
  .map((i) => i.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

const arr = [input[0][1]];
for (let i = 1; i < input.length; i++) {
  const len = arr.length;
  for (let j = 0; j < len; j++) {
    if (arr[j] <= input[i][0]) break;
    arr.push(input[i][1]);
  }
}

console.log(arr.length);
