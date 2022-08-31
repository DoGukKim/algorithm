// 방법 1
// Time: O(n)
// Space: O(n)
const main = (s) => {
  let result = 0;

  function dfs(index) {
    if (index === s.length) return;

    if (s[index] === "X") result++;
    dfs(index + 1);
  }
  dfs(0);

  return result;
};

console.log(main("AXBXCX"));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (s) => {
  if (s.length === 0) return 0;
  const remainder = main2(s.slice(1));
  return s[0] === "X" ? remainder + 1 : remainder + 0;
};

console.log(main2("AXBXCX"));
