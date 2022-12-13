// Title: 조합 구하기
// 방법 1
// Time: O(n - k!)
// Space: O(n - k!)
const main = (n, m) => {
  const result = [];

  function com(idx, combination) {
    if (combination.length === m) {
      result.push([...combination]);
      return;
    }

    for (let i = idx; i < n.length; i++) {
      combination.push(n[i]);
      com(i + 1, combination);
      combination.pop();
    }
  }

  com(0, []);

  return result;
};

console.log(main([1, 2, 3, 4], 2));
