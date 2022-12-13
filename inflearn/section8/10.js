// Title: 순열 구하기
// 방법 1
// Time: O(n! * n)
// Space: O(n^2)
const main = (n, m) => {
  const result = [];

  function permute(permutation) {
    if (permutation.length === m) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0; i < n.length; i++) {
      if (permutation.includes(n[i])) continue;
      permutation.push(n[i]);
      permute(permutation);
      permutation.pop();
    }
  }
  permute([]);

  return result;
};

console.log(main([3, 6, 9], 2));

// 방법 2
// Time: O(n! * n)
// Space: O(n^2)
const main2 = (n, m) => {
  const result = [];

  function permute(i) {
    if (i === m) {
      result.push(n.slice(0, i));
      return;
    }

    for (let j = i; j < n.length; j++) {
      [n[i], n[j]] = [n[j], n[i]];
      permute(i + 1);
      [n[j], n[i]] = [n[i], n[j]];
    }
  }
  permute(0);

  return result;
};

console.log(main2([3, 6, 9], 2));
