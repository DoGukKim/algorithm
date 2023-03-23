// Title: LRU
// Time: O(n*s)
// Space: O(s)
function main(s, n, data) {
  const cash = Array.from({ length: s }, () => 0);

  for (let i = 0; i < n; i++) {
    const index = cash.indexOf(data[i]);

    if (index !== -1) {
      hit(index, data[index]);
      continue;
    }

    miss(data[i]);
  }

  console.log(cash);

  function hit(idx, d) {
    for (let i = idx; i > 0; i--) cash[i] = cash[i - 1];
    cash[0] = d;
  }

  function miss(d) {
    for (let i = s - 1; i > 0; i--) cash[i] = cash[i - 1];
    cash[0] = d;
  }
}

main(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
