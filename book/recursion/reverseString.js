// 방법 1
// Time : O(n)
// Space : O(n)
const main = (s) => {
  let result = "";

  function dfs(index) {
    if (index < 0) return;
    result += s[index];
    dfs(index - 1);
  }
  dfs(s.length - 1);

  return result;
};

console.log(main("abcd"));

// 방법 2
// Time : O(n^2)
// Space : O(n)
const main2 = (s) => {
  if (s.length === 0) return "";
  return main2(s.slice(1)) + s[0];
};

console.log(main2("abcd"));
