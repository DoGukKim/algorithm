// Title: 여행경로
// Time: O()
// Space: O()
function main(tickets) {
  const graph = {};
  let result = [];
  //   const visited = new Set();

  for (let i = 0; i < tickets.length; i++) {
    const [f, d] = tickets[i];

    if (!(f in graph)) graph[f] = [];
    if (!(d in graph)) graph[d] = [];

    graph[f].push(d);
  }

  for (const k in graph) {
    graph[k] = [...graph[k]].sort();
  }

  //   console.log(graph);

  // 티켓이 남아 있는데 티켓 소모가 안되는 경우 and
  // 중복 티켓인 경우 처리 필요

  return result;
}

console.log(
  main([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);

// console.log(
//   main([
//     ["ICN", "A"],
//     ["ICN", "B"],
//     ["B", "ICN"],
//   ])
// );
