// Title: 조합 구하기
// 방법 1
// Time: O(n^n)
// Space: O(n!)
const main = (n, m) => {
  const result = [];

  function dfs(j, c) {
    if (c.length === m) {
      result.push([...c]);
      return;
    }

    for (let i = j; i < n.length; i++) {
      c.push(n[i]);
      dfs(i + 1, c);
      c.pop();
    }
  }

  dfs(0, []);

  console.log(result);
};

// 방법 2
// Time: O(n^n)
// Space: O(n!)
function main(n, m) {
  const c = Array.from({ length: m }, () => 0);
  const result = [];

  function dfs(l, j) {
    if (l === m) {
      result.push([...c]);
      return;
    }

    for (let i = j; i < n.length; i++) {
      c[l] = n[i];
      dfs(l + 1, i + 1);
    }
  }
  dfs(0, 0);

  console.log(result);
}

main([1, 2, 3, 4], 2);
