// Title: 공통 원소 구하기
// 방법 1
// Time: O(nlogn+mlogm)
// Space: O(n+m)
function main(n, n1, m, m1) {
  n1.sort((a, b) => a - b);
  m1.sort((a, b) => a - b);

  let result = "";
  let lt = 0;
  let rt = 0;

  while (lt < n && rt < m) {
    if (n1[lt] === m1[rt]) {
      result += `${n1[lt]} `;
      lt++;
      rt++;
      continue;
    }

    if (n1[lt] > m1[rt]) {
      rt++;
    } else {
      lt++;
    }
  }

  console.log(result);
}

// 방법 2
// Time: O((n+m)log(n+m))
// Space: O(n+m)
function main(n, n1, m, m1) {
  const assemble = [...n1, ...m1].sort((a, b) => a - b);
  const hash = new Map();
  let result = "";

  for (let i = 0; i < n + m; i++) {
    if (hash.get(assemble[i])) {
      result += `${assemble[i]} `;
      continue;
    }

    hash.set(assemble[i], true);
  }

  console.log(result);
}

main(5, [3, 2, 5, 7, 8], 5, [1, 3, 9, 5, 2]);
