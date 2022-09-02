// 방법 1
// Time: O(n)
// Space: O(n)
const main = (n) => {
  const result = [];

  function dfs(index) {
    if (index === n.length) {
      return;
    }

    if (n[index] % 2 === 0) {
      result.push(n[index]);
    }

    dfs(index + 1);
  }

  dfs(0);

  return result;
};

console.log(main([2, 3, 4, 5, 6])); // -> [2, 4, 6]

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (n) => {
  if (n.length === 0) return [];

  const arr = main(n.slice(1));
  if (n[0] % 2 === 0) arr.push(n[0]);

  return arr;
};

console.log(main([2, 3, 4, 5, 6])); // -> [2, 4, 6]
