// Title: 숨바꼭질
// Time: O(n)
// Space: O(n)
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [n, k] = input.split(" ").map(Number);
const dist = Array.from({ length: 100002 }, () => -1);

const queue = [n];
dist[n] = 0;

while (dist[k] === -1) {
  const d = queue.shift();

  for (const nx of [d - 1, d + 1, 2 * d]) {
    if (dist[nx] !== -1) continue;
    if (nx < 0 || nx > 100000) continue;
    dist[nx] = dist[d] + 1;
    queue.push(nx);
  }
}

console.log(dist[k]);
