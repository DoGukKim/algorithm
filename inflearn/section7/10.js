// Title: 이분검색
// Time: O(n log n)
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

  console.log(n);
};

main([23, 87, 65, 12, 57, 32, 99, 81], 32);
