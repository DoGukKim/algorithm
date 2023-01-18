// Title: 한윤정이 이탈리아에 가서 아이스크림을 사먹는데
// Time: O(n^3)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 0; i < m; i++) {
  const [v, e] = input[i];
  graph[v][e] = 1;
  graph[e][v] = 1;
}

let result = 0;
for (let i = 1; i <= n - 2; i++) {
  for (let j = i + 1; j <= n - 1; j++) {
    for (let k = j + 1; k <= n; k++) {
      if (graph[i][j] === 1 || graph[i][k] === 1 || graph[j][k] === 1) continue;
      result++;
    }
  }
}

console.log(result);
