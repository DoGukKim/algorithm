// Title: 중복순열 구하기
// 방법 1
// Time: O(n^n)
// Space: O(m)
function main(n, m) {
  let result = 0;

  function dfs(p) {
    if (p.length === m) {
      console.log(p.join(" "));
      result++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      p.push(i);
      dfs(p);
      p.pop();
    }
  }

  dfs([]);
  console.log(result);
}

main(3, 2);

// 방법 2
// Time: O(n^n)
// Space: O(m)
function main(n, m) {
  const p = Array.from({ length: m }, () => 0);
  let result = 0;

  function dfs(l) {
    if (l === m) {
      console.log(p.join(" "));
      result++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      p[l] = i;
      dfs(l + 1);
    }
  }

  dfs(0);
  console.log(result);
}

main(3, 2);
