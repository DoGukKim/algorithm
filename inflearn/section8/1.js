// Title: 재귀 함수
// 방법 1
// Time: O(n)
// Space: O(n)
function main(n) {
  function dfs(c) {
    if (c > n) return;

    console.log(c);
    dfs(c + 1);
  }

  dfs(1);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(n, c = 1) {
  if (c > n) return;

  console.log(c);
  main(n, c + 1);
}

// 방법 3
function main(n) {
  if (n === 0) return 1;
  const remain = main(n - 1);
  console.log(remain);
  return remain + 1;
}

main(3);
