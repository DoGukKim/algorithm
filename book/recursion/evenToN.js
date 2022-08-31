// 방법 1
// Time: O(n)
// Space: O(n)
const main = (m, n) => {
  if (m > n) return;
  console.log(m);
  main(m + 2, n);
};

console.log(main(0, 10));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (m, n) => {
  function dfs(num) {
    if (num > n) return;
    console.log(num);
    dfs(num + 2);
  }
  dfs(m);
};

console.log(main2(0, 10));

// 방법 3
// Iterative
// Time: O(n)
// Space: O(1)
const main3 = (m, n) => {
  while (m <= n) {
    console.log(m);
    m = m + 2;
  }
};

console.log(main3(0, 10));
