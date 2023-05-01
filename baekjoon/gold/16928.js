// Title: 뱀과 사다리 게임
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();

const bridge = input.slice(0, n);
const bridgeMap = {};
const snake = input.slice(n, n + m);
const snakeMap = {};

for (let i = 0; i < n; i++) {
  const [x, y] = bridge[i];
  bridgeMap[x] = y;
}

for (let i = 0; i < m; i++) {
  const [u, v] = snake[i];
  snakeMap[u] = v;
}

const ch = Array.from({ length: 101 }, () => 0);
ch[1] = 1;
const queue = [[1, 0]];
let index = 0;
while (queue.length > index) {
  const [cur, count] = queue[index++];

  for (const i of [cur + 1, cur + 2, cur + 3, cur + 4, cur + 5, cur + 6]) {
    if (i === 100) return console.log(count + 1);
    if (ch[i] === 1) continue;
    if (i > 100) continue;
    if (bridgeMap[i]) {
      ch[bridgeMap[i]] = 1;
      queue.push([bridgeMap[i], count + 1]);
      continue;
    }

    if (snakeMap[i]) {
      ch[snakeMap[i]] = 1;
      queue.push([snakeMap[i], count + 1]);
      continue;
    }

    ch[i] = 1;
    queue.push([i, count + 1]);
  }
}
