// Title: 바둑이 승차
// 방법 1
// Time: O(2^n)
// Space: O(n)
const main = (maxWeight, dogs) => {
  function dfs(level, sum) {
    if (sum + dogs[level] > maxWeight) return sum;
    if (level === dogs.length) return sum;

    const left = dfs(level + 1, sum + dogs[level]);
    const right = dfs(level + 1, sum);

    return Math.max(left, right);
  }

  return dfs(0, 0);
};

console.log(main(259, [81, 58, 42, 33, 61]));
