// title: 주사위 게임
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input.slice(1).map((i) => i.split(" ").map(Number));

const map = {
  1: (x) => 10000 + x * 1000,
  2: (x) => 1000 + x * 100,
  3: (x) => x * 100,
};

let result = 0;
for (let i = 0; i < n; i++) {
  const hashCounter = new Map();

  for (let j = 0; j < 3; j++) {
    const key = input[i][j];
    hashCounter.set(key, (hashCounter.get(key) || 0) + 1);
  }

  const charAndCount = [0, 0];
  for (const item of hashCounter) {
    if (charAndCount[1] < item[1]) {
      charAndCount[1] = item[1];
      charAndCount[0] = item[0];
    }
  }

  const sameChar = map[hashCounter.size](
    hashCounter.size === 3 ? Math.max(...input[i]) : charAndCount[0]
  );

  result = Math.max(result, sameChar);
}

console.log(result);
