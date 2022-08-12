// 방법 1
// Time: O(n)
// Space: O(n)
const main = (n) => {
  function dfs(num) {
    if (num === 0) return;
    dfs(num - 1);
    console.log(num); // -> 1,2,3
  }
  dfs(n);
};

main(3);

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (n) => {
  function dfs(num) {
    if (num > n) return;
    console.log(num); // -> 1,2,3
    dfs(num + 1);
  }
  dfs(1);
};

main(3);

// 방법 3
// Time: O(n)
// Space: O(n)
const main3 = (n, m = 1) => {
  if (m > n) return;
  console.log(m); // -> 1,2,3
  main3(n, m + 1);
};

main3(3);
