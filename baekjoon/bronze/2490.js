// title: 윷놀이
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const map = {
  "1,3": "A",
  "2,2": "B",
  "3,1": "C",
  "4,0": "D",
  "0,4": "E",
};

let result = "";

for (let i = 0; i < input.length; i++) {
  const status = {
    front: 0,
    back: 0,
  };

  // front - 배 - 0, back - 등 - 1
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 0) {
      status.front++;
    }

    if (input[i][j] === 1) {
      status.back++;
    }
  }

  result += `${map[`${status.front},${status.back}`]}\n`;
}

console.log(result);
