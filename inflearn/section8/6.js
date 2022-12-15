// Title: 바둑이 승차
// Time: O(2^n)
// Space: O(n)
function main(maxWeight, dogs) {
  function dfs(level, sum) {
    if (sum + dogs[level] > maxWeight) return sum;
    if (level === dogs.length) return sum;

    const left = dfs(level + 1, sum + dogs[level]);
    const right = dfs(level + 1, sum);

    return Math.max(left, right);
  }

  console.log(dfs(0, 0));
}

main(259, [81, 58, 42, 33, 61]);
