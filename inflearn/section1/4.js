// Title: 1부터 N까지의 합
// 방법 1
// Time: O(1)
// Space: O(1)
function main(n) {
  console.log((n + 1) * (n / 2)); // 또는 console.log((n ** 2 + n) / 2);
}

// 방법 2
// Time: O(n)
// Space: O(1)
function main(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  console.log(result);
}

// 방법 3
// Time: O(n)
// Space: O(n)
function main(n) {
  const result = dfs(n);
  console.log(result);

  function dfs(num) {
    if (num === 1) return 1;
    return dfs(num - 1) + num;
  }
}

main(6);
main(10);
