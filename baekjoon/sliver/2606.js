// Title: 바이러스
// Time: O(v+e)
// Space: O(n)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 총 컴퓨터 수 및 쌍의 개수 제거
input.shift();
input.shift();

// 그래프 형성
const graph = {};
for (let i = 0; i < input.length; i++) {
  const [v, e] = input[i].split(" ");

  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];

  graph[v].push(e);
  graph[e].push(v);
}

// DFS
let result = 0;
const visited = new Set();
const stack = ["1"];

while (stack.length) {
  const current = stack.pop();
  if (visited.has(current)) continue;
  if (current !== "1") result++;
  visited.add(current);

  for (let i = 0; i < graph[current].length; i++) {
    stack.push(graph[current][i]);
  }
}

console.log(result);
