// Title: 두 배열 합치기
// Time: O(n+m)
// Space: O(n+m)
function main(n, n1, m, m1) {
  const result = [];
  let lt = 0;
  let rt = 0;

  while (lt < n && rt < m) {
    if (n1[lt] < m1[rt]) {
      result.push(n1[lt]);
      lt++;
    } else {
      result.push(m1[rt]);
      rt++;
    }
  }

  while (lt < n) {
    result.push(n1[lt++]);
  }

  while (rt < m) {
    result.push(m1[rt++]);
  }

  console.log(result);
}

// Time: O(n+m * n+m log n+m)
// Space: O(n+m)
function main(_, n1, _, m1) {
  return n1.concat(m1).sort((a, b) => a - b);
}

main(3, [1, 3, 5], 5, [2, 3, 6, 7, 9]);
