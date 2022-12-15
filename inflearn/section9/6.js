// Title: 송아지 찾기(BFS)
// Time: O()
// Space: O()
function main(s, e) {
  const dist = Array.from({ length: 10002 }, () => -1);

  const queue = [s];
  dist[s] = 0;

  while (dist[e] === -1) {
    const cur = queue.shift();

    for (const nx of [cur - 1, cur + 1, cur + 5]) {
      if (dist[nx] !== -1) continue;
      if (nx < 0 || nx > 10000) continue;
      dist[nx] = dist[cur] + 1;
      queue.push(nx);
    }
  }

  console.log(dist[e]);
}

main(5, 14);
