// 방법 1
// Time: O(log n)
// Space: O(1)
const main = (n, t) => {
  n.sort((a, b) => a - b);

  let start = 0;
  let end = n.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (n[middle] === t) return n[middle];

    if (t > n[middle]) start = middle + 1;
    if (t < n[middle]) end = middle - 1;
  }

  return n;
};

console.log(main([23, 87, 65, 12, 57, 32, 99, 81], 32));

// 방법 2
// Time: O(log n)
// Space: O(n)
const main2 = (n, t, lp = 0, rp = n.length - 1) => {
  const mid = Math.floor((lp + rp) / 2);
  if (n[mid] === t) return n[mid];

  if (t > n[mid]) {
    lp = mid + 1;
    return main2(n, t, lp, rp);
  }

  if (t < n[mid]) {
    rp = mid - 1;
    return main2(n, t, lp, rp);
  }
};

console.log(main2([23, 87, 65, 12, 57, 32, 99, 81], 32));
