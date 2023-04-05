// Title: 숨바꼭질3
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
const queue = [[n, 0]];
while (dist[k] === -1) {
  const [cur, time] = queue.shift();

  for (const [next, nextTime] of [
    [cur * 2, time],
    [cur - 1, time + 1],
    [cur + 1, time + 1],
  ]) {
    if (next < 0 || next > 100000) continue;
    if (dist[next] !== -1) continue;
    dist[next] = nextTime;
    queue.push([next, nextTime]);
  }
}

console.log(dist[k]);
