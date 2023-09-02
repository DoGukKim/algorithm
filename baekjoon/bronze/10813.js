// title: 공 바꾸기
// time: O(m)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const [n, m] = input[0];

const bucket = Array.from({ length: n }, (_, idx) => idx + 1);

for (let i = 1; i <= m; i++) {
  const [p1, p2] = input[i].map((i) => i - 1);

  [bucket[p1], bucket[p2]] = [bucket[p2], bucket[p1]];
}

console.log(bucket.join(" "));
