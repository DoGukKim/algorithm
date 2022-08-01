const main = (graph, root) => {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    console.log(current);

    for (let i = 0; i < graph[current].length; i++) {
      queue.push(graph[current][i]);
    }
  }
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

main(graph, "a");
