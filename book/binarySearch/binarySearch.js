// Time: O(log n)
// Space: O(1)
const main = (arr, t) => {
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === t) return arr[middle];

    if (t > arr[middle]) start = middle + 1;
    if (t < arr[middle]) end = middle - 1;
  }

  return arr;
};

console.log(main([23, 87, 65, 12, 57, 32, 99, 81], 32));

// Recursive
// Time: O(log n)
// Space: O(1)
const recursion = (arr, t, lp = 0, rp = arr.length - 1) => {
  const mid = Math.floor((lp + rp) / 2);
  if (arr[mid] === t) return arr[mid];

  if (t > arr[mid]) {
    lp = mid + 1;
    return recursion(arr, t, lp, rp);
  }

  if (t < arr[mid]) {
    rp = mid - 1;
    return recursion(arr, t, lp, rp);
  }
};

console.log(recursion([23, 87, 65, 12, 57, 32, 99, 81], 32));
