// Title: 샘터
// Time: O(n+k)
// Space: O(n+k)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
let [n, k] = input.shift();
const fountain = input.shift();
const queue = [];
const map = {};
let result = 0;
for (let i = 0; i < n; i++) {
  queue.push([fountain[i], 0]);
  map[fountain[i]] = true;
}

bfs();

function bfs() {
  let index = 0;

  while (queue.length > index) {
    const [cur, dis] = queue[index++];

    for (const i of [cur + 1, cur - 1]) {
      if (map[i]) continue;

      map[i] = true;
      queue.push([i, dis + 1]);
      result += dis + 1;
      k--;
      if (k === 0) return console.log(result);
    }
  }
}
