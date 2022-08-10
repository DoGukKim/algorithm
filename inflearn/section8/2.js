// 방식 1
// Time: O(n)
// Space: O(n)
const main = (n) => {
  let result = "";

  function dfs(num) {
    if (num === 0) return;
    dfs(Math.floor(num / 2));
    result += String(num % 2);
  }

  dfs(n);

  console.log(result);
  return result;
};

main(6); // -> 110

// 방식 2
// Time: O(n)
// Space: O(n)
const main2 = (n) => {
  if (n === 0) return "";
  return main2(Math.floor(n / 2)) + String(n % 2);
};

main2(6);
