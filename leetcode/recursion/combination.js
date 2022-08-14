// Time: O(n - k!)
// Space: O(n - k!)
const main = (numbers, k) => {
  let result = [];

  function dfs(index, sum) {
    if (sum.length === k) {
      result.push([...sum]);
      return;
    }

    for (let i = index; i < numbers.length; i++) {
      sum.push(numbers[i]);
      dfs(i + 1, sum);
      sum.pop(); // 백트랙킹
    }
  }
  dfs(0, []);

  return result;
};

console.log(main([1, 2, 3, 4], 2));
