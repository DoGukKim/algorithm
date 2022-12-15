// Title: 순열 구하기
// 방법 1
// Time: O(n!)
// Space: O(n!)
function main(n, m) {
  const result = [];
  const p = Array.from({ length: m }, () => 0);
  const ch = Array.from({ length: n.length }, () => 0);

  function dfs(l) {
    if (l === m) {
      result.push([...p]);
      return;
    }

    for (let i = 0; i < n.length; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        p[l] = n[i];
        dfs(l + 1);
        ch[i] = 0;
      }
    }
  }
  dfs(0);

  console.log(result);
}

// 방법 2
// Time: O(n!*n)
// Space: O(n!)
function main(n, m) {
  const result = [];

  function dfs(p) {
    if (p.length === m) {
      result.push([...p]);
      return;
    }

    for (let i = 0; i < n.length; i++) {
      if (p.includes(n[i])) continue;
      p.push(n[i]);
      dfs(p);
      p.pop();
    }
  }
  dfs([]);

  console.log(result);
}

// 방법 3
// Time: O(n!)
// Space: O(n!)
function main(n, m) {
  const result = [];

  function dfs(i) {
    if (i === m) {
      result.push(n.slice(0, i));
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
