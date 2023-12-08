// title: DNA
// time: O(nm + m log m)
// space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = Array.from({ length: m }, () => new Map());

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < m; j++) {
    const key = input[i][j];
    const currentMap = arr[j];
    currentMap.set(key, (currentMap.get(key) || 0) + 1);
  }
}

let leastHarmingDistanceDNA = "";
for (let i = 0; i < m; i++) {
  const max = Math.max(...arr[i].values());
  const maxNucleotide = [...arr[i]].sort().find((item) => item[1] === max);
  leastHarmingDistanceDNA += `${maxNucleotide[0]}`;
}

let result = leastHarmingDistanceDNA;
let sumOfHarmingDistance = 0;
for (let i = 1; i <= n; i++) {
  let harmingDistance = 0;
  for (let j = 0; j < m; j++) {
    if (input[i][j] !== leastHarmingDistanceDNA[j]) harmingDistance++;
  }

  sumOfHarmingDistance += harmingDistance;
}

result += `\n${sumOfHarmingDistance}`;
console.log(result);
