// Time: O(n)
// Space: O(n)
const main = (root) => {
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    result.push(current);

    for (const item of [current * 2, current * 2 + 1]) {
      if (item > 7) break;
      queue.push(item);
    }
  }

  return result;
};
console.log(main(1));
