// Title: 숨바꼭질
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = input.split(" ").map(Number);
const [n, k] = input;
const dist = Array.from({ length: 100001 }, () => -1);
dist[n] = 0;
const queue = [n];
while (dist[k] === -1) {
  const cur = queue.shift();

  for (const next of [cur - 1, cur + 1, cur * 2]) {
    if (dist[next] !== -1) continue;
    if (next < 0 || next > 100000) continue;
    dist[next] = dist[cur] + 1;
    queue.push(next);
  }
}

console.log(dist[k]);
