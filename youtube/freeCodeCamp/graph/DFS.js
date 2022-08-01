const main = (graph, root) => {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    console.log(current);

    for (let i = 0; i < graph[current].length; i++) {
      stack.push(graph[current][i]);
    }
  }
};

const main2 = (graph, root) => {
  console.log(root);
  for (let i = 0; i < graph[root].length; i++) {
    main2(graph, graph[root][i]);
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
main2(graph, "a");
