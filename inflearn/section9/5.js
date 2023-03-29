// Title: 이진트리 넓이우선탐색(BFS)
// Time: O(nm)
// Space: O(n+m)
const main = (root) => {
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);

    for (const n of [current * 2, current * 2 + 1]) {
      if (n > 7) break;
      queue.push(n);
    }
  }

  console.log(result.join(" "));
};

main(1);
