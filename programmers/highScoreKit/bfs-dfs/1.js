// 타겟 넘버
// Time: O(2^n)
// Space: O(n)
const main = (numbers, target) => {
  let result = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (target === sum) result++;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  dfs(0, 0);

  return result;
};

console.log(main([1, 1, 1, 1, 1], 3)); // -> 5
console.log(main([4, 1, 2, 1], 4)); // -> 2
