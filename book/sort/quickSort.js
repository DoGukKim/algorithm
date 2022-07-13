// TimeComplexity O(n log n)
// SpaceComplexity O(1)
const swap = (arr, leftIndex, rightIndex) => {
  [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
};

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((right + left) / 2)];

  let l = left;
  let r = right;

  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }
    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }

  return l;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let index = partition(arr, left, right);

  if (left < right) {
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }

  return arr;
};
