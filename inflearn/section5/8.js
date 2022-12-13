// Title: 아나그램(2)
// 방법 1
// Time: O(n!*t)
// Space: O(t!)
function main(s, t) {
  const allPermutation = [];

  function dfs(p) {
    if (t.length === p.length) {
      allPermutation.push(p.join(""));
      return;
    }

    for (let i = 0; i < t.length; i++) {
      if (p.includes(t[i])) continue;
      p.push(t[i]);
      dfs(p);
      p.pop();
    }
  }
  dfs([]);

  let result = 0;
  for (let i = 0; i < allPermutation.length; i++) {
    if (s.includes(allPermutation[i])) result++;
  }

  console.log(result);
}

// 방법 2
// Time: O(s*t)
// Space: O(1)
function main(s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = "";
    let pointer = i;
    let count = t.length;

    while (count--) {
      sum += s[pointer++];
    }

    const sorted = sum.split("").sort().join("");
    if (sorted === t) result++;
  }

  console.log(result);
}
