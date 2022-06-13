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

// input
const result = solution([23, 87, 65, 12, 57, 32, 99, 81], 32);
