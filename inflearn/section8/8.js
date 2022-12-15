// Title: 중복순열 구하기
// 방법 1
// Time: O(n^n)
// Space: O(n^2)
function main(n, m) {
  const result = [];

  function dfs(p) {
    if (p.length === m) {
      result.push([...p]);
      return;
    }

    for (let i = 0; i < n.length; i++) {
      p.push(n[i]);
      dfs(p);
      p.pop();
    }
  }
  dfs([]);

  console.log([result, result.length]);
}

// 방법 2
// Time: O(n^n)
// Space: O(n^2)
function main(n, m) {
  const p = Array.from({ length: m }, () => 0);
  const result = [];

  function dfs(l) {
    if (l === m) {
      result.push(p.slice());
      return;
    }

    for (let i = 0; i < n.length; i++) {
      p[l] = n[i];
      dfs(l + 1);
    }
  }

  dfs(0);

  console.log(result, result.length);
}

main([1, 2, 3], 2);
