// title: 기타줄
// time: O(m)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
input = input.slice(1).map((i) => i.split(" ").map(Number));

let result = Infinity;
let totalMinPrices = [Infinity, Infinity];

for (let i = 0; i < m; i++) {
  const [p, e] = input[i];

  const onlyPackage = Math.ceil(n / 6) * p;
  const onlyEach = n * e;
  const min = Math.min(onlyPackage, onlyEach);

  if (result > min) result = min;

  if (totalMinPrices[0] > p) totalMinPrices[0] = p;
  if (totalMinPrices[1] > e) totalMinPrices[1] = e;
}

console.log(
  Math.min(
    result,
    Math.floor(n / 6) * totalMinPrices[0] +
      (n - Math.floor(n / 6) * 6) * totalMinPrices[1]
  )
);
