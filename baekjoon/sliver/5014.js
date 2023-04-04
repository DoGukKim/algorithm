// Title: 스타트링크
// Time: O(F)
// Space: O(F)
const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
const [F, S, G, U, D] = input.split(" ").map(Number);
const dist = Array.from({ length: F + 1 }, () => -1);
const queue = [S];
dist[S] = 0;
while (queue.length) {
  const cur = queue.shift();

  for (const nx of [cur + U, cur - D]) {
    if (dist[nx] !== -1) continue;
    if (nx < 1 || nx > 1000000) continue;
    dist[nx] = dist[cur] + 1;
    queue.push(nx);
  }
}

console.log(dist[G] === -1 ? "use the stairs" : dist[G]);
