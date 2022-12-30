// Title: 순열 구하기
// 방법 1
// Time: O(n^n)
// Space: O(m)
function main(n, m, numbers) {
  const p = Array.from({ length: m }, () => 0);
  const ch = Array.from({ length: n }, () => 0);
  let result = 0;

  function dfs(l) {
    if (l === m) {
      console.log(p.slice().join(" "));
      result++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        p[l] = numbers[i];
        dfs(l + 1);
        ch[i] = 0;
      }
    }
  }

  dfs(0);
  console.log(result);
}

main(3, 2, [3, 6, 9]);

// 방법 2
// Time: O(n^n)
// Space: O(m)
function main(n, m) {
  const result = 0;

  function dfs(i) {
    if (i === m) {
      console.log(n.slice(0, i));
      result++;
      return;
    }

    for (let j = i; j < n.length; j++) {
      [n[i], n[j]] = [n[j], n[i]];
      dfs(i + 1);
      [n[j], n[i]] = [n[i], n[j]];
    }
  }

  dfs(0);
  console.log(result);
}

main([3, 6, 9], 2);
