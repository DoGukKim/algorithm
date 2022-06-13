const swap = (arr, leftIndex, rightIndex) => {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
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
  if (arr.length > 1) {
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
};
