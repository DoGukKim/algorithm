// Title: 공통 원소 구하기
// 방법 1
// Time: O(n)
// Space: O(n)
function main(n, m) {
  n.sort((a, b) => a - b);
  m.sort((a, b) => a - b);

  const result = [];
  let lp = 0;
  let rp = 0;

  while (lp < n.length && rp < m.length) {
    if (n[lp] === m[rp]) {
      result.push(m[rp]);
      rp++;
      lp++;
    } else if (m[rp] < n[lp]) {
      rp++;
    } else lp++;
  }

  return result;
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(n, m) {
  const map = new Map();
  const nm = [...n, ...m];

  for (let i = 0; i < nm.length; i++) {
    map.set(nm[i], (map.get(nm[i]) || 0) + 1);
  }

  const result = [];
  for (const [k, v] of map) {
    if (v > 1) result.push(k);
  }

  return result.sort((a, b) => a - b);
}

console.log(main([3, 2, 5, 7, 8], [1, 3, 9, 5, 2])); // -> [ 2, 3, 5 ]
