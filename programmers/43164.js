// Title: 여행경로
// Time: O(v+e)
// Space: O(v+e)
function main(tickets) {
  tickets.sort();

  const graph = {};
  let remain = 0;
  for (let i = 0; i < tickets.length; i++) {
    const [f, d] = tickets[i];
    if (!(f in graph)) graph[f] = [];
    if (!(d in graph)) graph[d] = [];
    graph[f].push(d);
    remain++;
  }

  let result = [];
  const visited = new Set();
  function dfs(locate, remain, path) {
    path.push(locate);

    if (remain === 0) {
      result = path;
      return true;
    }

    for (let i = 0; i < graph[locate].length; i++) {
      const pos = locate + "," + i;
      if (!visited.has(pos)) {
        path.push();
        visited.add(pos);
        if (dfs(graph[locate][i], remain - 1, path) === true) return true;
        path.pop();
        visited.delete(pos);
      }
    }
  }

  dfs("ICN", remain, []);
  return result;
}

console.log(
  main([
    ["ICN", "A"],
    ["A", "B"],
    ["A", "C"],
    ["C", "A"],
    ["B", "D"],
  ])
);

console.log(
  main([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);

console.log(
  main([
    ["ICN", "AAA"],
    ["ICN", "AAA"],
    ["ICN", "AAA"],
    ["AAA", "ICN"],
    ["AAA", "ICN"],
  ])
);
