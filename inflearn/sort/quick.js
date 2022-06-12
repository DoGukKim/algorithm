const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];

  let startPoint = left;
  let endPoint = right;

  while (startPoint <= endPoint) {
    while (arr[startPoint] < pivot) {
      startPoint++;
    }

    while (arr[endPoint] > pivot) {
      endPoint--;
    }

    if (startPoint <= endPoint) {
      swap(arr, startPoint, endPoint);
      startPoint++;
      endPoint--;
    }
  }

  return startPoint;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  const index = partition(arr, left, right);
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

const result = quickSort([9, 5, 2, 3, 7, 8, 4]);
console.log(result);
