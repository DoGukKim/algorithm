// Title: 합이 같은 부분집합
// 방법 1
// Time: O(2^n)
// Space: O(n)
const main = (numbers) => {
  const total = numbers.reduce((acc, cur) => acc + cur, 0);

  function dfs(level, subsetSum) {
    if (level === numbers.length) {
      return total - subsetSum === subsetSum;
    }

    const left = dfs(level + 1, subsetSum + numbers[level]);
    const right = dfs(level + 1, subsetSum);

    return left || right;
  }

  return dfs(0, 0) ? "YES" : "NO";
};

console.log(main([1, 3, 5, 6, 7, 10])); // -> YES
console.log(main([2, 5, 6])); // -> NO
