// Title: 두 배열 합치기
// 방법 1
// Time: O(n1 + n2)
// Space: O(n1 + n2)
// Input: [1, 3, 5], [2, 3, 6, 7, 9]
function main(n1, n2) {
  const result = [];

  let lp = 0;
  let rp = 0;

  while (lp < n1.length && rp < n2.length) {
    if (n1[lp] < n2[rp]) {
      result.push(n1[lp]);
      lp++;
    } else {
      result.push(n2[rp]);
      rp++;
    }
  }

  while (lp < n1.length) {
    result.push(n1[lp]);
    lp++;
  }
  while (rp < n2.length) {
    result.push(n2[rp]);
    rp++;
  }

  return result;
}

// 방법 2
// Time: O(min(n1,n2)^2) -> this solution is shifting worst case. it is O(n)
// Space: O(n1 + n2)
function main(n1, n2) {
  const result = [];

  while (n1.length && n2.length) {
    if (n1[0] < n2[0]) {
      result.push(n1.shift());
    } else {
      result.push(n2.shift());
    }
  }

  return [...result, ...n1, ...n2];
}
console.log(main([1, 3, 5], [2, 3, 6, 7, 9])); // -> [1, 2, 3, 3, 5, 6, 7, 9]
