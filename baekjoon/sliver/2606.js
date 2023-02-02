// Title: 바이러스
// Time: O(n+m)
// Space: O(n+m)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
const m = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const ch = Array.from({ length: n + 1 }, () => 0);
const graph = {};
for (let i = 0; i < m; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];

  graph[v].push(e);
  graph[e].push(v);
}

let result = 0;
ch[1] = 1;
dfs(1);
console.log(result);

function dfs(v) {
  for (let i = 0; i < graph[v].length; i++) {
    if (ch[graph[v][i]] === 0) {
      result++;
      ch[graph[v][i]] = 1;
      dfs(graph[v][i]);
    }
  }
}

// BFS
// let result = 0;
// const queue = ["1"];
// ch[1] = 1;
// while (queue.length) {
//   const v = queue.shift();

//   for (let i = 0; i < graph[v].length; i++) {
//     if (ch[graph[v][i]] === 0) {
//       result++;
//       ch[graph[v][i]] = 1;
//       queue.push(graph[v][i]);
//     }
//   }
// }
// console.log(result);
