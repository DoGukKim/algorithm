const ver1QuickSort = (
  originalArray,
  inputLowIndex = 0,
  inputHighIndex = originalArray.length - 1,
  recursiveCall = false
) => {
  const array = recursiveCall ? originalArray : [...originalArray];

  const partitionArray = (lowIndex, highIndex) => {
    const swap = (leftIndex, rightIndex) => {
      const temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
    };

    const pivot = array[highIndex];
    let partitionIndex = lowIndex;

    for (
      let currentIndex = lowIndex;
      currentIndex < highIndex;
      currentIndex += 1
    ) {
      if (array[currentIndex] < pivot) {
        swap(partitionIndex, currentIndex);
        partitionIndex += 1;
      }
    }
    swap(partitionIndex, highIndex);
    return partitionIndex;
  };

  if (inputLowIndex < inputHighIndex) {
    const partitionIndex = partitionArray(inputLowIndex, inputHighIndex);
    const RECURSIVE_CALL = true;
    quickSort(array, inputLowIndex, partitionIndex - 1, RECURSIVE_CALL);
    quickSort(array, partitionIndex + 1, inputHighIndex, RECURSIVE_CALL);
  }

  return array;
};

// otherVersion

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
