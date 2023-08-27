// title: 나는 요리사다
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const result = [0, 0];
for (let i = 0; i < 5; i++) {
  const sum = input[i].reduce((acc, cur) => acc + cur, 0);

  if (result[1] < sum) {
    result[0] = i + 1;
    result[1] = sum;
  }
}

console.log(`${result[0]} ${result[1]}`);
