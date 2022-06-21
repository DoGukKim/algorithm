const solution = (arr, t) => {
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === t) return arr[middle];

    if (t > arr[middle]) start = middle + 1;
    if (t < arr[middle]) end = middle - 1;
  }
};

// to recursion
const binarySearch = (arr, t, lp = 0, rp = arr.length - 1) => {
  const mid = Math.floor((lp + rp) / 2);
  if (arr[mid] === t) return arr[mid];

  if (t > arr[mid]) {
    lp = mid + 1;
    return binarySearch(arr, t, lp, rp);
  }

  if (t < arr[mid]) {
    rp = mid - 1;
    return binarySearch(arr, t, lp, rp);
  }
};

// input
const result = solution([23, 87, 65, 12, 57, 32, 99, 81], 32);
