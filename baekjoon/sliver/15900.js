// Title: 나무 탈출
// Time: O(n+m)
// Space: O(n+m)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const graph = {};
for (let i = 1; i < input.length; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];
  graph[v].push(e);
  graph[e].push(v);
}

const ch = Array.from({ length: 500001 }, () => 0);
let playCount = 0;
dfs(1, 0);
console.log(playCount % 2 === 0 ? "No" : "Yes");

function dfs(v, level) {
  if (ch[v] === 1) return;
  ch[v] = 1;

  if (graph[v].length === 1 && ch[graph[v][0]] === 1) {
    playCount += level;
    return;
  }

  for (let i = 0; i < graph[v].length; i++) {
    if (ch[graph[v][i]] !== 0) continue;
    dfs(graph[v][i], level + 1);
  }
}

// stack을 활용한 깊이 우선 탐색
function dfs() {
  const stack = [[1, 0]];
  ch[1] = 1;

  while (stack.length) {
    const [v, level] = stack.pop();

    for (let i = 0; i < graph[v].length; i++) {
      if (ch[graph[v][i]] === 0) {
        ch[graph[v][i]] = 1;
        const nv = graph[graph[v][i]];
        if (nv.length === 1 && nv[0] === v) {
          playCount += level + 1;
          continue;
        }

        stack.push([graph[v][i], level + 1]);
      }
    }
  }
}
