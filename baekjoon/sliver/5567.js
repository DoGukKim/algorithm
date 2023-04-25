// Title: 결혼식
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const _ = Number(input[0]);
const m = Number(input[1]);
input = input.slice(2).map((i) => i.split(" ").map(Number));

const graph = {};
for (let i = 1; i <= 500; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  const [v, e] = input[i];
  graph[v].push(e);
  graph[e].push(v);
}

const ch = Array.from({ length: 501 }, () => 0);
ch[1] = 1;

let result = 0;
const queue = [[1, 0]];
while (queue.length) {
  const [v, level] = queue.shift();

  for (let i = 0; i < graph[v].length; i++) {
    if (ch[graph[v][i]] === 1) continue;
    if (level === 2) continue;

    result++;
    ch[graph[v][i]] = 1;
    queue.push([graph[v][i], level + 1]);
  }
}

console.log(result);
